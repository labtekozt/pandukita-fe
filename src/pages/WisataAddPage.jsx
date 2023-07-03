import React, { useState } from 'react'
import {
    TextLink,
    Button,
    InputFile
} from "@kiwicom/orbit-components/lib/";
import {
    IconArrowNarrowLeft,
    IconMap2
} from '@tabler/icons-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function WisataAdd() {
    const [fileName, setFileName] = React.useState("");
    const [Kategori, setKategori] = useState()

    const sebalang = [-5.5828711, 105.3776283]
    const kedu = [-5.7185981, 105.5667259]

    return (
        <div className='containerWisata'>
            <div className='p-2 z-50 shadow-sm sticky top-0 bg-white'>
                <div className="flex">
                    <div className="grow h-6"><TextLink href='/'><IconArrowNarrowLeft color='black' /></TextLink></div>
                    <div className="grow-0 mr-8">Tambah Wisata</div>
                    <div className="grow h-1"></div>
                </div>
            </div>

            <form action="" required={true}>
                <div className="m-5">
                    <span className='text-[20px] font-bold'>Tambah Wisata</span>
                    <div className="mt-5 mb-6">
                        <h1 className='text-md mb-1'>Foto Wisata</h1>
                        <div className="w-full placeholder:text-sm placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-md shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md">
                            <InputFile
                                fileName={fileName}
                                placeholder="Add attachment"
                                buttonLabel=""
                                onChange={(event) => setFileName(event.currentTarget.files[0].name)}
                                onRemoveFile={() => setFileName("")}
                                required={true} />
                        </div>
                    </div>
                    <div className="mt-5 mb-6">
                        <h1 className='text-md mb-1'>Nama Tempat Wisata?</h1>
                        <div className='flex mt-1'>
                            <input style={{ padding: '10px' }} name='tujuan' className="w-full placeholder:text-sm placeholder:text-slate-400 block bg-[#e8edf1] border border-[#bfc3cb] rounded-sm py-2 pl-2 shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md" placeholder="Ekowisata Cukunyinyi Mangrove..." type="text" />
                        </div>
                    </div>
                    <div className="mt-5 mb-6">
                        <h1 className='text-md mb-1'>Lokasi Wisata?</h1>
                        <div className='flex mt-1'>
                            <input style={{ padding: '10px' }} name='tujuan' className="w-full placeholder:text-sm placeholder:text-slate-400 block bg-[#e8edf1] border border-[#bfc3cb] rounded-sm py-2 pl-2 shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md" placeholder="Sidodadi, Padang Cermin, Pesawaran Regency....." type="text" />
                            <IconMap2 className='planner-icon mr-2 absolute ml-[350px] mt-2' />
                        </div>
                    </div>

                    <div className='map mb-5'>
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
                        <h1 className='mb-1'>Deskripsi Tempat Wisata</h1>
                        <textarea className='w-full h-[100px] bg-[#e8edf1]  p-2 rounded-sm border border border-[#bfc3cb] focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md' placeholder='Deskripsi Tempat Wisata....' name="catatan"></textarea>
                    </div>
                </div>

                {/* Kategri */}
                <div className='m-5 mb-[20%]'>
                    <h1 className='text-2xl font-bold text-black mb-3 ml-1'>Kategori</h1>
                    <div class="wrapper">
                        <input type="radio" name="kategori" id="option-1" value="Pantai" onChange={e=>setKategori(e.target.value)}/>
                        <input type="radio" name="kategori" id="option-2" value="Alam Hijau" onChange={e=>setKategori(e.target.value)}/>
                        <input type="radio" name="kategori" id="option-3" value="Belanja" onChange={e=>setKategori(e.target.value)}/>

                        <label for="option-1" className="option bg-[#F2F2F2] shadow-md option-1">
                            <div class="dot"></div>
                            <span>Pantai</span>
                        </label>
                        <label for="option-2" className="ml-2 bg-[#F2F2F2] shadow-md option option-2">
                            <div class="dot"></div>
                            <span>Alam Hijau</span>
                        </label>
                        <label for="option-3" className="ml-2 bg-[#F2F2F2] shadow-md option option-3">
                            <div class="dot"></div>
                            <span>Belanja</span>
                        </label>
                    </div>
                    <div className='flex mt-3'>
                        <div class="wrapper">
                            <input type="radio" name="kategori" id="option-4" value="Adat & Budaya" onChange={e=>setKategori(e.target.value)}/>
                            <input type="radio" name="kategori" id="option-5" value="Pendidikan" onChange={e=>setKategori(e.target.value)}/>

                            <label for="option-4" className="option bg-[#F2F2F2] shadow-md option-4">
                                <div class="dot"></div>
                                <span>Adata & Budaya</span>
                            </label>
                            <label for="option-5" className="ml-2 bg-[#F2F2F2] shadow-md option option-5">
                                <div class="dot"></div>
                                <span>pendidikan</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className='flex p-4 z-50 bottom-0'>
                    <Button circled={true} fullWidth="true" submit={true} centered={true}>Tambah Wisata</Button>
                </div>
            </form>
        </div>
    )
}

export default WisataAdd

