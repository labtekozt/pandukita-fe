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
                    <div className="grow h-6"><TextLink href='/'><IconArrowNarrowLeft color='black' /></TextLink></div>
                    <div className="grow-0 mr-8">Profile</div>
                    <div className="grow h-1"></div>
                </div>
            </div>
            <img src={Tguide} className="relative w-[100%] object-cover"/>
            <div className="m-5 pb-[20%]">
                <div className="flex">
                    <span className='text-[20px]'>Hartono</span>
                    <span className='mt-0.5 ml-3' style={{color : '#1667C2'}}><IconShieldCheckFilled width={22}/></span>
                </div>
                <div className='flex  mt-0.5'>
                    <h1 className='flex p-1 mt-2 text-md mb-[20px] text-[#00A388] bg-[rgba(0,163,136,0.25)] rounded-lg'>
                        <IconMapPinFilled width={20}/> <span className='ml-1 mt-0.5'>Kab, Pesawaran, Lampung</span>
                    </h1>
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

