import BottomNavigation from '../component/BottomNavigation';
import React from 'react';
import HomeHeaderImage from '../disk/image/HeaderHome.png'
import PlannerAds from '../disk/image/PlannerAds.png'
import TourGuideAds from '../disk/image/TourGuideAds.png'
import Slider from '../disk/image/slider.jpg'
import Sebalang from '../disk/image/sebalang.jpg'
import {
  Stack
} from "@kiwicom/orbit-components/lib/";
import { IconSearch } from '@tabler/icons-react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";

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
                        <input className="input p-3 bg-white-100 rounded-full" placeholder="Cari tempat wisata" />
                        <IconSearch className="text-black relative-icon absolute right-5 top-3"/>
                    </div>
                </Stack>
            </div>
            <div className="mt-[20px] pb-5">
                <h1 className="text-2xl text-jelajah ml-[20px] font-bold text-black mb-2">Jelajahi Indonesia</h1>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper mt-4">
                    <SwiperSlide>
                        <div className='flex'>
                            <a href="/informasiwisata">
                                <img src={Slider} className="rounded-lg relative w-[100%] object-cover"/>
                            </a>
                            <span className='absolute m-2 text-white mt-[200px] font-bold z-50'>Pantai Sebalang</span>
                            <span className='text-left text-sm absolute m-2 text-white mt-[230px] z-50'>Pantai Sebalang adalah pantai yang terkenal dengan keindahan alam serta tempat yang bersih</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex'>
                            <a href="/informasiwisata">
                                <img src={Slider} className="rounded-lg relative w-[100%] object-cover"/>
                            </a>
                            <span className='absolute m-2 text-white mt-[200px] font-bold z-50'>Pantai Sebalang</span>
                            <span className='text-left text-sm absolute m-2 text-white mt-[230px] z-50'>Pantai Sebalang adalah pantai yang terkenal dengan keindahan alam serta tempat yang bersih</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex'>
                            <a href="/informasiwisata">
                                <img src={Slider} className="rounded-lg relative w-[100%] object-cover"/>
                            </a>
                            <span className='absolute m-2 text-white mt-[200px] font-bold z-50'>Pantai Sebalang</span>
                            <span className='text-left text-sm absolute m-2 text-white mt-[230px] z-50'>Pantai Sebalang adalah pantai yang terkenal dengan keindahan alam serta tempat yang bersih</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex'>
                            <a href="/informasiwisata">
                                <img src={Slider} className="rounded-lg relative w-[100%] object-cover"/>
                            </a>
                            <span className='absolute m-2 text-white mt-[200px] font-bold z-50'>Pantai Sebalang</span>
                            <span className='text-left text-sm absolute m-2 text-white mt-[230px] z-50'>Pantai Sebalang adalah pantai yang terkenal dengan keindahan alam serta tempat yang bersih</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="m-5">
                <div>
                    <h1 className="text-2xl font-bold text-black mb-2 ml-1">Bingung Mau Kemana?</h1>
                    <a href="/tripplannerhome">
                        <img src={PlannerAds} className="relative w-[100%] object-cover rounded-2xl mb-[35px]"/>
                    </a>
                </div>
            <div>
                <div>
                    <h1 className='text-2xl font-bold text-black mb-3 ml-1'>Kategori</h1>
                    <div className='flex'>
                        <button className='ml-1 bg-[#F2F2F2] shadow-md rounded-full' style={{padding : '1px 10px 1px 10px',border : '1px solid #D1D1D1'}}>Pantai</button>
                        <button className='ml-1 bg-[#F2F2F2] shadow-md rounded-full' style={{padding : '1px 10px 1px 10px',border : '1px solid #D1D1D1'}}>Alam Hijau</button>
                        <button className='ml-1 bg-[#F2F2F2] shadow-md rounded-full' style={{padding : '1px 10px 1px 10px',border : '1px solid #D1D1D1'}}>Belanja</button>
                    </div>
                    <div className='flex mt-3'>
                        <button className='ml-1 bg-[#F2F2F2] shadow-md rounded-full' style={{padding : '1px 10px 1px 10px',border : '1px solid #D1D1D1'}}>Adat & Budaya</button>
                        <button className='ml-1 bg-[#F2F2F2] shadow-md rounded-full' style={{padding : '1px 10px 1px 10px',border : '1px solid #D1D1D1'}}>Pendidikan</button>
                    </div>
                </div>
                <div className="mt-[20px] pb-5">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={10}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="mySwiper mt-4">
                        <SwiperSlide>
                            <div className='flex'>
                                <a href="/informasiwisata">
                                    <img src={Slider} className="rounded-lg relative w-[100%] object-cover"/>
                                </a>
                                <span className='absolute m-2 text-white mt-[200px] font-bold z-50'>Pantai Sebalang</span>
                                <span className='text-left text-sm absolute m-2 text-white mt-[230px] z-50'>Pantai Sebalang adalah pantai yang terkenal dengan keindahan alam serta tempat yang bersih</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex'>
                                <a href="/informasiwisata">
                                    <img src={Slider} className="rounded-lg relative w-[100%] object-cover"/>
                                </a>
                                <span className='absolute m-2 text-white mt-[200px] font-bold z-50'>Pantai Sebalang</span>
                                <span className='text-left text-sm absolute m-2 text-white mt-[230px] z-50'>Pantai Sebalang adalah pantai yang terkenal dengan keindahan alam serta tempat yang bersih</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex'>
                                <a href="/informasiwisata">
                                    <img src={Slider} className="rounded-lg relative w-[100%] object-cover"/>
                                </a>
                                <span className='absolute m-2 text-white mt-[200px] font-bold z-50'>Pantai Sebalang</span>
                                <span className='text-left text-sm absolute m-2 text-white mt-[230px] z-50'>Pantai Sebalang adalah pantai yang terkenal dengan keindahan alam serta tempat yang bersih</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex'>
                                <a href="/informasiwisata">
                                    <img src={Slider} className="rounded-lg relative w-[100%] object-cover"/>
                                </a>
                                <span className='absolute m-2 text-white mt-[200px] font-bold z-50'>Pantai Sebalang</span>
                                <span className='text-left text-sm absolute m-2 text-white mt-[230px] z-50'>Pantai Sebalang adalah pantai yang terkenal dengan keindahan alam serta tempat yang bersih</span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
                <div className='mt-[30px] pb-[130px]'>
                    <h1 className="text-2xl font-bold text-black mb-2">Sewa pemandu wisata</h1>
                    <img src={TourGuideAds} className="relative w-[100%] object-cover rounded-2xl"/>
                </div>
            </div>
            <BottomNavigation />
        </div>
    )
}

export default HomePage
