import React from 'react'
import {
    TextLink,
    Button,
    InputFile
} from "@kiwicom/orbit-components/lib/";
import {
    IconArrowNarrowLeft,
    IconMap2,
    IconUser
} from '@tabler/icons-react';

function RegisterTourGuide() {
    const [fileName, setFileName] = React.useState("");

    return (
        <div className='containerWisata'>
            <div className='p-2 z-50 shadow-sm sticky top-0 bg-white'>
                <div className="flex">
                    <div className="grow h-6"><TextLink href='/profileuser'><IconArrowNarrowLeft color='black' /></TextLink></div>
                    <div className="grow-0 mr-8">Profil</div>
                    <div className="grow h-1"></div>
                </div>
            </div>

            <form action="" required={true}>
                <div className="m-5">
                    <span className='text-[20px] font-bold'>Bergabung Menjadi Pemandu <br /> Wisata</span>
                    <div className="mt-5 mb-5">
                        <h1 className='text-md mb-1'>Foto Profil</h1>
                        <div className='flex mt-1'>
                            <div className="w-full placeholder:text-sm placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-sm shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md">
                                <InputFile
                                    fileName={fileName}
                                    placeholder="Add attachment"
                                    buttonLabel=""
                                    onChange={(event) => setFileName(event.currentTarget.files[0].name)}
                                    onRemoveFile={() => setFileName("")}
                                    required={true} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 mb-6">
                        <h1 className='text-md mb-1'>Nama</h1>
                        <div className='flex mt-1'>
                            <input style={{ padding: '10px', paddingLeft: '50px' }} name='tujuan' className="w-full placeholder:text-md placeholder:text-slate-900 block bg-[#e8edf1] border border-[#bfc3cb] rounded-sm py-2 pl-1 focus:outline-none focus:border-none focus:ring-none focus:ring-none md:text-md" placeholder="Andrean Rahmatan" type="text" />
                            <IconUser width={20} className='mr-2 absolute ml-3 m-2' />
                        </div>
                    </div>
                    <div className="mt-5 mb-6">
                        <h1 className='text-md mb-1'>Lokasi anda saat ini</h1>
                        <div className='flex mt-1'>
                            <input style={{ padding: '10px' }} name='tujuan' className="w-full placeholder:text-sm placeholder:text-slate-400 block bg-[#e8edf1] border border-[#bfc3cb] rounded-sm py-2 pl-2 focus:outline-none focus:border-none focus:ring-none focus:ring-none md:text-md" placeholder="Lampung Selatan....." type="text" />
                            <IconMap2 className='planner-icon mr-2 absolute ml-[350px] mt-2' />
                        </div>
                    </div>

                    <div className='mt-3 mb-[30%]'>
                        <h1 className='mb-1'>Deskripsi tentang anda</h1>
                        <textarea className='w-full h-[120px] bg-[#e8edf1] p-2 rounded-sm border border-[#bfc3cb] shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md' placeholder='Deskripsi tentang diri anda....' name="catatan"></textarea>
                    </div>
                </div>
                <div className='flex p-4 z-50 bottom-0'>
                    <Button fullWidth="true" submit={true} centered={true} href='/profiltoureguide'>Gabung</Button>
                </div>
            </form>
        </div>
    )
}

export default RegisterTourGuide

