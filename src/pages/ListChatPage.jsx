import React from 'react'
import {
    TextLink,
    Button
} from "@kiwicom/orbit-components/lib/";
import {
    IconArrowNarrowLeft,
    IconSend
} from '@tabler/icons-react';
import BottomNavigation from '../component/BottomNavigation';
import sebalang from "../disk/image/sebalang.jpg";
import TGuide from "../disk/image/tguide1.jpg";
import { Link } from "react-router-dom";


function ListChat() {
    return (
        <div className='containerWisata h-screen'>
            <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
                <div className="flex">
                <div className="grow h-6">
                    <Link to={'/'}>
                    <IconArrowNarrowLeft color="black" />
                    </Link>
                </div>
                <div className="grow-0 mr-7">Chat</div>
                <div className="grow h-1"></div>
                </div>
            </div>
            <div className="mt-3">
                <div>
                    <form action="">
                        <div className="flex rounded py-2 h-screen bg-white">
                            <div className="flex-1">
                                <Link to={'/chat'}>
                                <div className="bg-white px-3 flex items-center cursor-pointer">
                                    <div>
                                        <img className="h-12 w-12 rounded-full"
                                            src={sebalang}/>
                                    </div>
                                    <div className="ml-4 flex-1 border-b border-[#dad9d9] py-4">
                                        <div className="flex items-bottom justify-between">
                                            <p className="text-grey-darkest">
                                                Hartono
                                            </p>
                                            <p className="text-xs text-grey-darkest">
                                                12:45 pm
                                            </p>
                                        </div>
                                        <p className="text-[#666666] mt-1 text-md">
                                            Halo selamat siang...
                                        </p>
                                    </div>
                                </div>
                                </Link>

                                <Link to={'/chat'}>
                                <div className="bg-white px-3 flex items-center cursor-pointer">
                                    <div>
                                        <img className="h-12 w-12 rounded-full"
                                            src={TGuide}/>
                                    </div>
                                    <div className="ml-4 flex-1 border-b border-[#dad9d9] py-4">
                                        <div className="flex items-bottom justify-between">
                                            <p className="text-grey-darkest">
                                                Hartono
                                            </p>
                                            <p className="text-xs text-grey-darkest">
                                                12:45 pm
                                            </p>
                                        </div>
                                        <p className="text-[#666666] mt-1 text-md">
                                            Halo selamat siang...
                                        </p>
                                    </div>
                                </div>
                                </Link>
                                <Link to={'/chat'}>
                                <div className="bg-white px-3 flex items-center cursor-pointer">
                                    <div>
                                        <img className="h-12 w-12 rounded-full"
                                            src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"/>
                                    </div>
                                    <div className="ml-4 flex-1 border-b border-[#dad9d9] py-4">
                                        <div className="flex items-bottom justify-between">
                                            <p className="text-grey-darkest">
                                                Hartono
                                            </p>
                                            <p className="text-xs text-grey-darkest">
                                                12:45 pm
                                            </p>
                                        </div>
                                        <p className="text-[#666666] mt-1 text-md">
                                            Halo selamat siang...
                                        </p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <BottomNavigation />
        </div>
    )
}

export default ListChat

