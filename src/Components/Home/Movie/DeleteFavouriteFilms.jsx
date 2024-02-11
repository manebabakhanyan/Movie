import React from 'react';

const DeleteFavouriteFilms = ({ handleClick }) => {
    return (
        <div className='flex justify-end pr-[5px] pt-[5px]'>
            <img onClick={handleClick} src="https://w7.pngwing.com/pngs/84/324/png-transparent-computer-icons-cross-delete-button-desktop-treasure-map-logo-line-icon-design-thumbnail.png" alt="delete" className='w-[16px]' />
        </div>
    );
};

export default DeleteFavouriteFilms;