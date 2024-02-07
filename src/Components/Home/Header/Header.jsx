import React from 'react'

export default function Header() {
    return (
        <div className='flex justify-between p-[50px]'>
            <img src="Logo (6).png" alt="logo" className='w-[120px] h-[30px]' />
            <div className='flex justify-end items-center mr-[30px]'>
                <input type="text" className='rounded-[30px] border-2 border-yellow p-[10px] bg-gradient-to-br from-viaGray pl-[10px] to-toGray' />
                <i className="fa-solid fa-magnifying-glass flex-shrink-0 absolute pr-[20px] text-white"></i>
            </div>
        </div>
    )
}
