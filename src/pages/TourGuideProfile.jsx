import React from 'react'
import BottomNavigation from '../component/BottomNavigation'
import HomeHeaderImage from '../disk/image/HeaderHome.png'
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
            <div className='p-2 shadow-sm sticky top-0 bg-white'>
                <div className="flex">
                    <div className="grow h-6"><TextLink href='/'><IconArrowNarrowLeft /></TextLink></div>
                    <div className="grow-0 mr-8">Profile</div>
                    <div className="grow h-1"></div>
                </div>
            </div>
            <img src={HomeHeaderImage} className="relative w-[100%] object-cover"/>
            <div className="m-5 pb-6">
                <Grid columns="repeat(2, 1fr)"
                        rows="repeat(1, 1fr)"
                        rowGap="10px"
                        columnGap="10px"
                        inline={true}>
                    <span className='text-[20px]'>I Ketut Pugeg</span>
                    <span className='mt-1'><IconShieldCheckFilled /></span>
                </Grid>
                <div type='primarySubtle' className="bg-[rgba(0,116,100,.3)] flex w-[250px] p-3 mt-4 rounded-[7px] items-center mb-10">
                        <IconMapPinFilled/>
                    <div className='ml-2'>
                        <span style={{color : 'rgb(0,116,100)'}}>Kab, Pesawaran, Lampung</span>
                    </div>
                </div>
                <span size="extraLarge" className="font-bold">
                    Deskripsi
                </span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae vel, eius, tempore esse, perferendis similique minus veniam dolorem aliquam praesentium ut totam nisi vitae? Consequuntur rerum saepe consequatur voluptatem earum.</p>
            </div>
            <div className='p-4'>
                <Button type="primary" fullWidth="true" submit={true} centered={true} href="/">Mulai Chat</Button>
            </div>
        </div>
    )
}

export default TourGuideProfile

