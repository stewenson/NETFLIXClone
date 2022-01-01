import React from 'react';
import './watch.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation } from 'react-router-dom';
;

export default function Watch() {
    const location = useLocation();
    console.log(location);
    return (
        <div className='watch'>
            <Link to="/">
            <div className="back">
                <ArrowBackIcon />
                Home
            </div>
            </Link>
            
            <video 
                className='video' 
                autoPlay
                progress 
                controls
                src={location.movie.video}

            />
        </div>
    )
}
