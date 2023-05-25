import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'leaflet/dist/leaflet.css';
import '../style/components/Map.css';

function Map() {
  return (
    <div className="leaflet-container top">
      <MapContainer center={[51.505, -0.09]} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default Map;
