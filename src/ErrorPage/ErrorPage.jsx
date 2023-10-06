import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            sorry! you are in the wrong page
            <NavLink to='/'><button className='btn btn-primary'>Go Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;