import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ handleLogin }) {
    const navigate = useNavigate()
    const onLogin = () => {
        handleLogin()
        navigate('/');
    }
    return (
        <div>
            <button onClick={onLogin}>Login</button>

        </div>
    )
}

export default Login
