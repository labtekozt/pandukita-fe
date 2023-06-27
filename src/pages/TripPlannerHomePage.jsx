import React from 'react'
import BottomNavigation from '../component/BottomNavigation';
import TripBanner from '../disk/image/tripbanner.jpg'
import Illustration from "@kiwicom/orbit-components/lib/Illustration";
import { TextLink } from "@kiwicom/orbit-components/lib/";
import { IconArrowNarrowLeft } from '@tabler/icons-react';
  
function tripPlannerHome() {
    return (
        <div className="container">
            <div className='p-2 z-50 shadow-sm sticky top-0 bg-white'>
                <div className="flex">
                    <div className="grow h-6"><TextLink href='/'><IconArrowNarrowLeft color='black' /></TextLink></div>
                    <div className="grow-0 mr-8">Rencana Perjalanan</div>
                    <div className="grow h-1"></div>
                </div>
            </div>
            <div className='pb-[40%]'>
                <div class="grid gap-4 grid-cols-2">
                    <div className='mt-[45px] m-5'>
                        <span className='text-[24px] font-bold'>Atur<br />
                        Perjalanan <br />
                        Disini</span>
                    </div>
                    
                    <div className='m-2 mt-[30px]'>
                        <Illustration name="CompassPoints" size='medium' />
                    </div>
                </div>
                <div className='flex mt-[10px] mb-[-165px]'>
                    <h1 className="ml-6 text-gray-10 font-bold text-xl">Perjalanan Kamu</h1>
                    <div className='flex-grow'></div>
                    <span className="text-[#00A388] mt-0.5 text-trip font-bold text-md mr-[30px]"><a href="/plannerform">Tambah +</a></span>
                </div>
                <div className='m-6'>    
                    <div className='mt-[175px]'>
                        <a href="/plannerai">
                            <div className='trip-text mb-[-210px]'>
                                <img className='rounded-lg' width={'100%'} src={TripBanner}/>
                            </div>
                            <div className='z-50 text-white m-6'>
                                <h1 className='font-bold mb-[-3px]'>Lampung</h1>
                                <h1 className='text-md'>6 - 7 Mei 2023</h1>
                            </div>
                        </a> 
                    </div>
                    <div className='mt-[175px]'>
                        <a href="/plannerai">
                            <div className='trip-text mb-[-210px]'>
                                <img className='rounded-lg' width={'100%'} src={TripBanner}/>
                            </div>
                            <div className='z-50 text-white m-6'>
                                <h1 className='font-bold mb-[-3px]'>Lampung</h1>
                                <h1 className='text-md'>6 - 7 Mei 2023</h1>
                            </div>
                        </a> 
                    </div>
                    <div className='mt-[175px]'>
                        <a href="/plannerai">
                            <div className='trip-text mb-[-210px]'>
                                <img className='rounded-lg' width={'100%'} src={TripBanner}/>
                            </div>
                            <div className='z-50 text-white m-6'>
                                <h1 className='font-bold mb-[-3px]'>Lampung</h1>
                                <h1 className='text-md'>6 - 7 Mei 2023</h1>
                            </div>
                        </a> 
                    </div>
                </div>
            </div>
            <BottomNavigation />
        </div>
    )
}

export default tripPlannerHome

