import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import LoadingTourGuide from "../component/LoadingTourGuidePage";

function TourGuideProfile() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingTourGuide />
      ) : (
        <div className="containerInfo">
          <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
            <div className="flex">
              <div className="grow h-6">
                <TextLink href="/plannerai">
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
                src={Tguide1}
                className="rounded rounded-md relative w-[100%] object-cover"/>
            </div>
          </div>
          <div className="m-5">
            <h1>Halo! Nama saya </h1>
            <div className="flex">
              <span className="font-bold text-[20px]">Hartono</span>
              <span className="mt-0.5 ml-3" style={{ color: "#1667C2" }}>
                <IconShieldCheckFilled width={22} />
              </span>
            </div>
            <div className="flex mt-3">
              <span className="mt-0.5" style={{ color: "#1667C2" }}>
                <IconShieldCheckFilled width={22} />
              </span>
              <span className="ml-2 text-md mt-[4px]">
                Pemandu Wisata <span className="font-bold">Terverifikasi</span>
              </span>
            </div>
            <div className="flex mt-0.5 mb-5">
              <h1 className="flex mt-2">
                <span className="text-[#00A388]">
                  <IconMapPinFilled width={22} />
                </span>
                <span className="ml-2 text-md mt-0.5">
                  Kab, Pesawaran, Lampung
                </span>
              </h1>
            </div>
            <div className="pb-5">
              <p style={{ borderBottom: "1px solid #E8EDF1" }}></p>
            </div>
            <h1 size="extraLarge" className="font-bold mb-2">
              Deskripsi
            </h1>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae vel, eius, tempore esse, perferendis similique minus
              veniam dolorem aliquam praesentium ut totam nisi vitae?
              Consequuntur rerum saepe consequatur voluptatem earum.
            </p>
          </div>
          <div className="m-5 text-[#E8EDF1] border"></div>

          <div className="m-4 mt-2 pb-[100%]">
            <div className="flex items-center mb-5">
              <span className="text-md">Rangkuman Perjalanan kamu</span>
              <div className="grow"></div>
              <div className="flex mr-0 mb-3 mt-2">
                <Button size="small" type="primary" href="/lihatpeta">
                  <span className="pl-5">Lihat di Peta </span>
                </Button>
                <span className="ml-2 mt-1 absolute">
                  <IconMap width={19} color="white" />
                </span>
              </div>
            </div>

            <div className="bg-[#eeeeee] rounded-md">
              <Card>
                <div
                  style={{ color: "black", fontSize: "13px" }}
                  className="p-3"
                >
                  <div className="flex">
                    <p className="mt-0.5">
                      <IconMap size={20} />
                    </p>
                    <span className="ml-2 font-bold text-black text-xl">
                      Jalan Jalan ke Lampung
                    </span>
                  </div>
                  <div className="flex mt-3">
                    <p className="mt-0.5">
                      <IconCalendarEvent size={20} />
                    </p>
                    <span className="ml-2 text-md mt-0.5">
                      Sen, 6 Maret 2023 - Rabu, 8 Maret 2023
                    </span>
                  </div>
                  <div className="flex mt-3">
                    <p className="mt-0.5">
                      <IconMapPin size={20} />
                    </p>
                    <span className="ml-2 text-md mt-0.5">
                      Lampung, Indonesia
                      <ull className="text-sm ml-2">
                        <li>Taman Gajah Way Kambas</li>
                        <li>Pantai Sebalang</li>
                        <li>Mangrove Cukunyinyi</li>
                      </ull>
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="p-4 z-50 btn-profile bottom-0">
            <Link to="/chat">
              <Button
                type="primary"
                fullWidth="true"
                submit={true}
                centered={true}>
                Chat Dengan Pemandu Wisata
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default TourGuideProfile;
