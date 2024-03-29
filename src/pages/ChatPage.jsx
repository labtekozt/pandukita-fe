import React, { useState } from 'react'
import {
    TextLink,
    Button
} from "@kiwicom/orbit-components/lib/";
import Card from "@kiwicom/orbit-components/lib/Card";
import {
    IconArrowNarrowLeft,
    IconCalendarEvent,
    IconMap,
    IconMapPin,
    IconSend
} from '@tabler/icons-react';


function Chat() {
    const [show, toggleShow] = useState(true);

    return (
        <div className='containerWisata'>
            <div className='p-2 z-50 shadow-sm sticky top-0 bg-white'>
                <div className="flex">
                    <div className="grow h-6"><TextLink href='/listchat'><IconArrowNarrowLeft color='black' /></TextLink></div>
                    <div className="grow-0">Chat : Hartono</div>
                    <div className="grow h-1"></div>
                    <div className='mr-2 mt-[-7px] cursor-pointer font-bold' style={{fontSize : '20px'}} onClick={() => toggleShow(!show)}>
                        {show ? ". . ." : ". . ."}
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <div>
                    <form action="">
                        <div className="flex-1 bg-white sm:p-3 justify-between flex flex-col h-screen">
                            <div id="messages" className="flex pb-[100px] flex-col space-y-4 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                            
                            {show && 
                            <div className="m-5 mt-1">  
                                <div className="flex items-center mb-1">
                                    <span className="text-xl text-rent mt-[-10px]">Rangkuman Perjalanan</span>
                                    <div className='grow'></div>
                                    <div className='flex relative mr-0 mb-3 mt-1'>
                                        <Button size="small" type="primary" href='/lihatpeta'><span className='pl-5'>Lihat di Peta </span></Button>
                                        <span className='ml-2 mt-1 absolute'><IconMap width={19} color='white' /></span>
                                    </div>
                                </div>
                                <div className='bg-[#eeeeee] rounded-md mb-5'>
                                    <Card>
                                        <div style={{ color: 'black', fontSize: '13px' }} className='p-3'>
                                            <div className="flex">
                                                <p className='mt-0.5'><IconMap size={20} /></p>
                                                <span className='ml-2 font-bold text-black text-xl'>Jalan Jalan ke Lampung</span>
                                            </div>
                                            <div className="flex mt-3">
                                                <p className='mt-0.5'><IconCalendarEvent size={20} /></p>
                                                <span className='ml-2 text-md mt-0.5'>Sen, 6 Maret 2023 - Rabu, 8 Maret 2023</span>
                                            </div>
                                            <div className="flex mt-3">
                                                <p className='mt-0.5'><IconMapPin size={20} /></p>
                                                <span className='ml-2 text-md mt-0.5'>Lampung, Indonesia
                                                    <ull className='text-sm ml-2'>
                                                        <li>Taman Gajah Way Kambas</li>
                                                        <li>Pantai Sebalang</li>
                                                        <li>Mangrove Cukunyinyi</li>
                                                    </ull>
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            <div className='border-b border-[#D1D1D1]'></div>
                            </div>
                            }
                            <div className="chat-message">
                                <div className="flex items-end justify-end">
                                    <div className="flex flex-col space-y-2 text-md max-w-xs mx-2 order-1 items-end">
                                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none text-white" style={{ background: '#00A388' }}>pagi pak, apakah bisa memandu saya dalam perjalanan ini ?</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-message">
                                <div className="flex items-end">
                                    <div className="flex flex-col space-y-2 text-md max-w-xs mx-2 order-2 items-start">
                                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none text-gray-600" style={{ background: '#D1D1D1' }}>silahkan</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-message">
                                <div className="flex items-end justify-end">
                                    <div className="flex flex-col space-y-2 text-md max-w-xs mx-2 order-1 items-end">
                                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white " style={{ background: '#00A388' }}>kira kira total budged berapa ya pak untuk perjalanan ini ?</span></div>
                                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white " style={{ background: '#00A388' }}>kira kira total budged berapa ya pak untuk perjalanan ini ?</span></div>
                                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white " style={{ background: '#00A388' }}>kira kira total budged berapa ya pak untuk perjalanan ini ?</span></div>
                                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white " style={{ background: '#00A388' }}>kira kira total budged berapa ya pak untuk perjalanan ini ?</span></div>
                                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white " style={{ background: '#00A388' }}>kira kira total budged berapa ya pak untuk perjalanan ini ?</span></div>
                                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white " style={{ background: '#00A388' }}>kira kira total budged berapa ya pak untuk perjalanan ini ?</span></div>
                                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white " style={{ background: '#00A388' }}>kira kira total budged berapa ya pak untuk perjalanan ini ?</span></div>
                                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white " style={{ background: '#00A388' }}>kira kira total budged berapa ya pak untuk perjalanan ini ?</span></div>
                                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white " style={{ background: '#00A388' }}>kira kira total budged berapa ya pak untuk perjalanan ini ?</span></div>
                                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white " style={{ background: '#00A388' }}>kira kira total budged berapa ya pak untuk perjalanan ini ?</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-message">
                                <div className="flex items-end">
                                    <div className="flex flex-col space-y-2 text-md max-w-xs mx-2 order-2 items-start">
                                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600" style={{ background: '#D1D1D1' }}>perkiraan sekitar 2 juta suda termasuk penginapan bisa saya bantu</span></div>
                                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600" style={{ background: '#D1D1D1' }}>perkiraan sekitar 2 juta suda termasuk penginapan bisa saya bantu</span></div>
                                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600" style={{ background: '#D1D1D1' }}>perkiraan sekitar 2 juta suda termasuk penginapan bisa saya bantu</span></div>
                                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600" style={{ background: '#D1D1D1' }}>perkiraan sekitar 2 juta suda termasuk penginapan bisa saya bantu</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="fixed navbar-chat border-t-2 border-[#D1D1D1] mt-5 sm:mb-0">
                            <div class="relative flex m-2">
                                <input type="text" placeholder="Kirim Pesan" class="w-full input-chat focus:outline-none focus:placeholder-gray text-gray-600 placeholder-gray-600 pl-3 bg-light border-solid border-gray-200 rounded-full py-3" />
                                <div class="absolute right-0 items-center inset-y-0 sm:flex">
                                    <button type="button" class="mr-2 icon-chat inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out hover:bg-[#D1D1D1] focus:outline-none">
                                        <IconSend />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
)}

export default Chat

