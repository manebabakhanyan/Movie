import React from 'react';

const VideoModal = ({ video, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative max-w-screen-lg w-[800px] h--[650px]">
                <div className="aspect-w-16">
                    <iframe
                        title="Video"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        className="w-full h-[400px]"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <button className="absolute top-4 right-4 text-white text-2xl" onClick={onClose}>&times;</button>
        </div>
    );
};

export default VideoModal;
