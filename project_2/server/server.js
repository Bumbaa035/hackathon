const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const turf = require('@turf/turf');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: "*" }
});


// Restricted area (same as frontend)
const restrictedZone = turf.polygon([[
  [106.8530, 47.9186],
  [106.8570, 47.9226],
  [106.9555, 47.9286],
  [106.9445, 47.8970],
  [106.9345, 47.8990],
  [106.8875, 47.8960],
  [106.8725, 47.8910],
  [106.8570, 47.8970],
  [106.8530, 47.9186]  // polygon should be closed
]]);

const userLocations = {};
const userSockets = {}; // userId: socket


io.on('connection', (socket) => {
  console.log('Шинэ холболт:', socket.id);     

  socket.on('locationUpdate', (data) => {      
    const { userId, lat, lng } = data;
    console.log(`User ${userId}: ${lat}, ${lng}`);


    
    const previous = userLocations[userId];

    // Байршил өөрчлөгдсөн эсэхийг шалгах
    const hasMoved = !previous || previous.lat !== lat || previous.lng !== lng;

    userLocations[userId] = {
      lat,
      lng,
      lastMovedAt: hasMoved ? Date.now() : previous?.lastMovedAt || Date.now()
    };

    // socket хадгалах
    userSockets[userId] = socket;





    // Бусад клиентүүдэд хэрэглэгч бүрийн байршлыг илгээх
    io.emit('locationUpdate', {
      userId,
      lat,
      lng,
    });

    // Хязгаарлагдсан бүсэд орсон эсэхийг шалгах
    const point = turf.point([lng, lat]);      
    const isInside = turf.booleanPointInPolygon(point, restrictedZone);

    if (isInside) {
      console.log(`User ${userId} улаан бүсээд орлоо`);
      // зөвхөн тухайн хэрэглэгчид буцааж сэрэмжлүүлэг илгээх
      socket.emit('alert', 'Та хориотой бүс  рүү орсон байна!');
    }
  });
});

server.listen(3001, () => {
  console.log('Сервер ажиллаж байна: порт 3001');
});


// ⏰ 1 цаг хөдлөөгүй хэрэглэгч шалгах (5 мин тутамд)
setInterval(() => {
  const now = Date.now();
  const ONE_HOUR = 10000;

  for (const [userId, data] of Object.entries(userLocations)) {
    if (now - data.lastMovedAt > ONE_HOUR) {
      const socket = userSockets[userId];
      if (socket) {
        console.log(`🚨 Хэрэглэгч ${userId} 1 цаг хөдлөөгүй`);
        socket.emit('alert', '🚨 Та 1 цаг хөдлөөгүй байна. Та зүгээр байна уу?');
        io.emit('adminAlert', {
          userId,
          lat: data.lat,
          lng: data.lng,
          message: `⚠️ Хэрэглэгч ${userId} 1 цаг хөдлөөгүй байна.`
        });
        // Та энд webhook, email, эсвэл admin push alert нэмэх боломжтой
      }
    }
  }
}, 3 * 60 * 1000); // 5 минут тутам