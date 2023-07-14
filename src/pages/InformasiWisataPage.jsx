/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import TourGuideAds from "../disk/image/TourGuideAds.png";
import { TextLink, Button, Tile } from "@kiwicom/orbit-components/lib/";
import {
  IconArrowNarrowLeft,
  IconMapPin,
  IconChevronDown,
  IconChevronUp,
  IconCheck,
  IconMap,
  IconShare,
} from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import axiosApiInstance from "../services/axios/axiosApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import Onboarding from "../component/OnboardingPage";
import { useFetch } from "../hooks/useFetch";

function InformasiWisataPage(props) {
  
  const navigate = useNavigate();
  const id = useParams().id;
  const { loading, error, data } = useFetch(`/destinations/${id}`);
  
  if (!loading && error?.status === 404) {
    navigate("/404");
  }

  function handleShare(){
    if (navigator.share) {
      navigator.share({
        url: location.href,
        title: `${data.name}\n${data.address}`,
        text: "Kunjungi wisata ini di PanduKita yuk!"
      }).then(() => console.log('Successfully shared'))
      .catch((error) => console.log('Error sharing:', error));
    } else {
      //if navigator share not support
    }
  };

  return (
    <>
      {loading ? (
        <Onboarding />
      ) : (
        <div className="containerInfo pb-100">
          <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
            <div className="flex">
              <div className="grow h-6">
                <TextLink onClick={() => navigate("/")}>
                  <IconArrowNarrowLeft color="black" />
                </TextLink>
              </div>
              <div className="grow-0 mr-8">Informasi Wisata</div>
              <div className="grow h-1"></div>
            </div>
          </div>

          <div>
            <div className="share absolute ml-[30%] p-2 mt-6 bg-white rounded-[100%]">
                <IconShare width={20} height={20} onClick={handleShare}/>
            </div>
            <div className="mb-[-20px] img-box2">
              <img
                loading="lazy"
                src={data.image && data.image[0].url}
                className="w-[100%]"
              />
            </div>
          </div>

          <div className="pb-[50%] z-20 p-5 bg-white relative rounded-2xl">
            <div className="flex">
              <span className="text-[20px] font-bold">{data.name}</span>
            </div>
            <div className="flex mt-3">
              <IconMapPin />
              <div className="ml-1">
                <span className="text-sm">{data.address}</span>
              </div>
            </div>
            <div className="flex m-1 mb-3 mt-4">
              <Button
                size="small"
                type="primary"
                onClick={() => navigate(`/destination/${data._id}/map`)}
              >
                <span className="pl-5">Lihat di Peta </span>
              </Button>
              <span className="ml-2 mt-1 absolute">
                <IconMap width={19} color="white" />
              </span>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longtitude}`}
                className="mt-1 ml-2 text-md text-[#00A388]"
                target="_blank"
                rel="noreferrer"
              >
                Buka di Google Maps
              </a>
            </div>
            <div className="pb-5">
              <p style={{ borderBottom: "1px solid #E8EDF1" }}></p>
            </div>
            <div className="text-xl">
              <span size="extraLarge" className="font-bold">
                Deskripsi
              </span>
              <p className="mt-5 text-justify">{data.description}</p>
            </div>
            
            <div className="mt-5">
            <Tile
              title="Galeri"
              expanded={true}
              expandable={true}
              external={true}
              initialExpanded={false}
              noPadding={true}
            >

            <div className="open-hide">
                <div className=" mt-[20px] pb-5">
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="MySwiper mt-4"
                  >
                    {data?.image &&
                      data.image.map((item, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <div className="flex img-box">
                              <img
                                loading="lazy"
                                src={item.url}
                                className="rounded-lg relative w-[100%] object-cover"
                              />
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </div>
            </div>
            </Tile>
            </div>

            <div className="mt-5">
              <Tile
                title="Aktivitas"
                expandable={true}
                external={true}
                initialExpanded={false}
                noPadding={true}
              >
                <div className="grid p-2">
                  {data.category &&
                    data.category.map((item, index) => (
                      <div className="mt-1" key={index}>
                        <div className="flex">
                          <IconCheck width={20} color="#00A388" />
                          <span className="ml-2">{item}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </Tile>
            </div>
            <div className="mt-[60px]">
              <h1 className="text-2xl font-bold text-black mb-2">
                Butuh pemandu wisata?
              </h1>
              <img
                loading="lazy"
                src={TourGuideAds}
                className="relative w-[100%] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InformasiWisataPage;
