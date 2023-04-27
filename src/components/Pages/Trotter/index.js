// import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon } from "leaflet";
import "./style.css";
import "leaflet/dist/leaflet.css";
import locations from "./locations.json";
import MarkerClusterGroup from "react-leaflet-cluster";


function Trotter() {
  const markers = locations

  const customIcon = new Icon ({
    iconUrl: require('./pin.png'),
    iconSize: [38, 38] // size of the icon
  })

  const createCustomClusterIcon = (cluster) => {
    return new divIcon ({
        html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`
    })
  }
  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={5}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    <MarkerClusterGroup
    chunkedLoading
    iconCreateFunction={createCustomClusterIcon}
    >
      {markers.map(marker => (
        <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
    </MapContainer>
  );
}

export default Trotter;
