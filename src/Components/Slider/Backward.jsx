import React from 'react';
import BackwardIcon from '../Icon/Vector (6).png'
export default function Backward({ onClick }) {
    return (
        <div className='flex items-center cursor-pointer' onClick={onClick}>
            <img src={BackwardIcon} alt="backword" className='h-[23px]' />
        </div>
    );
}