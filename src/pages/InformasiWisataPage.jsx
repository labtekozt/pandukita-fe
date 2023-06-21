import React from 'react'
import Tguide from '../disk/image/tguide.jpg'
import Slider from '../disk/image/slider.jpg'
import {
    TextLink
  } from "@kiwicom/orbit-components/lib/";
  import { IconArrowNarrowLeft,
    IconMapPin,
    IconChevronDown,
    IconCheck,
    IconShare } from '@tabler/icons-react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";


function InformasiWisataPage() {
    return (
        <div className="containerGuide">
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
                        <IconShare width={15} height={15}/>
                    </a>
                </div>
                <div className='mb-[-20px]'>
                    <img src={Tguide} className="w-[100%]"/>
                </div>
            </div>
            
            <div className="pb-[20%] z-20 p-5 bg-white relative rounded-2xl">
                <div className="flex">
                    <span className='text-[20px] font-bold'>Pantai Sebalang</span>
                </div>
                <div className="flex mt-3">
                    <IconMapPin/>
                    <div className='ml-1'>
                        <span className='text-sm'>Dusun Sebalang, Tarahan, Kec. Katibung,Kab. Lampung Selatan, Lampung 35452</span>
                    </div>
                </div>
                <div type='primarySubtle'>
                    <div className='ml-1 flex mt-0.5'>
                        <h1 className='ml-2 p-2 text-md border mb-[15px] mt-4 text-[#00A388] bg-[rgba(0,163,136,0.25)] rounded-md'>Pantai</h1>
                        <h1 className='ml-2 p-2 text-md border mb-[15px] mt-4 text-[#00A388] bg-[rgba(0,163,136,0.25)] rounded-md'>Camping</h1>
                        <h1 className='ml-2 p-2 text-md border mb-[15px] mt-4 text-[#00A388] bg-[rgba(0,163,136,0.25)] rounded-md'>Snorkeling</h1>
                    </div>
                </div>
                <div className='pb-5'>
                    <p style={{borderBottom : '1px solid #E8EDF1'}}></p>
                </div>
                <div className='text-xl'>
                    <span size="extraLarge" className="font-bold">
                        Deskripsi
                    </span>
                    <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae vel, eius, tempore esse, perferendis similique minus veniam dolorem aliquam praesentium ut totam nisi vitae? Consequuntur rerum saepe consequatur voluptatem earum.</p>
                </div>
                <div className='flex mt-10 p-3 rounded-lg' style={{boxShadow : '0 2px 8px -1px #d2d3d3'}}>
                    <span>Galery</span>
                    <div className="grow"></div>
                    <IconChevronDown width={20}/>
                </div>
                <div className="mt-[20px] pb-5">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={10}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="mySwiper mt-4">
                        <SwiperSlide><a href=""><img src={Slider} className="rounded-lg relative w-[100%] object-cover"/></a></SwiperSlide>
                        <SwiperSlide><a href=""><img src={Slider} className="rounded-lg relative w-[100%] object-cover"/></a></SwiperSlide>
                        <SwiperSlide><a href=""><img src={Slider} className="rounded-lg relative w-[100%] object-cover"/></a></SwiperSlide>
                        <SwiperSlide><a href=""><img src={Slider} className="rounded-lg relative w-[100%] object-cover"/></a></SwiperSlide>
                    </Swiper>
                </div>

                <div className='mt-5'>
                    <div className='flex p-3 rounded-lg' style={{boxShadow : '0 2px 8px -1px #d2d3d3'}}>
                        <span>Aktivitas</span>
                        <div className="grow"></div>
                        <IconChevronDown width={20}/>
                    </div>
                    
                    <div className='grid grid-cols-2 mt-5'>
                        <div className='mt-1'>
                            <div className='flex'>
                                <IconCheck width={20} color='#00A388'/>
                                <span className='ml-2'>Berenang</span>
                            </div>
                            <div className='flex-none w-20'></div>
                        </div>
                        <div className='mt-1'>
                            <div className='flex'>
                                <IconCheck width={20} color='#00A388'/>
                                <span className='ml-2'>Berenang</span>
                            </div>
                            <div className='flex-none w-20'></div>
                        </div>
                        <div className='mt-1'>
                            <div className='flex'>
                                <IconCheck width={20} color='#00A388'/>
                                <span className='ml-2'>Berenang</span>
                            </div>
                            <div className='flex-none w-20'></div>
                        </div>
                        <div className='mt-1'>
                            <div className='flex'>
                                <IconCheck width={20} color='#00A388'/>
                                <span className='ml-2'>Berenang</span>
                            </div>
                            <div className='flex-none w-20'></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InformasiWisataPage

