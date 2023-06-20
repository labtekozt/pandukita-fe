import React from 'react'
import BottomNavigation from '../component/BottomNavigation';
import {
    Stack,
  } from "@kiwicom/orbit-components/lib/";
  import { IconSearch,IconMapPinFilled } from '@tabler/icons-react';
  import Guide from '../disk/image/guide.png'
  


function ToureGuidePage() {
    return (
        <div className="container">
            <div className='pb-[100%]'>
                <div class="grid gap-4 grid-cols-2">
                    <div className='mt-[70px] m-5'>
                        <span className='text-[24px]'>Kita Pandu <br />
                        Kami Bantu</span>
                    </div>
                    <div className='m-3 mt-10'><img width={'400px'} src={Guide}/> </div>
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
                <div className='mt-[40px]'>
                    <span className="m-5 text-gray-10 text-[20px]">
                        Terdekat dengan anda
                    </span>
                </div>
            </div>
            <BottomNavigation />
        </div>
    )
}

export default ToureGuidePage

