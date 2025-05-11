"use client";
// npm install @react-google-maps/api
// npm install socket.io-client   # For live location
// AIzaSyBNBGeTyes306ZF6-UUD0thw3YFqz2HW_c

// MapComponent.jsx
import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, Polygon } from '@react-google-maps/api';

const restrictedAreaCoords = [
  { lat: 47.9135907, lng: 106.8549934 },
  { lat: 47.9208463, lng: 106.8529529 },
  { lat: 47.9277618, lng: 106.94058 },
  { lat: 47.908115, lng: 106.942039 },
];
// 47.9208463,106.8529529
// 47.9135907,106.8549934
// 47.9277618,106.94058
// 47.908115,106.942039
const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 47.915695,
  lng: 106.911958
};

function MapComponent({ deviceLocation }) {
  const mapRef = useRef(null);

  // Check if device is in restricted area
  const isInsideRestricted = (lat, lng) => {
    const point = new window.google.maps.LatLng(lat, lng);
    const polygon = new window.google.maps.Polygon({ paths: restrictedAreaCoords });
    return window.google.maps.geometry.poly.containsLocation(point, polygon);
  };

  // Alert if device is in restricted area
  if (deviceLocation && window.google?.maps?.geometry) {
    const inside = isInsideRestricted(deviceLocation.lat, deviceLocation.lng);
    if (inside) {
      alert("Device entered restricted area!");
    }
  }

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBNBGeTyes306ZF6-UUD0thw3YFqz2HW_c"
      libraries={['geometry']}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onLoad={map => (mapRef.current = map)}
      >
        <Polygon
          paths={restrictedAreaCoords}
          options={{
            fillColor: "#FF0000",
            fillOpacity: 0.2,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
          }}
        />
        {deviceLocation && (
          <Marker position={deviceLocation} label="Device" />
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
