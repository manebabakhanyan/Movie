import React, { useState, useEffect } from 'react';

export default function Loading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        loading && (
            <div className='flex justify-center h-[54.7vh] items-center'>
                <img src="https://media.tenor.com/_62bXB8gnzoAAAAi/loading.gif" alt="loading" className='w-[50px]' />
            </div>
        )
    );
}
