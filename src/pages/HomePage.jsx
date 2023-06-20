import BottomNavigation from '../component/BottomNavigation';
import React from 'react';
import HomeHeaderImage from '../disk/image/HeaderHome.png'
import PlannerAds from '../disk/image/PlannerAds.png'
import TourGuideAds from '../disk/image/TourGuideAds.png'
import {
  Stack
} from "@kiwicom/orbit-components/lib/";
import { IconSearch } from '@tabler/icons-react';

function HomePage() {

    return (
        <div className="container">
            <img src={HomeHeaderImage} className="relative w-[100%] object-cover"/>
            <div className="absolute top-0 m-5 w-100">
                <Stack spacing="large" direction="column">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Halo, Ajeng Kurnia</h1>
                        <p className="text-md text-white">Selamat datang di PanduKita</p>
                    </div>
                    <div className="relative flex">
                        <input className="p-3 bg-white-100 rounded-full" placeholder="Cari tempat wisata" />
                        <IconSearch className="text-black absolute right-5 top-3"/>
                    </div>
                </Stack>
            </div>
            <div className="m-5">
                <div>
                    <h1 className="text-2xl font-bold text-black mb-2">Bingung Mau Kemana?</h1>
                    <img src={PlannerAds} className="relative w-[100%] object-cover rounded-2xl mb-5"/>
                </div>

                <div style={{marginTop : '30px'}}>
                    <h1 className="text-2xl font-bold text-black mb-2">Sewa pemandu wisata</h1>
                    <img src={TourGuideAds} className="relative w-[100%] object-cover rounded-2xl"/>
                </div>
            </div>
            <BottomNavigation />
        </div>
    )
}

export default HomePage
