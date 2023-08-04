import React, { useEffect, useRef, useState } from "react";
import { TextLink, Button, InputFile } from "@kiwicom/orbit-components/lib/";
import { IconArrowNarrowLeft, IconMap2 } from "@tabler/icons-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Lokasi() {

  const sebalang = [-5.5828711, 105.3776283];   

  return ( 
      <div className="flex-col">
        <div className="flex absolute ml-[50px] justify-center items-center mt-[20px] z-50">
          <input
            style={{ padding: "10px" }}
            name="lokasi"
            className="lokasi border rounded-md border-gray placeholder:text-sm placeholder:text-gray block bg-[#e8edf1] rounded-sm py-2 pl-2 shadow-sm focus:ring-[#f0ecec] focus:ring-1 md:text-md"
            placeholder="Ekowisata Cukunyinyi Mangrove......"
            type="text"/>
          <div className="icon-lokasi absolute">
            <IconMap2 />
          </div>
        </div>
        
        <div className="">
            <MapContainer
                className="leaflet-container3"
                center={[-5.5828711, 105.3776283]}
                zoom={10}
                scrollWheelZoom={true}
                >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[-5.5828711, 105.3776283]}>
                    <Popup>Sebalang</Popup>
                </Marker>
            </MapContainer>
        </div>
    </div>
  );
}

export default Lokasi;
