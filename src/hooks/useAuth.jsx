import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';

const useAuth = () => {
    const {user} = useContext(AuthContext);

    return user;
};

export default useAuth;