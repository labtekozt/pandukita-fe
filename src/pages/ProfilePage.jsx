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
            <div className="m-5 mt-6 pb-[25%]">
                <div className="flex items-center mb-10">
                    <img width={'90px'} src={Profil} className="rounded-[100%]"/> 
                    <div className='ml-3'>
                        <strong>Andrean Rahmatan</strong><br />
                        <span className='text-gray'>lilrahmat@gmail.com</span>
                    </div>
                </div>

                <Card>
                    <div style={{border : '1px solid #eeeeee'}} className='p-3'>
                        <div className="flex" style={{color : 'grey', fontSize : '15px'}}>
                            <div className="flex-none">
                                <p><a href="/"><IconPencil /></a></p>
                            </div>
                            <div className="flex-none">
                                <a href="/" className='ml-2'>Edit Profil</a>
                            </div>
                            <div className="grow"></div>
                            <div className="flex-none w-100"><a href="/"><IconChevronRight /></a></div>
                        </div>
                        <div className="flex mt-6" style={{color : 'grey', fontSize : '15px'}}>
                            <div className="flex-none">
                                <a href=""><IconMapPinShare /></a>
                            </div>
                            <div className="flex-none">
                                <a href="" className='ml-2'>Ubah Lokasi</a>
                            </div>
                            <div className="grow"></div>
                            <div className="flex-none w-100"><a href="/"><IconChevronRight /></a></div>
                        </div>
                        <div className="flex mt-6" style={{color : 'grey', fontSize : '15px'}}>
                            <div className="flex-none">
                                <a href=""><IconAlertCircle /></a>
                            </div>
                            <div className="flex-none">
                                <a href="" className='ml-2'>Tentang PanduKita</a>
                            </div>
                            <div className="grow"></div>
                            <div className="flex-none w-100"><a href="/"><IconChevronRight /></a></div>
                        </div>
                        <div className="flex mt-6" style={{color : 'grey', fontSize : '15px'}}>
                            <div className="flex-none">
                                <a href=""><IconUserPlus /></a>
                            </div>
                            <div className="flex-none">
                                <a href=""className='ml-2'>Bergabung Menjadi Pemandu Wisata <br />
                                    <span className='text-[10px] ml-2'>Jadilah Tour Guide yang berpengalaman dan</span> <br />
                                    <span className='text-[10px] ml-2'>bergabunglah dengan aplikasi kami untuk berbagi</span> <br />
                                    <span className='text-[10px] ml-2'>keindahan destinasi dengan orang-orang dari seluruh</span>
                                </a>
                            </div>
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

