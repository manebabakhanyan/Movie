import React from 'react'

export default function Search() {
    return (
        <div className='flex justify-end items-center mr-[30px]'>
            <input type="text" className='rounded-[30px] border-2 border-yellow p-[10px] bg-gradient-to-br pl-[10px] ' />
            <i className="fa-solid fa-magnifying-glass flex-shrink-0 absolute pr-[20px] text-white"></i>
        </div>
    )
}
