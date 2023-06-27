import React from 'react'
import HeaderSearch from '../disk/image/HeaderSearch.png'
import TripBanner from '../disk/image/tripbanner.jpg'
import {
    Stack,
    TextLink
  } from "@kiwicom/orbit-components/lib/";
import { IconSearch,IconArrowNarrowLeft } from '@tabler/icons-react';
  

function WisataSearch() {
    return (
        <div className="container">
            <div className='p-2 z-50 shadow-sm sticky top-0 bg-white'>
                <div className="flex">
                    <div className="grow h-6"><TextLink href='/'><IconArrowNarrowLeft /></TextLink></div>
                    <div className="grow-0 mr-8">Cari Wisata</div>
                    <div className="grow h-1"></div>
                </div>
            </div>
            <img src={HeaderSearch} className="relative w-[100%] object-cover"/>
            <div className="absolute top-0 m-5 w-100">
                <Stack spacing="large" direction="column">
                    <div className="relative search flex mt-[60px]">
                        <input className="input t-3 p-3 bg-white-100 rounded-full" placeholder="Cari tempat wisata" />
                        <IconSearch className="text-black search-icon absolute right-5 top-3"/>
                    </div>
                </Stack>
            </div>
            <div className='mb-[-60px]'></div>
            <div className="m-5 pb-[100%]">
                <div className='mt-[90px]'>
                    <a href="/informasiwisata">
                        <div className='trip-text mb-[-140px]'>
                            <img className='rounded-lg' width={'100%'} src={TripBanner}/>
                        </div>
                        <div className='z-50 text-white m-6'>
                            <h1 className='font-bold mb-[10px]'>Pantai Sebalang</h1>
                            <h1 className='text-sm'>Pantai Sebalang Adalah Sebuah Tempat Wisata Pantai Dengan Keindahan Pantau yang bersih dan ombak yang cukup besar</h1>
                        </div>
                    </a> 
                </div>
            </div>
        </div>      
    )
}

export default WisataSearch

