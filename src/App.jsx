import { useState } from 'react'
import { Alert,Heading } from "@kiwicom/orbit-components";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import './App.css'

function App() {
  const krui = [-5.194566051150071, 103.93286477606588]
  const uin = [-5.383028328866196, 105.30267654831273]
  return(
  <>
  <div className="p-5">
    <Heading>Pantai Krui</Heading>
  </div>
  <MapContainer center={krui} zoom={8} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={krui}>
      <Popup>
        Pantai Krui
      </Popup>
    </Marker>
    <Marker position={uin}>
      <Popup>
        Uin
      </Popup>
    </Marker>
  </MapContainer>
  </>
  )
}

export default App
