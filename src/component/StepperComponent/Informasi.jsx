import React, { useEffect, useRef, useState } from "react";
import { IconPlus } from '@tabler/icons-react';

function Informasi() {
  const [showTags, setShowTags] = useState(true);

  const [selectedImages, setSelectedImages] = useState([]);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles)

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  return ( 
      <div>
        <div className="m-5">
          <div className="mt-5 mb-6">
            <h1 className="text-md mb-1">Nama tempat wisata</h1>
            <div className="flex mt-1">
              <input
                style={{ padding: "10px" }}
                name="tujuan"
                className="w-full placeholder:text-sm placeholder:text-slate-400 block bg-[#e8edf1] rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
                placeholder="Ekowisata Cukunyinyi Mangrove..."
                type="text"
              />
            </div>
          </div>

          <div className="mt-5 mb-6">
            <h1 className="text-md mb-1">Foto wisata</h1>
            <div className="flex flex-wrap max-w-sm">
              <label className="ml-1 mt-2 cursor-pointer bg-[#f5f8fa] flex flex-col text-gray justify-center rounded-md border-dotted border-2 border-[gray] items-center w-[100px] h-[170px]">
                  <span><IconPlus width={20}/></span>
                  <span className="text-sm">Add Image</span>
                  <input type="file" name="images" multiple accept="image/png image/jpeg" onChange={onSelectFile} style={{display : 'none', visibility : 'none'}}/>
              </label>
              {selectedImages && selectedImages.map((image, index) => {
                return(
                  <div className="ml-2 mt-2">
                    <img src={image} className="w-[100px] h-[170px] rounded-md object-cover"/>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-3">
            <h1 className="mb-1 text-md">Deskripsi tempat wisata</h1>
            <textarea
              className="w-full h-[100px] bg-[#e8edf1]  p-2 rounded-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
              placeholder="Deskripsi Tempat Wisata...."
              name="catatan"
            ></textarea>
          </div>
        </div>

        {/* Kategri */}
        <div className="m-5 mb-[30%]">
          <div className="mt-5 mb-3">
            <h1 className="text-md mb-1">Kategori</h1>
            <div className="flex mt-1">
              <input
                style={{ padding: "10px" }}
                name="tujuan"
                className="w-full placeholder:text-sm placeholder:text-slate-400 block bg-[#e8edf1] rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
                placeholder="Mangrove"
                type="text"
              />
            </div>
          </div>
          <div className="wrapper ">
            {showTags &&
              <div className="flex z-50 ml-[-12px] place-items-center">
                <div className="ml-1 flex bg-[#F2F2F2] px-3 py-1 shadow-lg rounded-full" style={{border: "1px solid #D1D1D1"}}>
                    <p onClick = {() => setShowTags(false)} className="mr-2 text-gray-400 text-md cursor-pointer">X</p>
                    <h1 className="text-md text-gray-600 ml-1">Pantai</h1>
                </div>
                <div className="ml-1 flex bg-[#F2F2F2] px-3 py-1 shadow-lg rounded-full" style={{border: "1px solid #D1D1D1"}}>
                    <p onClick = {() => setShowTags(false)} className="mr-2 text-gray-400 text-md cursor-pointer">X</p>
                    <h1 className="text-md text-gray-600 ml-1">Mangrove</h1>
                </div>
              </div>
            }
          </div>
        </div>
    </div>
  );
}

export default Informasi;
