import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function PageNotFound() {
    return (
        <div className='container404'>
            <h1>404 Page Not Found</h1>
            <Link to="/">Go to Home Page</Link>
        </div>
    );
}

export default PageNotFound;
