import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';

import io from 'socket.io-client';
import 'leaflet/dist/leaflet.css';

const socket = io('http://210.109.53.233:3001'); // серверийн IP

const restrictedZone = [
  [47.9186, 106.8530],
  [47.9226, 106.8570],
  [47.9286, 106.9555],
  [47.8970, 106.9445],
  [47.8990, 106.9345],
  [47.8960, 106.8875],
  [47.8910, 106.8725],
  [47.8970, 106.8570],
];


function isInsidePolygon(point, polygon) {
  const [x, y] = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0], yi = polygon[i][1];
    const xj = polygon[j][0], yj = polygon[j][1];

    const intersect =
      yi > y !== yj > y &&
      x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

    if (intersect) inside = !inside;
  }
  return inside;
}
export default function MapPage() {
//   const [location, setLocation] = useState(null);
    const [locations, setLocations] = useState({});
useEffect(() => {
  socket.on('adminAlert', (alert) => {
    alert(message); // энгийн browser alert ашиглаж болно
    console.log('⚠️ Админ сэрэмжлүүлэг:', alert.message);
  });
}, []);
  
  useEffect(() => {
    socket.on('locationUpdate', (coords) => {
  console.log('Байршил:', coords.userId, coords.lat, coords.lng);

  setLocations((prev) => ({
    ...prev,
    [coords.userId]: [coords.lat, coords.lng]
  }));
});
socket.on('locationUpdate', (coords) => {
  console.log('Байршил:', coords.userId, coords.lat, coords.lng);

  setLocations((prev) => ({
    ...prev,
    [coords.userId]: [coords.lat, coords.lng]
  }));
});

//     socket.on('locationUpdate', (coords) => {
//       console.log('Гар утаснаас ирсэн байршил:', coords.userId, coords.lat, coords.lng);
//       const updatedLocation = [coords.lat, coords.lng];
// setLocation(updatedLocation);


//     });

  }, []);



  return (
    <MapContainer center={[47.918, 106.918]} zoom={12} style={{ height: "90vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Polygon positions={restrictedZone} color="red" />
      {Object.entries(locations).map(([userId, loc]) => (
  <Marker key={userId} position={loc}>
    <Popup>📱 Хэрэглэгч: {userId}</Popup>
  </Marker>
))}

      {/* {location && (
        <Marker position={location}>
          <Popup>📱 Гар утасны байршил</Popup>
        </Marker>
      )} */}
      
    </MapContainer>
  );
}
