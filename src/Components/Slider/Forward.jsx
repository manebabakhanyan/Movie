import React from 'react';
import ForwardIcon from '../Icon/Vector (5).png'
export default function Forward({ onClick }) {
    return (
        <div className='flex items-center cursor-pointer' onClick={onClick}>
            <img src={ForwardIcon} alt="forward" className='h-[23px]' />
        </div>
    );
}