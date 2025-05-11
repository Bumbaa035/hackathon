import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import io from 'socket.io-client';
import 'leaflet/dist/leaflet.css';

// Socket connection
const socket = io('http://210.109.53.233:3001');

// Restricted zone coordinates
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

// Map page component
export default function MapPage() {
  const [locations, setLocations] = useState({});

  useEffect(() => {
    socket.on('locationUpdate', (coords) => {
      console.log('Байршил:', coords.userId, coords.lat, coords.lng);
      setLocations((prev) => ({
        ...prev,
        [coords.userId]: [coords.lat, coords.lng]
      }));
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Navigation Bar */}
      <nav style={{
        height: '60px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#3b82f6'
      }}>
        ByteCraze
        <div style={{ fontSize: '16px', color: '#000' }}>Нүүр</div>
      </nav>

      {/* Main Content Area */}
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Map */}
        <div style={{ flex: 3 }}>
          <MapContainer center={[47.918, 106.918]} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Polygon positions={restrictedZone} color="red" />
            {Object.entries(locations).map(([userId, loc]) => (
              <Marker key={userId} position={loc}>
                <Popup>📱 Хэрэглэгч: {userId}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Admin Panel */}
        <div style={{
          width: '200px',
          backgroundColor: '#e8e8e8',
          borderLeft: '1px solid #ccc',
          padding: '20px',
          overflowY: 'auto'
        }}>
          <h2>Админ самбар</h2>
          <p>Нийт хэрэглэгчид: {Object.keys(locations).length}</p>
          <ul>
            {Object.entries(locations).map(([userId, loc]) => (
              <li key={userId}>
                <strong>{userId}</strong>: {loc[0].toFixed(4)}, {loc[1].toFixed(4)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
