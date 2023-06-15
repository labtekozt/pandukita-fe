import NavbarComponent from '../component/NavbarComponent';
import React from 'react';
import HomeHeaderImage from '../disk/image/HeaderHome.png'
import PlannerAds from '../disk/image/PlannerAds.png'
import TourGuideAds from '../disk/image/TourGuideAds.png'
import {
  Button,
  InputField,
  Text,
  Heading,
  ButtonLink,
  Stack,
  TextLink
} from "@kiwicom/orbit-components/lib/";
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';

function HomePage() {

    return (
        <div className="container">
            <img src={HomeHeaderImage} className="relative h-[12em] object-cover"/>
            <div className="absolute top-0 m-5 w-100">
                <Stack spacing="large" direction="column">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Halo, Ajeng Kurnia</h1>
                        <p className="text-md text-white">Selamat datang di PanduKita</p>
                    </div>
                    {/*Belum responsive*/}
                    <div className="relative flex">
                        <input className="p-3 w-[25em] bg-white-100 rounded-full" placeholder="Cari tempat wisata" />
                        <IconSearch className="text-black absolute right-5 top-3"/>
                    </div>
                </Stack>
            </div>
            <div className="m-5">
                <div>
                    <h1 className="text-2xl font-bold text-black mb-5">Bingung Mau Kemana?</h1>
                    <img src={PlannerAds} className="h-52 object-cover object-left rounded-2xl"/>
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-black mb-5">Sewa pemandu wisata</h1>
                    <img src={TourGuideAds} className="h-52 object-cover object-left rounded-2xl"/>
                </div>

            </div>
        </div>
    )
}

export default HomePage
