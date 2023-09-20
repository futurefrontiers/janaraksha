import React from 'react'

export const Login = () => {
    return (
        <div className="login">
            <div>
                <label htmlFor="username">Username</label>
                <input type="email" name="username" id="username" placeholder='Enter your username' />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Enter password' />
            </div>
            <div>
                <button className='btn btn-primary'>Login</button>
            </div>
        </div>
    )
}