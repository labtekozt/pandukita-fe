import { Button } from "@kiwicom/orbit-components/lib/";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import "swiper/css";
import "swiper/css/free-mode";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useFetch } from "../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import Onboarding from "../component/OnboardingPage";



function LihatPetaAll() {
  const id = useParams().id;
  const { loading, data, error } = useFetch(`/planners/${id}/map`);
  const LampungLatLong = [-5.45, 105.26667];
  const navigate = useNavigate();

  if (!loading && error?.status === 404) {
    navigate("/404");
  }
  return (
    <>
      {loading ? (
        <Onboarding />
      ) : (
        <div className="containerWisata">
          <div className="p-2 z-50 shadow-sm top-0 bg-white">
            <div className="flex">
              <div className="grow h-6">
                <div onClick={() => navigate(`/planner/${id}`)}>
                  <IconArrowNarrowLeft color="black" />
                </div>
              </div>
              <div className="grow-0 mr-8">Map Wisata</div>
              <div className="grow h-1"></div>
            </div>
          </div>

          <div>
            <div className="mb-[-20px]">
              <MapContainer
                className="leaflet-container2"
                style={{ height: "calc(100vh - 56px)" }}
                center={
                  data?.plan?.length > 0
                    ? [
                        data?.plan[0].distination.latitude,
                        data?.plan[0].distination.longtitude,
                      ]
                    : LampungLatLong
                }
                zoom={10}
                scrollWheelZoom={true}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {data?.plan?.map((item, index) => (
                  <Marker
                    key={index}
                    position={[
                      item.distination.latitude,
                      item.distination.longtitude,
                    ]}
                  >
                    <Popup>
                      <div className="flex flex-col p-2 ">
                        <span className="text-[20px] font-bold mb-2">
                          {item.distination.name}
                        </span>
                        <span className="text-sm mb-2">
                          {item.distination.address}
                        </span>
                        <Button
                          centered={true}
                          href={`/destination/${item.distination._id}`}
                        >
                          Lihat Wisata
                        </Button>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LihatPetaAll;
