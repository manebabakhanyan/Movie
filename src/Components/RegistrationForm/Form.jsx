import React, { useState } from 'react';

export default function LoginForm({ onSubmit }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(login, password);
    };

    return (
        <form onSubmit={handleFormSubmit} className='flex flex-col'>
            <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Login" className='mb-[40px] pl-[20px] bg-gray outline-none text-white' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className='bg-gray mb-[40px] pl-[20px] outline-none text-white' />
            <button type="submit" className='text-white'>Register</button>
        </form>
    );
}
