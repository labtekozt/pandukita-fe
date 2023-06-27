import React, {useState} from 'react'
import Trip from '../disk/image/tripbanner.jpg'
import Tguide from '../disk/image/tripbanner.jpg'
import { TextLink, 
    Button,
    Tile,
    Text,
    TimelineStep,
    Timeline } from "@kiwicom/orbit-components/lib/";
import { IconArrowNarrowLeft,
    IconChevronRight,
    IconCalendarEvent, 
    IconMap,
    IconMapPinSearch,
    IconTrash,
    IconPencil } from '@tabler/icons-react';
import { Illustration } from "@kiwicom/orbit-components";
  
  
function plannerAi() {

    return (
        <div className="container">
            <div className='p-2 z-50 shadow-sm sticky top-0 bg-white'>
                <div className="flex">
                    <div className="grow h-6"><TextLink href='/tripplannerhome'><IconArrowNarrowLeft color='black' /></TextLink></div>
                    <div className="grow-0 mr-8">Rencana Perjalanan</div>
                    <div className="grow h-1"></div>
                </div>
            </div>

            <div className='pb-[5%]'>
                <div class="grid gap-4 grid-cols-2">
                    <div className='mt-[55px] m-5'>
                        <span className='text-[23px] font-bold'>Jalan-Jalan <br />
                        ke Lampung</span>
                    </div>
                    <div className='img-guide m-4 mt-[25px]'><Illustration name="CompassEmailCaptain" size='medium'/></div>
                </div>

                <div className='flex mt-[10px] mb-[-165px]'>
                    <h1 className="ml-6 text-gray-10 font-bold text-xl"><IconCalendarEvent width={25} color='#444444'/></h1>
                    <span className="text-[#444444] mt-0.5 text-trip text-md ml-2">Sen, 6 Mar 2023 - Rab, 8 Mar 2023</span>
                </div>
                <div className='flex m-6 mt-[180px]'>
                    <Button size="small" type="primary" href='/lihatpeta'><span className='pl-5'>Lihat di Peta </span></Button>
                    <span className='ml-2 mt-1 absolute'><IconMap width={19} color='white'/></span>
                </div>
                <div className='m-6'>    
                    <Tile
                        title="Sen, 6 Mar 2023"
                        noPadding={true}
                        expandable={true}
                        initialExpanded={true}
                        description="">
                        <div className='pb-10'>
                            <div className='m-3'>
                                <Timeline direction="column">
                                    <TimelineStep type="secondary">
                                        <Text size="normal" weight="bold">
                                            <span className='text-[#00A388]'>Taman Gajah Way Kambas</span>
                                        </Text>
                                        <div className='mt-2'>
                                            <Text size='small'  weight="bold">09.00-10.00</Text>
                                        </div>
                                        <div className='w-[250px] mt-3'> 
                                            <img src={Tguide} className="rounded-lg relative w-[100%] object-cover"/>
                                        </div>
                                        <div className='mt-3'>
                                            <Text size='small'>Anda dapat melihat gajah sumatera yang dilindungi, berinteraksi dengan mereka, dan menikmati pertunjukkan gajah</Text>
                                        </div>
                                        <div className='flex mb-3 mt-4'>
                                            <TextLink href='plannerupdate' noUnderline={true}>
                                                <div className='flex mb-3'>
                                                    <Button type="primarySubtle" size="small" submit={true}><span className='pl-5'>Edit </span></Button>
                                                    <span className='ml-2 mt-1 absolute'><IconPencil width={19} color='#00A388'/></span>
                                                </div>
                                            </TextLink>
                                            <div className='flex ml-1'>
                                                <Button type="criticalSubtle" size="small" submit={true} href=''><span className='pl-5'>Hapus</span></Button>
                                                <span className='ml-2 mt-1 absolute'><IconTrash width={19} color='red'/></span>
                                            </div>
                                        </div>
                                    </TimelineStep>
                                    <div className='mb-[-40px]'>
                                        <TimelineStep type="secondary">
                                            <Text size="normal" weight="bold">
                                                <span className='text-[#00A388]'>Taman Gajah Way Kambas</span>
                                            </Text>
                                            <div className='mt-2'>
                                                <Text size='small'  weight="bold">09.00-10.00</Text>
                                            </div>
                                            <div className='w-[250px] mt-3'> 
                                                <img src={Tguide} className="rounded-lg relative w-[100%] object-cover"/>
                                            </div>
                                            <div className='mt-3'>
                                                <Text size='small'>Anda dapat melihat gajah sumatera yang dilindungi, berinteraksi dengan mereka, dan menikmati pertunjukkan gajah</Text>
                                            </div>
                                            <div className='flex mb-3 mt-4'>
                                                <TextLink href='plannerupdate' noUnderline={true}>
                                                    <div className='flex mb-3'>
                                                        <Button type="primarySubtle" size="small" submit={true} href=''><span className='pl-5'>Edit </span></Button>
                                                        <span className='ml-2 mt-1 absolute'><IconPencil width={19} color='#00A388'/></span>
                                                    </div>
                                                </TextLink>
                                                <div className='flex ml-1 mb-3'>
                                                    <Button type="criticalSubtle" size="small" submit={true} href=''><span className='pl-5'>Hapus</span></Button>
                                                    <span className='ml-2 mt-1 absolute'><IconTrash width={19} color='red'/></span>
                                                </div>
                                            </div>
                                        </TimelineStep>
                                    </div>
                                    <TimelineStep type="secondary">
                                        <TextLink href='planneradd' noUnderline={true} size="normal" weight="bold">
                                            <div className='mb-[-50px]'></div>
                                            <span className='text-[#00A388]'>+ Tambah Wisata</span>
                                        </TextLink>
                                    </TimelineStep>
                                </Timeline>
                            </div>
                        </div>
                    </Tile>
                </div>

                {/* kalauu kosong */}

                <div className='m-6'>    
                    <Tile
                        title="Sen, 7 Mar 2023"
                        noPadding={true}
                        expandable={true}
                        description="">
                        <div className='pb-10'>
                            <div className='p-5 flex items-center justify-center'>
                                <div className='img-guide'><Illustration name="CompassTravelPlan" size='small' /></div>
                            </div>
                            <div className='flex items-center justify-center p-1'>
                                <Text align="center">Belum ada tempatnya nih, ayo <br /> tambah rencanamu!</Text>
                            </div>
                            <div className='flex items-center justify-center p-1'>
                                <Button size="small" type="primary"><span className='pl-6'>Tambah Tujuan</span></Button>
                                <span className='mr-[29%] m-2 absolute'><IconMapPinSearch width={19} color='white'/></span>
                            </div>
                        </div>
                    </Tile>
                </div>
            </div>
            <div className='flex p-4 z-50 bottom-0'>
                <Button fullWidth="true" submit={true} centered={true} href='tripplannerhome'>Simpan Rencana Perjalananmu</Button>
                <IconChevronRight color='white' className='planner-ai mr-2 absolute ml-[364px] mt-[10px]'/>
            </div>
            <div className='flex p-4 z-50 mt-[-25px]'>
                <span className='w-full rounded bg-white' style={{border : '2px solid #00A388'}}><Button type="white" fullWidth="true" submit={true} centered={true}>Tanyakan ke Pemandu Wisata</Button></span>
            </div>
        </div>
    )
}

export default plannerAi

