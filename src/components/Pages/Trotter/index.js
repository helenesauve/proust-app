import React, {useState} from "react";
import { MapContainer, TileLayer} from 'react-leaflet';
import "./style.css";
import "leaflet/dist/leaflet.css";

function Trotter() {
  return (
        <MapContainer center={[48.8566, 2.3522]} zoom={13}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        </MapContainer>
  );
}

export default Trotter;