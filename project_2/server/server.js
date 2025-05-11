const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const turf = require('@turf/turf');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: "*" }
});

// Хязгаарлалттай бүсийн координат
const restrictedZone = [
  { lat: 47.9186, lng: 106.9170 },
  { lat: 47.9186, lng: 106.9195 },
  { lat: 47.9170, lng: 106.9195 },
  { lat: 47.9170, lng: 106.9170 },
  { lat: 47.9186, lng: 106.9170 }
];

// Хэрэглэгч бүрийн байршлыг хадгалах
const userLocations = {};

function isInRestrictedArea(location) {
  const pt = turf.point([location.lng, location.lat]);
  const poly = turf.polygon([[...restrictedZone.map(p => [p.lng, p.lat])]]);
  return turf.booleanPointInPolygon(pt, poly);
}

io.on('connection', (socket) => {
  console.log('📲 Клиент холбогдлоо');

  socket.on('locationUpdate', (data) => {
    const { userId, lat, lng } = data;

    if (!userId || lat == null || lng == null) return;

    const coords = { lat, lng };
    userLocations[userId] = coords;

    console.log(`📍 Хэрэглэгч ${userId}-ын байршил:`, coords);

    const inZone = isInRestrictedArea(coords);
    if (inZone) {
      console.log(`⚠️ Хэрэглэгч ${userId} хориотой бүсэд орсон!`);
      socket.emit('alert', '⚠️ Та хориотой бүс рүү орсон байна!');
    }

    // Бүх хэрэглэгчдийн байршлыг дамжуулах
    io.emit('allLocations', userLocations);
  });

  socket.on('disconnect', () => {
    console.log('❌ Клиент салсан');
  });
});

server.listen(3001, () => {
  console.log('🚀 Сервер 3001 порт дээр ажиллаж байна');
});
