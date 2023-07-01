import React, { useState } from 'react'
import {
    TextLink,
    Button
} from "@kiwicom/orbit-components/lib/";
import {
    IconArrowNarrowLeft,
    IconMap2,
    IconPlus,
    IconCalendarEvent
} from '@tabler/icons-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import DatePicker from 'react-datepicker'

function PlannerAdd() {
    const [startDate, setStartDate] = useState(new Date());

    const sebalang = [-5.5828711, 105.3776283]
    const kedu = [-5.7185981, 105.5667259]

    return (
        <div className='containerWisata'>
            <div className='p-2 z-50 shadow-sm sticky top-0 bg-white'>
                <div className="flex">
                    <div className="grow h-6"><TextLink href='/plannerai'><IconArrowNarrowLeft color='black' /></TextLink></div>
                    <div className="grow-0 mr-8">Tambah Tujuan</div>
                    <div className="grow h-1"></div>
                </div>
            </div>

            <form action="" required={true}>
                <div className="m-5">
                    <div className="mt-10 mb-6">
                        <h1 className='text-md mb-1'>Mau Kemana?</h1>
                        <div className='flex mt-1'>
                            <input style={{ padding: '10px' }} name='tujuan' className="w-full placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md" placeholder="Lampung Selatan..." type="text" />
                            <IconMap2 className='planner-icon mr-2 absolute ml-[350px] mt-2' />
                        </div>
                    </div>

                    <div className='map mb-5 z-0'>
                        <MapContainer center={sebalang} zoom={7.5} scrollWheelZoom={true}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={sebalang}>
                                <Popup>Pantai Sebalang</Popup>
                            </Marker>
                            <Marker position={kedu}>
                                <Popup>Pantai KeduWarna</Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                    <div className='mt-3'>
                        <h1 className='mb-1'>Catatan</h1>
                        <textarea className='w-full h-[100px] bg-[#e8edf1] p-2 rounded-md border border-none shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md' placeholder='Catatan....' name="catatan"></textarea>
                    </div>

                    <div className="mt-3">
                        <label className='text-md'>Tanggal Aktivitas</label>
                        <div className='flex mt-1'>
                            <DatePicker
                                className='date-picker p-3 bg-[#e8edf1] rounded-md w-[390px] focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md'
                                selected={startDate}
                                showYearDropdown
                                dateFormat='dd/MM/yyyy'
                                onChange={(date) => setStartDate(date)} />
                            <IconCalendarEvent color='black' className='z-50 date-picker-icon absolute ml-[350px] mt-2' />
                        </div>
                    </div>

                    <div className="flex pb-[50px] mt-4">
                        <div className='mt-1 w-full'>
                            <label className='text-md'>Waktu Mulai</label>
                            <input style={{ padding: '10px' }} name='from' className="w-full placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-md shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md" type="time" />
                        </div>
                        <div className='time mt-1 ml-4 mb-10 w-full'>
                            <label className='text-md'>Waktu Akhir</label>
                            <input style={{ padding: '10px' }} name='to' className="w-full placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-md shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md" type="time" />
                        </div>
                    </div>
                </div>

                <div className='flex p-4 z-50 bottom-0'>
                    <Button fullWidth="true" submit={true} centered={true} href='/plannerai'>Tambah</Button>
                    <IconPlus color='white' className='planner-icon mr-2 absolute ml-[350px] mt-2' />
                </div>
            </form>
        </div>
    )
}

export default PlannerAdd

