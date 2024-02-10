import React from 'react';

export default function Forward({ onClick }) {
    return (
        <div className='flex items-center cursor-pointer' onClick={onClick}>
            <img src="Vector (5).png" alt="forward" className='w-[30px]' />
        </div>
    );
}