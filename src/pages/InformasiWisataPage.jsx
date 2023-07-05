import React, { useState } from 'react'
import Sebalang from '../disk/image/sebalang.jpg'
import Slider from '../disk/image/slider.jpg'
import TourGuideAds from '../disk/image/TourGuideAds.png'
import {
    TextLink,
    Button,
    Tile
} from "@kiwicom/orbit-components/lib/";
import {
    IconArrowNarrowLeft,
    IconMapPin,
    IconChevronDown,
    IconChevronUp,
    IconCheck,
    IconMap,
    IconShare
} from '@tabler/icons-react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";


function InformasiWisataPage() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="containerGuide pb-100">
            <div className='p-2 z-50 shadow-sm sticky top-0 bg-white'>
                <div className="flex">
                    <div className="grow h-6"><TextLink href='/'><IconArrowNarrowLeft color='black' /></TextLink></div>
                    <div className="grow-0 mr-8">Informasi Wisata</div>
                    <div className="grow h-1"></div>
                </div>
            </div>

            <div>
                <div className='share absolute ml-[26%] p-2 mt-3 bg-white rounded-[100%]'>
                    <a href="/">
                        <IconShare width={15} height={15} />
                    </a>
                </div>
                <div className='mb-[-20px]'>
                    <img src={Sebalang} className="w-[100%]" />
                </div>
            </div>

            <div className="pb-[50%] z-20 p-5 bg-white relative rounded-2xl">
                <div className="flex">
                    <span className='text-[20px] font-bold'>Pantai Sebalang</span>
                </div>
                <div className="flex mt-3">
                    <IconMapPin />
                    <div className='ml-1'>
                        <span className='text-sm'>Dusun Sebalang, Tarahan, Kec. Katibung,Kab. Lampung Selatan, Lampung 35452</span>
                    </div>
                </div>
                <div className='flex m-1 mb-3 mt-4'>
                    <Button size="small" type="primary" href='/lihatpeta'><span className='pl-5'>Lihat di Peta </span></Button>
                    <span className='ml-2 mt-1 absolute'><IconMap width={19} color='white' /></span>
                    <h1 className='mt-1 ml-2 text-md text-[#00A388]'>Buka di Google Map</h1>
                </div>
                <div className='pb-5'>
                    <p style={{ borderBottom: '1px solid #E8EDF1' }}></p>
                </div>
                <div className='text-xl'>
                    <span size="extraLarge" className="font-bold">
                        Deskripsi
                    </span>
                    <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae vel, eius, tempore esse, perferendis similique minus veniam dolorem aliquam praesentium ut totam nisi vitae? Consequuntur rerum saepe consequatur voluptatem earum.</p>
                </div>
                <div onClick={() => setIsOpen((prev) => !prev)}
                    className='cursor-pointer flex mt-10 p-3 rounded-lg' style={{ boxShadow: '0 2px 8px -1px #d2d3d3', transition: '0.5s' }}>
                    <span>Galery</span>
                    <div className="grow"></div>
                    {!isOpen ? (
                        <IconChevronDown width={20} />
                    ) : (
                        <IconChevronUp width={20} />
                    )
                    }
                </div>

                <div className='open-hide'>
                    {!isOpen && (
                        <div className=" mt-[20px] pb-5">
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={10}
                                freeMode={true}
                                modules={[FreeMode]}
                                className="mySwiper MySwiper mt-4">
                                <SwiperSlide className='img-box'>
                                    <img src={Slider} className="rounded-lg relative w-[100%] object-cover" />
                                </SwiperSlide>
                                <SwiperSlide className='img-box'>
                                    <img src={Slider} className="rounded-lg relative w-[100%] object-cover" />
                                </SwiperSlide>
                                <SwiperSlide className='img-box'>
                                    <img src={Slider} className="rounded-lg relative w-[100%] object-cover" />
                                </SwiperSlide>
                                <SwiperSlide className='img-box'>
                                    <img src={Slider} className="rounded-lg relative w-[100%] object-cover" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    )}
                </div>

                <div className='mt-5'>
                    <Tile
                        title="Aktivitas"
                        expandable={true}
                        external={true}
                        initialExpanded={false}
                        noPadding={true}>

                        <div className='grid p-2'>
                            <div className='mt-1'>
                                <div className='flex'>
                                    <IconCheck width={20} color='#00A388' />
                                    <span className='ml-2'>Berenang</span>
                                </div>
                            </div>
                            <div className='mt-1'>
                                <div className='flex'>
                                    <IconCheck width={20} color='#00A388' />
                                    <span className='ml-2'>Snorkeling</span>
                                </div>
                                <div className='flex-none w-20'></div>
                            </div>
                            <div className='mt-1'>
                                <div className='flex'>
                                    <IconCheck width={20} color='#00A388' />
                                    <span className='ml-2'>Camping</span>
                                </div>
                            </div>
                        </div>
                    </Tile>
                </div>
                <div className='mt-[60px]'>
                    <h1 className="text-2xl font-bold text-black mb-2">Butuh pemandu wisata?</h1>
                    <img src={TourGuideAds} className="relative w-[100%] object-cover rounded-2xl" />
                </div>
            </div>
        </div>
    )
}

export default InformasiWisataPage

