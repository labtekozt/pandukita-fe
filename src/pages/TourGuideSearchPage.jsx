import React from 'react'
import HeaderSearch from '../disk/image/HeaderSearch.png'
import { Illustration } from "@kiwicom/orbit-components";
import {
    Stack,
    TextLink,
    Button,
    Text
  } from "@kiwicom/orbit-components/lib/";
  import { IconSearch,IconArrowNarrowLeft } from '@tabler/icons-react';
  


function TourGuideSearch() {
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
                        <input className="t-3 input p-3 bg-white-100 rounded-full" placeholder="Cari tempat wisata" />
                        <IconSearch className="text-black search-icon absolute right-5 top-3"/>
                    </div>
                </Stack>
            </div>
            <div className="m-5 mt-[40px] pb-[100%]">
                <div className='pb-10'>
                    <div className='p-5 flex items-center justify-center'>
                        <div><Illustration name="NoResults" size="small"/></div>
                    </div>
                    <div className='flex items-center justify-center p-1'>
                        <Text align="center">Maaf, halaman tidak ditemukan. <br /> Yok bantu kami menambah informasi wisata</Text>
                    </div>
                    <div className='flex items-center justify-center p-1'>
                        <Button size="small" type="primary"><span>Tambah Tujuan</span></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourGuideSearch

