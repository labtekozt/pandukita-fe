import React from 'react'
import Tguide from '../disk/image/tguide.jpg'
import {
    TextLink,
    Grid,
    Button
  } from "@kiwicom/orbit-components/lib/";
  import { IconArrowNarrowLeft,
    IconShieldCheckFilled,
    IconMapPinFilled } from '@tabler/icons-react';


function TourGuideProfile() {
    return (
        <div className="containerGuide">
            <div className='p-2 z-50 shadow-sm sticky top-0 bg-white'>
                <div className="flex">
                    <div className="grow h-6"><TextLink href='/toureguide'><IconArrowNarrowLeft color='black' /></TextLink></div>
                    <div className="grow-0 mr-8">Pemandu Wisata</div>
                    <div className="grow h-1"></div>
                </div>
            </div>
            <img src={Tguide} className="relative w-[100%] object-cover"/>
            <div className="m-5 pb-[20%]">
                <h1>Halo! Nama saya </h1>
                <div className="flex">
                    <span className='font-bold text-[20px]'>Hartono</span>
                    <span className='mt-0.5 ml-3' style={{color : '#1667C2'}}><IconShieldCheckFilled width={22}/></span>
                </div>
                <div className="flex mt-3">
                    <span className='mt-0.5' style={{color : '#1667C2'}}><IconShieldCheckFilled width={22}/></span>
                    <span className='ml-2 text-md mt-[4px]'>Pemandu Wisata <span className='font-bold'>Terverifikasi</span></span>
                </div>
                <div className='flex mt-0.5 mb-5'>
                    <h1 className='flex mt-2'>
                        <span className='text-[#00A388]'><IconMapPinFilled width={22}/></span> 
                        <span className='ml-2 text-md mt-0.5'>Kab, Pesawaran, Lampung</span>
                    </h1>
                </div>
                <div className='pb-5'>
                    <p style={{borderBottom : '1px solid #E8EDF1'}}></p>
                </div>
                <h1 size="extraLarge" className="font-bold mb-2">
                    Deskripsi
                </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae vel, eius, tempore esse, perferendis similique minus veniam dolorem aliquam praesentium ut totam nisi vitae? Consequuntur rerum saepe consequatur voluptatem earum.</p>
            </div>
            <div className='p-4 z-50 shadow-sm sticky bottom-0'>
                <Button type="primary" fullWidth="true" submit={true} centered={true} href="/">Mulai Chat</Button>
            </div>
        </div>
    )
}

export default TourGuideProfile

