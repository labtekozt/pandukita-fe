import React, { useState, useEffect, useContext, useCallback } from "react";
import Tguide1 from "../disk/image/tguide1.jpg";
import { TextLink, Button, Card } from "@kiwicom/orbit-components/lib/";
import {
  IconArrowNarrowLeft,
  IconShieldCheckFilled,
  IconMapPinFilled,
  IconMap,
  IconCalendarEvent,
  IconMapPin,
} from "@tabler/icons-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingTourGuide from "../component/LoadingTourGuidePage";
import { useFetchPost } from "../hooks/useFetch";
import { srcImage } from "../helpers/url";
import SummaryPlanner from "../component/SummaryPlanner";
import { SocketContext } from "../store";
import { IconSearch } from "@tabler/icons-react";

function TourGuideProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  // if id is undefined, navigate to planner page
  if (!id) {
    navigate("/planner");
  }

  const { socketRef, state } = useContext(SocketContext);
  // create useFetchPost for fetch data from api
  const { loading, data, error, fetch } = useFetchPost(
    `/users/macth-tour-guide`,
    {
      plannerId: id,
      exTourGuide: [],
    }
  );

  const makeOrderTg = useCallback(
    (data) => {
      if (!socketRef.current) return;
      socketRef.current.emit("order-tour", {
        to: data.to,
        from: data.from,
        data: data.plan,
      });
    },
    [socketRef.current]
  );

  // create function for fetch again
  const fetchBestMacth = async () => {
    fetch({
      plannerId: id,
      exTourGuide: exTourGuide,
    });
  };

  // set exTourGuide when data is ready and not empty array
  const refreshPage = () => {
    window.location.reload();
  };

  if (!data?.tourGuide && !loading) {
    return (
      <div className="containerInfo">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="text-xl font-bold">Saat Ini Tour Guide Tidak ada</div>
          <div className="text-lg font-bold">
            Silahkan Cari Tour Guide Lainnya
          </div>
          <div className="flex flex-col">
            <Button
              centered
              fullWidth={true}
              iconLeft={<IconArrowNarrowLeft />}
              onClick={() => navigate(`/planner/${id}`)}
              className="mt-2 "
            >
              Kembali ke Home
            </Button>
            <Button
              fullWidth={true}
              iconLeft={<IconSearch />}
              onClick={() => refreshPage()}
              className="mt-2 "
              centered
            >
              Cari Tour Guide lain
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {loading ? (
        <LoadingTourGuide />
      ) : (
        <div className="containerInfo">
          <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
            <div className="flex">
              <div className="grow h-6">
                <TextLink href="/planner">
                  <IconArrowNarrowLeft color="black" />
                </TextLink>
              </div>
              <div className="grow-0 mr-8">Pemandu Wisata</div>
              <div className="grow h-1"></div>
            </div>
          </div>
          <div className="m-4">
            <div className="flex img-box5">
              <img
                loading="lazy"
                alt="profile"
                src={srcImage(data?.tourGuide?.profile)}
                className="rounded rounded-md relative w-[100%] object-cover"
              />
            </div>
          </div>
          <div className="m-5">
            <h1>Halo! Nama saya </h1>
            <div className="flex">
              <span className="font-bold text-[20px]">
                {data?.tourGuide?.username}
              </span>
              <span className="mt-0.5 ml-3" style={{ color: "#1667C2" }}>
                <IconShieldCheckFilled width={22} />
              </span>
            </div>

            <div className="flex mt-0.5 mb-5">
              <h1 className="flex mt-2">
                <span className="text-[#00A388]">
                  <IconMapPinFilled width={22} />
                </span>
                <span className="ml-2 text-md mt-0.5">
                  {data?.tourGuide?.location}, Lampung
                </span>
              </h1>
            </div>
            <div className="pb-5">
              <p style={{ borderBottom: "1px solid #E8EDF1" }}></p>
            </div>
            <h1 size="extraLarge" className="font-bold mb-2">
              Deskripsi
            </h1>
            <p className="text-justify">{data?.tourGuide?.description}</p>
          </div>
          <div className="m-5 text-[#E8EDF1] border"></div>

          <div className="m-4 mt-2 pb-[100%]">
            {data?.planner && (
              <SummaryPlanner
                city={data?.planner.city}
                endDate={data?.planner.endDate}
                id={id}
                name={data?.planner.name}
                plan={data?.planner.plan}
                startDate={data?.planner.startDate}
              />
            )}
          </div>
          <div className="p-4 z-50 btn-profile bottom-0">
            <Button
              type="primary"
              fullWidth="true"
              submit={true}
              onClick={() =>
                makeOrderTg({
                  to: data.tourGuide._id,
                  from: state.user.id,
                  plan: data.planner,
                })
              }
              centered={true}
            >
              Buat Pesanan
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TourGuideProfile;
