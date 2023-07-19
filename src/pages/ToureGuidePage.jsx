import React, { useState } from "react";
import BottomNavigation from "../component/BottomNavigation";
import { Stack } from "@kiwicom/orbit-components/lib/";
import {
  IconSearch,
  IconMapPinFilled,
  IconChevronDown,
  IconChevronRight,
} from "@tabler/icons-react";
import { Illustration } from "@kiwicom/orbit-components";
import Tguide1 from "../disk/image/tguide1.jpg";

function ToureGuidePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <div className="pb-[40%]">
        <div class="grid gap-4 grid-cols-2">
          <div className="mt-[70px] m-5">
            <span className="text-[24px]">
              Kita Pandu <br />
              Kami Bantu
            </span>
          </div>
          <div className="img-guide m-3 mt-[55px]">
            <Illustration name="CompassEmailAdventurer" size="medium" />
          </div>
        </div>
        <div className="absolute top-[100px] m-5 w-100">
          <Stack spacing="large" direction="column">
            <div className="relative guide flex mt-[60px]">
              <input
                className="p-3 input-guide rounded-full"
                placeholder="Cari Pemandu Wisata"
                style={{ border: "1px solid #e7e4e4" }}
              />
              <IconSearch className="text-black absolute right-5 top-3" />
            </div>
          </Stack>
        </div>
        <div className="flex p-3 ml-2 mt-[63px] rounded-[7px] items-center">
          <IconMapPinFilled width={25} />
          <div className="ml-2">
            <span className="text-md font-bold">
              <span className="font-normal">Lokasi anda,</span> Kab, Pesawaran,
              Lampung
            </span>
          </div>
        </div>

        <div className="m-5">
          <h1 className="text-md mb-2 ml-1">Filter berdasarkan lokasi</h1>
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-[#e8edf1] cursor-pointer flex p-3 rounded-lg shadow"
          >
            <span className="text-md">Pilih Lokasi</span>
            <div className="grow"></div>
            {isOpen ? (
              <IconChevronDown width={20} />
            ) : (
              <IconChevronRight width={20} />
            )}
          </div>

          <div className="open-hide">
            {isOpen && <div className="m-2 mt-[20px] pb-5">Pesawaran</div>}
          </div>
        </div>
        <div className="mt-[40px] mb-[-20px]">
          <span className="ml-5 text-gray-10 text-[20px]">
            Terdekat dengan anda
          </span>
        </div>

        <div className="grid grid-cols-2 mx-auto p-2">
          <div className="tour-guide mt-6 w-[175px] ml-[12px] bg-white rounded-lg shadow-md">
            <a href="/tourguideprofile">
              <img
                width={"99%"}
                loading="lazy"
                src={Tguide1}
                className="rounded-lg"
              />
            </a>
            <div className="m-2 mt-5 mb-[-.1px]">
              <a href="/tourguideprofile">
                <span>Hartono</span>
                <br />
              </a>
            </div>
            <div className="flex pb-3 mt-1 ml-1">
              <span className="text-[#00A388]">
                <IconMapPinFilled width={17} height={17} />
              </span>
              <span className="ml-1 text-sm text-gray">
                Kab, Pesawaran, Lampung
              </span>
            </div>
          </div>
          <div className="tour-guide mt-6 w-[175px] ml-[12px] bg-white rounded-lg shadow-md">
            <a href="/tourguideprofile">
              <img
                loading="lazy"
                width={"99%"}
                src={Tguide}
                className="rounded-lg"
              />
            </a>
            <div className="m-2 mt-5 mb-[-.1px]">
              <a href="/tourguideprofile">
                <span>Hartono</span>
                <br />
              </a>
            </div>
            <div className="flex pb-3 mt-1 ml-1">
              <span className="text-[#00A388]">
                <IconMapPinFilled width={17} height={17} />
              </span>
              <span className="ml-1 text-sm text-gray">
                Kab, Pesawaran, Lampung
              </span>
            </div>
          </div>
          <div className="tour-guide mt-6 w-[175px] ml-[12px] bg-white rounded-lg shadow-md">
            <a href="/tourguideprofile">
              <img
                loading="lazy"
                width={"99%"}
                src={Tguide}
                className="rounded-lg"
              />
            </a>
            <div className="m-2 mt-5 mb-[-.1px]">
              <a href="/tourguideprofile">
                <span>Hartono</span>
                <br />
              </a>
            </div>
            <div className="flex pb-3 mt-1 ml-1">
              <span className="text-[#00A388]">
                <IconMapPinFilled width={17} height={17} />
              </span>
              <span className="ml-1 text-sm text-gray">
                Kab, Pesawaran, Lampung
              </span>
            </div>
          </div>
          <div className="tour-guide mt-6 w-[175px] ml-[12px] bg-white rounded-lg shadow-md">
            <a href="/tourguideprofile">
              <img
                loading="lazy"
                width={"99%"}
                src={Tguide}
                className="rounded-lg"
              />
            </a>
            <div className="m-2 mt-5 mb-[-.1px]">
              <a href="/tourguideprofile">
                <span>Hartono</span>
                <br />
              </a>
            </div>
            <div className="flex pb-3 mt-1 ml-1">
              <span className="text-[#00A388]">
                <IconMapPinFilled width={17} height={17} />
              </span>
              <span className="ml-1 text-sm text-gray">
                Kab, Pesawaran, Lampung
              </span>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default ToureGuidePage;
