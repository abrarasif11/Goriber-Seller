import React from 'react';

const Spinner = () => {
    return (
        <div className='bg-white'>
            <div className="w-16 h-16 mt-80 border-4 mx-auto bg-white border-dashed rounded-full animate-spin border-orange-700"></div>
        </div>
    );
};

export default Spinner;