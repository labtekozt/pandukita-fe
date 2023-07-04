/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import BottomNavigation from "../component/BottomNavigation";
import Onboarding from "../component/OnboardingPage";
import HomeHeaderImage from "../disk/image/HeaderHome.png";
import PlannerAds from "../disk/image/PlannerAds.png";
import TourGuideAds from "../disk/image/TourGuideAds.png";
import Slider from "../disk/image/slider.jpg";
import PemanduAds from "../disk/image/pemanduAds.png";
import { Stack } from "@kiwicom/orbit-components/lib/";
import { IconSearch } from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import { GlobalContext } from "../store";
import axiosApiInstance from "../services/axios/axiosApi";
import { Link } from "react-router-dom";
function HomePage() {
  const { state, dispatch } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axiosApiInstance.get("/destinations/home");
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
        <div className="container">
          <img
            src={HomeHeaderImage}
            className="relative w-[100%] object-cover"
          />
          <div className="absolute top-0 m-5 w-100">
            <Stack spacing="large" direction="column">
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Halo, {state && state.user.username}
                </h1>
                <p className="text-md text-white">
                  Selamat datang di PanduKita
                </p>
              </div>
              <div className="relative flex">
                <a href="/wisatasearch">
                  {" "}
                  <input
                    className="p-3 input bg-white-100 rounded-full"
                    placeholder="Cari tempat wisata"
                  />
                </a>
                <IconSearch className="text-black relative-icon absolute right-5 top-3" />
              </div>
            </Stack>
          </div>
          <div className="mt-[20px] pb-5">
            <h1 className="text-2xl text-jelajah ml-[20px] font-bold text-black mb-2">
              Jelajahi Indonesia
            </h1>

            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper mt-4"
            >
              {data.randomDestination &&
                data.randomDestination.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex">
                      <Link to={`/${item._id}`}>
                        {/* check if width image is 500px and */}
                        <img
                          src={item.image[0].url}
                          className="rounded-lg relative w-[100%]"
                        />
                      </Link>
                      <span className="text-slider slider-title text-md mb-2 absolute m-2 text-white  font-bold z-50">
                        <a href="/informasiwisata">{item.name}</a>
                      </span>
                      <span className="text-slider text-left text-sm absolute m-2 text-white mt-[5em] z-50">
                        {/* limit item.description to 500char */}
                        {item.description.length > 300
                          ? item.description.substring(0, 300) + "..."
                          : item.description}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="m-5">
            <div>
              <h1 className="text-2xl font-bold text-black mb-2 ml-1">
                Bingung Mau Kemana?
              </h1>
              <a href="/tripplannerhome">
                <img
                  src={PlannerAds}
                  className="relative w-[100%] object-cover rounded-2xl mb-[35px]"
                />
              </a>
            </div>
            <div>
              <div>
                <h1 className="text-2xl font-bold text-black mb-3 ml-1">
                  Kategori
                </h1>
                <div className="flex">
                  <button
                    className="ml-1 bg-[#F2F2F2] shadow-md rounded-full"
                    style={{
                      padding: "1px 10px 1px 10px",
                      border: "1px solid #D1D1D1",
                    }}
                  >
                    Pantai
                  </button>
                </div>
              </div>
              <div className="mt-[20px] pb-5">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={10}
                  freeMode={true}
                  modules={[FreeMode]}
                  className="mySwiper mt-4"
                >
                  {data.randomCategory &&
                    data.randomCategory.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex">
                          <Link to={`/${item._id}`}>
                            <img
                              src={item.image[0].url}
                              className="rounded-lg relative w-[100%]"
                            />
                          </Link>
                          <span className="text-slider slider-title text-md mb-2 absolute m-2 text-white  font-bold z-50">
                            <a href="/informasiwisata">{item.name}</a>
                          </span>
                          <span className="text-slider text-left text-sm absolute m-2 text-white mt-[5em] z-50">
                            {item.description.length > 300
                              ? item.description.substring(0, 300) + "..."
                              : item.description}
                          </span>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
            <div className="mt-[30px]">
              <a href="/toureguide">
                <h1 className="text-2xl font-bold text-black mb-2">
                  Sewa pemandu wisata
                </h1>
                <img
                  src={TourGuideAds}
                  className="relative w-[100%] object-cover rounded-2xl"
                />
              </a>
            </div>
            <div className="mt-[30px] pb-[130px]">
              <a href="/wisataadd">
                <h1 className="text-2xl font-bold text-black mb-2">
                  Kamu Pemandu Wisata?
                </h1>
                <img
                  src={PemanduAds}
                  className="relative w-[100%] object-cover rounded-2xl"
                />
              </a>
            </div>
          </div>
          <BottomNavigation />
        </div>
      )}
    </>
  );
}

export default HomePage;
