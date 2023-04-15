import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "./style.css";
import "leaflet/dist/leaflet.css";
import locations from "./locations.json";


function Trotter() {
  const markers = locations

  const customIcon = new Icon ({
    iconUrl: require('./pin.png'),
    iconSize: [38, 38] // size of the icon
  })

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={5}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map(marker => (
        <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Trotter;
