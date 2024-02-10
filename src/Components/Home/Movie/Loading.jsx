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
            <div>
                <img src="https://media.tenor.com/_62bXB8gnzoAAAAi/loading.gif" alt="loading" />
            </div>
        )
    );
}
