import React from 'react'
import {
    TextLink,
    Button
} from "@kiwicom/orbit-components/lib/";
import {
    IconArrowNarrowLeft,
    IconMapPin,
    IconChevronRight
} from '@tabler/icons-react';
import "swiper/css";
import "swiper/css/free-mode";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function LihatPetaAll() {
    const sebalang = [-5.5828711, 105.3776283]
    const pasirPutih = [-5.5396053, 105.3368923]


    return (
        <div className="containerWisata">
            <div className='p-2 z-50 shadow-sm sticky top-0 bg-white'>
                <div className="flex">
                    <div className="grow h-6"><TextLink href='/informasiwisata'><IconArrowNarrowLeft color='black' /></TextLink></div>
                    <div className="grow-0 mr-8">Tujuan</div>
                    <div className="grow h-1"></div>
                </div>
            </div>

            <div>
                <div className='mb-[-20px]'>
                    <MapContainer className='leaflet-container2' center={sebalang} zoom={10} scrollWheelZoom={true}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={sebalang}>
                            <Popup>Pantai Sebalang</Popup>
                        </Marker>
                        <Marker position={pasirPutih}>
                            <Popup>Pantai Pasir Putih</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

            <div className="pb-[10%] z-20 p-5 bg-white relative rounded-2xl">
                <div className="flex">
                    <span className='text-[20px] font-bold'>Pantai Sebalang</span>
                </div>
                <div className="flex mt-3">
                    <IconMapPin />
                    <div className='ml-3'>
                        <span className='text-sm'>Dusun Sebalang, Tarahan, Kec. Katibung,Kab. Lampung Selatan, Lampung 35452</span>
                    </div>
                </div>
                <div className='flex mt-10 z-50 bottom-0'>
                    <Button fullWidth="true" submit={true} centered={true} href="/">Lihat Wisata</Button>
                    <IconChevronRight color='white' className='planner-ai mr-2 absolute ml-[350px] mt-[10px]' />
                </div>
            </div>
        </div>
    )
}

export default LihatPetaAll

