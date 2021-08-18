import React from 'react'

import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/userSlice'

function Login() {

    const dispatch = useDispatch();
    
    return (
        <div>
            <button 
                onClick={() => {
                    dispatch(login({ name: "production", age: 69, email: "production@test.com" }))
                }}
            >
            Login
        </button>

        <button onClick={() => {
            dispatch(logout())
        }}>
            LogOut
        </button>
        </div>
    )
}

export default Login
