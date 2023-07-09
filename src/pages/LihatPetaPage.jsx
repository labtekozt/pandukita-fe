import React, { useEffect, useState } from "react";
import { TextLink, Button } from "@kiwicom/orbit-components/lib/";
import {
  IconArrowNarrowLeft,
  IconMapPin,
  IconChevronRight,
} from "@tabler/icons-react";
import "swiper/css";
import "swiper/css/free-mode";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate, useParams } from "react-router-dom";
import Onboarding from "../component/OnboardingPage";
import axiosApiInstance from "../services/axios/axiosApi";

function LihatPeta() {
  const navigate = useNavigate();
  const id = useParams().id;
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axiosApiInstance.get(`/destinations/${id}`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {loading ? (
        <Onboarding />
      ) : (
        <div className="containerWisata">
          <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
            <div className="flex">
              <div className="grow h-6">
                <TextLink onClick={() => navigate(`/destination/${id}`)}>
                  <IconArrowNarrowLeft color="black" />
                </TextLink>
              </div>
              <div className="grow-0 mr-8">Tujuan</div>
              <div className="grow h-1"></div>
            </div>
          </div>

          <div>
            <div className="mb-[-20px]">
              <MapContainer
                className="leaflet-container2"
                center={[data.latitude, data.longtitude]}
                zoom={10}
                scrollWheelZoom={true}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[data.latitude, data.longtitude]}>
                  <Popup>{data.name}</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          <div className="pb-[10%] z-20 p-5 bg-white relative rounded-2xl">
            <div className="flex">
              <span className="text-[20px] font-bold">{data.name}</span>
            </div>
            <div className="flex mt-3">
              <IconMapPin />
              <div className="ml-3">
                <span className="text-sm">{data.address}</span>
              </div>
            </div>
            <div className="flex mt-10 z-50 bottom-0">
              <Button
                fullWidth="true"
                submit={true}
                centered={true}
                onClick={() => navigate(`/${id}`)}
              >
                Lihat Wisata
              </Button>
              <IconChevronRight
                color="white"
                className="planner-ai mr-2 absolute ml-[350px] mt-[10px]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LihatPeta;
