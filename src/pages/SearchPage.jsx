import React from 'react'
import BottomNavigation from '../component/BottomNavigation'
import HomeHeaderImage from '../disk/image/HeaderHome.png'
import {
    Stack,
    TextLink
  } from "@kiwicom/orbit-components/lib/";
  import { IconSearch,IconArrowNarrowLeft } from '@tabler/icons-react';
  


function SearchPage() {
    return (
        <div className="container">
            <div className='p-2 z-50 shadow-sm sticky top-0 bg-white'>
                <div className="flex">
                    <div className="grow h-6"><TextLink href='/'><IconArrowNarrowLeft /></TextLink></div>
                    <div className="grow-0 mr-8">Cari Wisata</div>
                    <div className="grow h-1"></div>
                </div>
            </div>
            <img src={HomeHeaderImage} className="relative w-[100%] object-cover"/>
            <div className="absolute top-0 m-5 w-100">
                <Stack spacing="large" direction="column">
                    <div className="relative flex mt-[60px]">
                        <input className="t-3 p-3 bg-white-100 rounded-full" placeholder="Cari tempat wisata" />
                        <IconSearch className="text-black absolute right-5 top-3"/>
                    </div>
                </Stack>
            </div>
            <div className="m-5 pb-[100%]">
                
            </div>
        </div>
    )
}

export default SearchPage

