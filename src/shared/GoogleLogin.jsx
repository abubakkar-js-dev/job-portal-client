import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const {setUser,loginWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state;

    const handleGoogleLogin = ()=>{
        loginWithGoogle()
        .then(result=>{
            setUser(result.user);
            navigate(from || '/');
        })
        .catch(err=>{
            console.log(err.message);
        })
    }

    return (
        <div className='mx-auto'>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className='btn'>Login With Google</button>
        </div>
    );
};

export default GoogleLogin;