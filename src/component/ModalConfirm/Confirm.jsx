import React, {useState} from 'react';
import { Button, Card } from "@kiwicom/orbit-components/lib/";
import {
  IconMap,
  IconCalendarEvent,
  IconMapPin,
} from "@tabler/icons-react";

function Notif() {
    const [showModal, setShowModal] = useState(true);

    return (
    <>
    {showModal &&
      <div className="flex absolute align-item-center px-1 z-50 flex-col place-items-center">
        <div className="flex bg-white flex-row confirm shadow shadow-lg rounded-md overflow-hidden md:w-5/12">
          <div className="flex w-2 bg-[#00A388]"></div>

            <div className="flex-1 pt-2 pb-2 pl-2">
            <div className="m-4 mt-5">
              <div className="flex mt-10 items-center mb-5">
                <span className="text-md">Rangkuman Perjalanan</span>
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
              <div className="mt-10 z-50 bottom-0">
                <Button
                  type="primary"
                  fullWidth="true"
                  submit={true}
                  centered={true}>
                  Terima pesanan
                </Button>
                <Button
                  type="criticalSubtle"
                  fullWidth="true"
                  submit={true}
                  centered={true}
                  className="mt-2">
                  Tolak pesanan
                </Button>
            </div>
          </div>

          </div>
          <div onClick = {() => setShowModal(false)} className="absolute right-0 cursor-pointer border-gray-100 px-4 py-2 flex place-items-top">
            <p className="text-gray-400 font-bold text-lg">X</p>
          </div>
        </div>
      </div>
    }
  </>
  )
}

export default Notif