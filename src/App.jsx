import { useState } from 'react'
import { Alert,Heading } from "@kiwicom/orbit-components";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import './App.css'

function App() {
  const position = [51.505, -0.09]
  return(
  <>
  <Heading>Hello</Heading>
  <Alert>Map</Alert>
  <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-100">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  </>
  )
}

export default App
