import React from 'react';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
    const { videoId } = useParams();

    return (
        <div>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                
            ></iframe>
        </div>
    );
};

export default VideoPage;
