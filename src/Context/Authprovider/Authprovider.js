import React, { createContext } from 'react';
import getAuth from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const Authprovider = () => {
    return (
        <div>
            
        </div>
    );
};

export default Authprovider;