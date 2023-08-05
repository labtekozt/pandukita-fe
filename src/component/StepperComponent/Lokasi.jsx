import { useContext, useCallback, useRef, memo, useState } from "react";
import { IconMap2 } from "@tabler/icons-react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { StepperContext } from "./StepperContext";
import axios from "axios";
import L from "leaflet";

function Lokasi() {
  const loadingRef = useRef(false);
  const { data, handleChange, handleChangeBulk } = useContext(StepperContext);
  const markerRef = useRef(null);
  const MapRef = useRef(null);

  const url = (long, lat) =>
    `https://nominatim.openstreetmap.org/reverse.php?lat=${lat}&lon=${long}&zoom=18&format=jsonv2`;

  const getAddress = useCallback(async (long, lat) => {
    try {
      // only call Api once

      const { data } = await axios.get(url(long, lat));
      handleChangeBulk({
        address: data.display_name,
        city: data.address.county || data.address.city,
        province: data.address.state,
        latitude: lat,
        longtitude: long,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleOnMapClick = useCallback(async (e) => {
    const { lat, lng } = e.latlng;
    loadingRef.current = true;

    MapRef.current.clearAllEventListeners();
    if (!MapRef.current) return;
    // if we already have a marker, just move it
    if (markerRef.current) {
      markerRef.current.setLatLng(e.latlng);
    } else {
      markerRef.current = L.marker(e.latlng).addTo(MapRef.current);
    }

    // get addr
    await getAddress(lng, lat);

    // after 1 second, reattach the event listener
    setTimeout(() => {
      MapRef.current.on("click", handleOnMapClick);
      loadingRef.current = false;
    }, 1000);
  }, []);

  const MapEvents = () => {
    const map = useMap();
    MapRef.current = map;
    if (!loadingRef.current) map.on("click", handleOnMapClick);
    return null;
  };

  return (
    <div className="flex-col">
      <div className="flex absolute ml-[50px] justify-center items-center mt-[20px] z-50">
        <input
          style={{ padding: "10px" }}
          name="lokasi"
          id={"address"}
          className="lokasi border rounded-md border-gray placeholder:text-sm placeholder:text-gray block bg-[#e8edf1] rounded-sm py-2 pl-2 shadow-sm focus:ring-[#f0ecec] focus:ring-1 md:text-md"
          placeholder="Ekowisata Cukunyinyi Mangrove......"
          type="text"
          value={data.address}
          onChange={handleChange}
        />
        <div className="icon-lokasi absolute">
          <IconMap2 />
        </div>
      </div>

      <div className="">
        <MapContainer
          className="leaflet-container3 cursor-pointer"
          center={
            data.latitude ? [data.latitude, data.longtitude] : [-5.45, 105.26667]
          }
          zoom={10}
          scrollWheelZoom={true}
          dragging={true}
          doubleClickZoom={true}
          zoomControl={true}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapEvents />
        </MapContainer>
      </div>
    </div>
  );
}
export default Lokasi;
