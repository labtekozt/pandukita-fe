/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import BottomNavigation from "../component/BottomNavigation";
import Onboarding from "../component/OnboardingPage";
import HomeHeaderImage from "../disk/image/HeaderHome.png";
import PlannerAds from "../disk/image/PlannerAds.png";
import TourGuideAds from "../disk/image/TourGuideAds.png";
import PemanduAds from "../disk/image/pemanduAds.png";
import { Stack } from "@kiwicom/orbit-components/lib/";
import { IconSearch } from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import { GlobalContext } from "../store";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


function HomePage() {
  const { state, dispatch } = useContext(GlobalContext);
  const { data, loading, error } = useFetch("/destinations/home");
  const navigate = useNavigate();

  if (!loading && error) {
    console.log(error);
    if (error.status === 401) {
      dispatch({ type: "LOGOUT" });
    }
    navigate("/login");
  }

  return (
    <>
      {loading ? (
        <Onboarding />
      ) : (
        <div className="container">
          <div className="z-50">
          </div>
          <img
            loading="lazy"
            src={HomeHeaderImage}
            className="relative w-[100%] h-[180px] object-cover"
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
                <Link to={"/destination/search"}>
                  {" "}
                  <input
                    className="p-3 input bg-white-100 rounded-full"
                    placeholder="Cari tempat wisata"
                  />
                </Link>
                <IconSearch className="text-black relative-icon absolute right-5 top-3" />
              </div>
            </Stack>
          </div>
          <div className="mt-[20px] pb-5">
            <h1 className="text-2xl text-jelajah ml-[20px] font-medium text-black mb-2">
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
                  <SwiperSlide key={item._id}>
                    <div className="flex img-box">
                      <Link to={`/destination/${item._id}`}>
                        {/* check if width image is 500px and */}
                        <img
                          loading="lazy"
                          src={item.image[0].url}
                          className="rounded-lg relative w-[100%] object-cover brightness-50 shadow-lg"
                        />
                      </Link>
                      <span className="text-slider slider-tittle text-md mb-2 absolute m-2 text-white mt-[150px] font-bold z-50 text-left">
                        <Link to={`/destination/${item._id}`}>{item.name}</Link>
                      </span>
                      <span className="text-slider slider-des text-left text-sm absolute m-2 text-white mt-[200px] z-50">
                        {/* limit description to 500char */}
                        {item.description.length > 100
                          ? item.description.substring(0, 100) + "..."
                          : item.description}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="m-5">
            <div>
              <h1 className="text-2xl font-medium text-black mb-2 ml-1">
                Atur perjalananmu
              </h1>
              <Link to="/planner">
                <img
                  loading="lazy"
                  src={PlannerAds}
                  className="relative w-[100%] object-cover rounded-2xl mb-[35px] shadow-lg"
                />
              </Link>
            </div>
            <div>
              <div>
                <h1 className="text-2xl font-medium text-black mb-3 ml-1">
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
                    {/*{data.category && data.category.map((item) => item.name)}*/}
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
                      <SwiperSlide key={item._id}>
                        <div className="flex img-box">
                          <Link to={`/destination/${item._id}`}>
                            {/* check if width image is 500px and */}
                            <img
                              loading="lazy"
                              src={item.image[0].url}
                              className="rounded-lg relative w-[100%] object-cover brightness-50 shadow-lg"
                            />
                          </Link>
                          <span className="text-slider text-left slider-tittle text-md mb-2 absolute m-2 text-white mt-[180px] font-bold z-50">
                            <Link to={`/destination/${item._id}`}>
                              {item.name}
                            </Link>
                          </span>
                          <span className="text-slider slider-des text-left text-sm absolute m-2 text-white mt-[230px] z-50">
                            {/* limit description to 500char */}
                            {item.description.length > 100
                              ? item.description.substring(0, 100) + "..."
                              : item.description}
                          </span>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
            <div className="mt-[30px]">
              {/* <Link to="/tourguide"> */}
              <h1 className="text-2xl font-medium text-black mb-2">
                Sewa pemandu wisata
              </h1>
              <img
                loading="lazy"
                src={TourGuideAds}
                className="relative w-[100%] object-cover rounded-2xl shadow-lg"
              />
              {/* </Link> */}
            </div>
            <div className="mt-[30px] pb-[130px]">
              {/* <Link to="/destination/add"> */}
              <h1 className="text-2xl font-medium text-black mb-2">
                Kamu pemandu wisata?
              </h1>
              <img
                loading="lazy"
                src={PemanduAds}
                className="relative w-[100%] object-cover rounded-2xl shadow-lg"
              />
              {/* </Link> */}
            </div>
          </div>
          <BottomNavigation />
        </div>
      )}
    </>
  );
}

export default HomePage;
