import React from 'react'
import {
    TextLink,
    Button,
    Text
} from "@kiwicom/orbit-components/lib/";
import Card from "@kiwicom/orbit-components/lib/Card";
import {
    IconArrowNarrowLeft,
    IconPencil,
    IconAlertCircle,
    IconChevronRight
} from '@tabler/icons-react';


function ProfileTourGuide() {
    return (
        <div className='containerWisata'>
            <div className='p-2 z-50 shadow-sm sticky top-0 bg-white'>
                <div className="flex">
                    <div className="grow h-6"><TextLink href='/'><IconArrowNarrowLeft color='black' /></TextLink></div>
                    <div className="grow-0 mr-7">Profile</div>
                    <div className="grow h-1"></div>
                </div>
            </div>
            <div className="m-5 mt-8 pb-[70%]">
                <div className="flex items-center mb-5">
                    <div className='ml-3'>
                        <div className='flex'>
                            <strong>Andrean Rahmatan</strong>
                            <div className='ml-3 rounded-full p-1' style={{ backgroundColor: 'rgba(36, 242, 79, 0.1)' }}>
                                <Text type='success' size='small'>Pemandu Wisata</Text>
                            </div>
                        </div>
                        <span className='text-gray text-md'>lilrahmat@gmail.com</span>
                    </div>
                </div>

                <div className='shadow'>
                    <Card>
                        <div style={{ border: '1px solid #eeeeee', color: 'gray', fontSize: '13px' }} className='p-3'>
                            <div className="flex">
                                <p><a href="/"><IconPencil /></a></p>
                                <a href="/profilupdate" className='ml-2 mt-0.5'>Edit Profil</a>
                                <div className="grow"></div>
                                <a href="/profilupdate"><IconChevronRight /></a>
                            </div>
                            <div className="flex mt-6">
                                <a href=""><IconAlertCircle /></a>
                                <a href="" className='ml-2 mt-0.5'>Tentang PanduKita</a>
                                <div className="grow"></div>
                                <div className="flex-none w-100"><a href="/"><IconChevronRight /></a></div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className='p-4'>
                <Button type="critical" fullWidth="true" submit={true} centered={true} href="/">Keluar</Button>
            </div>
        </div>
    )
}

export default ProfileTourGuide

