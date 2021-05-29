import React, { useEffect, useState } from 'react';
import './Result.css';
import VideoCard from './VideoCard';

const Results = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {

    }, [])

    return (
        <div className='results'>
            {movies.map((movie) => (<VideoCard />))}
        </div>
    );
};

export default Results;