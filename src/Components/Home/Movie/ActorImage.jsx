import React from 'react';

function ActorImage({ imagePath }) {
    return (
        <img
            src={imagePath || 'https://via.placeholder.com/500x750'}
            alt='Actor'
            className='w-[50px] h-[50px] rounded-[50%] object-cover md700:h-[30px] md940:w-[50px] md940:h-[50px]'
        />
    );
}

export default ActorImage;
