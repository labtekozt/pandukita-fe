import React, { useState } from 'react'
import {
    TextLink,
    Button
} from "@kiwicom/orbit-components/lib/";
import {
    IconArrowNarrowLeft,
    IconMap2,
    IconRobot,
    IconPlus,
    IconCalendarEvent
} from '@tabler/icons-react';
import DatePicker from 'react-datepicker'

function PlannerFormPage() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className='containerWisata'>
            <div className='p-2 z-50 shadow-sm sticky top-0 bg-white'>
                <div className="flex">
                    <div className="grow h-6"><TextLink href='/tripplannerhome'><IconArrowNarrowLeft color='black' /></TextLink></div>
                    <div className="grow-0 mr-8">Buat Perjalanan</div>
                    <div className="grow h-1"></div>
                </div>
            </div>
            <form action="">
                <div className="m-5 mb-[30%]">
                    <div className="mt-10">
                        <h1 className='text-md mb-1'>Nama Perjalanan</h1>
                        <div className='flex mt-1'>
                            <input style={{ padding: '10px' }} name='namaPerjalanan' className="w-full placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md" placeholder="Jalan Jalan ke Lampung..." type="text" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <h1 className='text-md mb-1'>Mau Kemana?</h1>
                        <div className='flex mt-1'>
                            <input style={{ padding: '10px' }} name='tujuan' className="w-full placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md" placeholder="Lampung Selatan..." type="text" />
                            <IconMap2 className='planner-icon mr-2 absolute ml-[350px] mt-2' />
                        </div>
                    </div>

                    <div className="flex pb-[200px] mt-6">
                        <div>
                            <label className='text-md'>Dari Tanggal</label>
                            <div className='flex mt-1'>
                                <DatePicker
                                    className='date-plan p-3 bg-[#e8edf1] rounded-md w-[100%] focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md'
                                    selected={startDate}
                                    showYearDropdown
                                    dateFormat='dd/MM/yyyy'
                                    onChange={(date) => setStartDate(date)} />
                                <IconCalendarEvent color='black' className='date-icon z-50 absolute ml-[150px] mt-2' />
                            </div>
                        </div>
                        <div>
                            <label className='text-md'>Sampai Tanggal</label>
                            <div className='flex mt-1 ml-2'>
                                <DatePicker
                                    className='date-plan p-3 bg-[#e8edf1] rounded-md w-[100%] focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md'
                                    selected={startDate}
                                    showYearDropdown
                                    dateFormat='dd/MM/yyyy'
                                    onChange={(date) => setStartDate(date)} />
                                <IconCalendarEvent color='black' className='date-icon z-50 absolute ml-[150px] mt-2' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex p-4 z-50 bottom-0'>
                    <Button fullWidth="true" submit={true} centered={true} href="/tripplannerhome">Buat Rencana Baru</Button>
                    <IconPlus color='white' className='planner-icon mr-2 absolute ml-[350px] mt-2' />
                </div>
                <div className='text-hr flex z-50 bottom-0'>
                    <p className='text-sm text-gray'>Ingin Hal Baru ?</p>
                </div>
                <div className='flex p-4  mt-[-20px] z-50 bottom-0'>
                    <Button type="primarySubtle" fullWidth="true" submit={true} centered={true} href="/plannerai">Buat Rencana Baru</Button>
                    <IconRobot color={'#00A388'}  className='planner-icon mr-2 absolute ml-[350px] mt-2' />
                </div>
            </form>
        </div>
    )
}

export default PlannerFormPage

