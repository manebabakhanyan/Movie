import React from 'react';

function ActorImage({ imagePath }) {
    return (
        <img
            src={imagePath || 'https://via.placeholder.com/500x750'}
            alt='Actor'
            className='w-[50px] h-[50px] rounded-[50%] object-cover max-md950:w-[40px] max-md950:h-[40px]'
        />
    );
}

export default ActorImage;
