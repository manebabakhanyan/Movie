import React from 'react';

function ActorImage({ imagePath }) {
    return (
        <img
            src={imagePath || 'https://via.placeholder.com/500x750'}
            alt='Actor'
            className='w-[50px] h-[50px] rounded-[50%] object-cover'
        />
    );
}

export default ActorImage;