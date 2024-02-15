import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoPage() {
    const { videoId } = useParams();

    return (
        <div>
            <div className="flex justify-center pt-[50px]">
                <iframe
                    title="Video"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    className='w-[700px] h-[359px]'
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};
