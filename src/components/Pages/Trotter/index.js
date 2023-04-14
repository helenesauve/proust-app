import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "./style.css";
import "leaflet/dist/leaflet.css";


function Trotter() {
  const markers = [
    {
      geocode: [48.860764, 2.393646],
      popUp: "Cemetery of Père Lachaise, where Proust is buried",
    },
    {
      geocode: [48.87559171099804, 2.318465364416511],
      popUp: "This is where Proust was born on 10 July 1871",
    },
    {
      geocode: [48.8709476111008, 2.322475093255008],
      popUp:
        "In 1873, the Proust family move into immeuble boulevard Malesherbes, dans lequel ils resteront jusqu’en 1900.",
    },
  ];

  const customIcon = new Icon ({
    iconUrl: require('./pin.png'),
    iconSize: [38, 38] // size of the icon
  })

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
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
