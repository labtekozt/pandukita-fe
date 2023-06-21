import React from 'react'
import {
    TextLink,
    Text,
    Button
  } from "@kiwicom/orbit-components/lib/";
import Card from "@kiwicom/orbit-components/lib/Card";
import { IconArrowNarrowLeft,
    IconPencil,
    IconMapPinShare,
    IconAlertCircle,
    IconUserPlus,
    IconChevronRight
 } from '@tabler/icons-react';
import Profil from '../disk/image/Profil.png'


function ProfilePage() {
    return (
        <div style={{width : '100%', backgroundColor : 'white'}}>
            <div className='p-2 shadow-sm sticky top-0 bg-white'>
                <div className="flex">
                    <div className="grow h-6"><TextLink href='/'><IconArrowNarrowLeft /></TextLink></div>
                    <div className="grow-0 mr-7">Profile</div>
                    <div className="grow h-1"></div>
                </div>
            </div>
            <div className="m-5 mt-8 pb-[31%]">
                <div className="flex items-center mb-10">
                    <img width={'70px'} src={Profil} className="rounded-[100%]"/> 
                    <div className='ml-3'>
                        <strong>Andrean Rahmatan</strong><br />
                        <span className='text-gray'>lilrahmat@gmail.com</span>
                    </div>
                </div>

                <Card>
                    <div style={{border : '1px solid #eeeeee', color : 'gray', fontSize : '13px'}} className='p-3'>
                        <div className="flex">
                            <p><a href="/"><IconPencil /></a></p>
                            <a href="/" className='ml-2 mt-0.5'>Edit Profil</a>
                            <div className="grow"></div>
                            <a href="/"><IconChevronRight /></a>
                        </div>
                        <div className="flex mt-6">
                            <a href=""><IconMapPinShare /></a>
                            <a href="" className='ml-2 mt-0.5'>Ubah Lokasi</a>
                            <div className="grow"></div>
                            <div className="flex-none"><a href="/"><IconChevronRight /></a></div>
                        </div>
                        <div className="flex mt-6">
                                <a href=""><IconAlertCircle /></a>
                                <a href="" className='ml-2 mt-0.5'>Tentang PanduKita</a>
                            <div className="grow"></div>
                            <div className="flex-none w-100"><a href="/"><IconChevronRight /></a></div>
                        </div>
                        <div className="flex mt-6">
                                <a href=""><IconUserPlus /></a>
                                <a href="/registertoureguide"className='ml-2 mt-0.5'>Bergabung Menjadi Pemandu Wisata <br />
                                    <span className='text-[10px] ml-2'>Jadilah Tour Guide yang berpengalaman dan</span> <br />
                                    <span className='text-[10px] ml-2'>bergabunglah dengan aplikasi kami untuk berbagi</span> <br />
                                    <span className='text-[10px] ml-2'>keindahan destinasi dengan orang-orang dari seluruh</span>
                                </a>
                            <div className="grow"></div>
                            <div className="flex-none w-100"><a href="/"><IconChevronRight /></a></div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className='p-4'>
                <Button type="critical" fullWidth="true" submit={true} centered={true} href="/">Keluar</Button>
            </div>
        </div>
    )
}

export default ProfilePage

