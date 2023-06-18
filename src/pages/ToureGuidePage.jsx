import React from 'react'
import BottomNavigation from '../component/BottomNavigation'
import {
    Stack,
  } from "@kiwicom/orbit-components/lib/";
  import { IconSearch,IconMapPinFilled } from '@tabler/icons-react';
  import Profil from '../disk/image/Profil.png'
  


function ToureGuidePage() {
    return (
        <div className="container">
            <div className='pb-[100%]'>
                <div class="grid gap-4 grid-cols-2">
                    <div className='mt-[80px] m-5'>
                        <span className='text-[24px]'>Kita Pandu <br />
                        Kami Bantu</span>
                    </div>
                    <div className='m-3'><img width={'400px'} src={Profil} className="rounded-[100%]"/> </div>
                </div>
                <div className="absolute top-[160px] m-5 w-100">
                    <Stack spacing="large" direction="column">
                        <div className="relative guide flex mt-[60px]">
                            <input className="t-3 border p-3 rounded-full" placeholder="Cari Pemandu Wisata" />
                            <IconSearch className="text-black absolute right-5 top-3"/>
                        </div>
                    </Stack>
                </div>
                <div className="flex w-[250px] text-gray p-3 ml-2 mt-[80px] rounded-[7px] items-center mb-10">
                        <IconMapPinFilled/>
                    <div className='ml-2'>
                        <span>Kab, Pesawaran, Lampung</span>
                    </div>
                </div>
                <div>
                    <span className="m-5 text-gray-10 text-[20px]">
                        Terdekat dengan anda
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ToureGuidePage

