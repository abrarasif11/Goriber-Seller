import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assests/21510358.jpg'

const Errorpage = () => {
    return (
        <div className='text-center'>
            <img className=' mx-auto -m-40' src={error} alt="" />
            <div>
            <Link to='/'><button className='font-poppins font-semibold text-center px-2 py-2 rounded bg-orange-600 text-black'>Back To Homepage</button></Link>
            </div>
        </div>
    );
};

export default Errorpage;