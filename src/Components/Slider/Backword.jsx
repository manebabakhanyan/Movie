import React from 'react';

export default function Backword({ onClick }) {
    return (
        <div className='flex items-center cursor-pointer' onClick={onClick}>
            <img src="Vector (6).png" alt="backword" />
        </div>
    );
}