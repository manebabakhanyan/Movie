import React, { useState } from 'react';
import MovieDetails from '../../Information/InformationMovie';

function ParentComponent() {
    const [startIndex, setStartIndex] = useState(0);

    return (
        <div>
            <MovieDetails setStartIndex={setStartIndex} />
        </div>
    );
}

export default ParentComponent;
