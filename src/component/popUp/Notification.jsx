import React, {useState} from 'react';

function Notif() {
    const [showModal, setShowModal] = useState(true);

    return (
    <>
    {showModal &&
      <div className="flex absolute align-item-center mt-4 px-2 z-50 flex-col place-items-center">
        <div className="flex bg-white flex-row notif shadow shadow-lg shadow-lg rounded-md overflow-hidden">
          <div className="flex w-2 bg-[green]"></div>
          <div className="flex-1 pt-2 pb-2 pl-2 mr-[100px]">
            <p className="text-sm text-[#4d4d4d] flex">Message | 15.00</p>
            <h1 className="text-md text-gray-600 mt-2">Hartono</h1>
            <p className="text-gray-400 text-xs md:text-sm font-light">Halo selamat siang....</p>
          </div>
          <div onClick = {() => setShowModal(false)} className="cursor-pointer border-gray-100 p-3 flex place-items-top">
            <p className="text-gray-400 font-bold text-xs">X</p>
          </div>
        </div>
      </div>
    }
  </>
  )
}

export default Notif