import React from 'react'
import BottomNavigation from '../component/BottomNavigation';
import {
    Stack,
  } from "@kiwicom/orbit-components/lib/";
  import { IconSearch,
    IconMapPinFilled,
    IconPennant } from '@tabler/icons-react';
  import Guide from '../disk/image/guide.png'
  import Tguide from '../disk/image/tguide.jpg'
  
  


function ToureGuidePage() {
    return (
        <div className="container">
            <div className='pb-[40%]'>
                <div class="grid gap-4 grid-cols-2">
                    <div className='mt-[70px] m-5'>
                        <span className='text-[24px]'>Kita Pandu <br />
                        Kami Bantu</span>
                    </div>
                    <div className='img-guide m-3 mt-10'><img width={'400px'} src={Guide}/></div>
                </div>
                <div className="absolute top-[100px] m-5 w-100">
                    <Stack spacing="large" direction="column">
                        <div className="relative guide flex mt-[60px]">
                            <input className="p-3 rounded-full" placeholder="Cari Pemandu Wisata" style={{border : '1px solid #e7e4e4'}}/>
                            <IconSearch className="text-black absolute right-5 top-3"/>
                        </div>
                    </Stack>
                </div>
                <div className="flex w-[250px] text-gray p-3 ml-2 mt-[63px] rounded-[7px] items-center">
                    <IconMapPinFilled/>
                    <div className='ml-2'>
                        <span>Kab, Pesawaran, Lampung</span>
                    </div>
                </div>
                <div className='mt-[40px] mb-[-20px]'>
                    <span className="ml-5 text-gray-10 text-[20px]">
                        Terdekat dengan anda
                    </span>
                </div>
                <div className='grid grid-cols-2 mx-auto p-2'>    
                    <div className="tour-guide mt-6 w-[180px] ml-[14px] bg-white rounded-lg shadow-md">
                            <a href="/tourguideprofile">
                                <img width={'99%'} src={Tguide} className='rounded-lg'/>
                            </a>
                        <div className='m-2 mt-5 mb-[-.1px]'>
                            <a href="/tourguideprofile">
                                <span>Hartono</span><br />
                                <span className='text-sm text-gray'>Kab, Pesawaran, Lampung</span>
                            </a>
                        </div>
                        <div className='flex pb-5 ml-2'>
                            <IconPennant width={17} height={17} color='#00A388'/>
                            <span className='text-sm ml-1 text-[#00A388]'>3.2 km</span>
                        </div>
                    </div>
                    <div className="tour-guide mt-6 w-[180px] ml-[14px] bg-white rounded-lg shadow-md">
                        <a href="/tourguideprofile">
                            <img width={'99%'} src={Tguide} className='rounded-lg'/>
                        </a>
                        <div className='m-2 mt-5 mb-[-.1px]'>
                            <a href="/tourguideprofile">
                                <span>Hartono</span><br />
                                <span className='text-sm text-gray'>Kab, Pesawaran, Lampung</span>
                            </a>
                        </div>
                        <div className='flex pb-5 ml-2'>
                            <IconPennant width={17} height={17} color='#00A388'/>
                            <span className='text-sm ml-1 text-[#00A388]'>3.2 km</span>
                        </div>
                    </div>
                    <div className="tour-guide mt-6 w-[180px] ml-[14px] bg-white rounded-lg shadow-md">
                        <a href="/tourguideprofile">
                            <img width={'99%'} src={Tguide} className='rounded-lg'/>
                        </a>
                        <div className='m-2 mt-5 mb-[-.1px]'>
                            <a href="/tourguideprofile">
                                <span>Hartono</span><br />
                                <span className='text-sm text-gray'>Kab, Lampung Timur, Lampung</span>
                            </a>
                        </div>
                        <div className='flex pb-5 ml-2'>
                            <IconPennant width={17} height={17} color='#00A388'/>
                            <span className='text-sm ml-1 text-[#00A388]'>4.2 km</span>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNavigation />
        </div>
    )
}

export default ToureGuidePage

