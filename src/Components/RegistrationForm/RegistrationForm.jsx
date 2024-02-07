import React, { useState, useEffect } from 'react';
import LoginForm from './Form';

export default function RegisterPage() {
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('submit')) {
            setSubmit(true);
        }
    }, []);

    const handleFormSubmit = (login, password) => {
        const log = /^[^@\s\t\r\n]+@[^@\s\t\r\n]+\.[^@\s\t\r\n]/;
        const pas = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*-]).{8,}$/;
        if (login.match(log) && password.match(pas)) {
            localStorage.setItem('login', login);
            localStorage.setItem('password', password);
            setSubmit(true);
            localStorage.setItem('submit', 'true');
        }
    };

    if (submit) {
        return null;
    }

    return (
        <div>
            <div className="bg-darkGray h-[100vh]">
                <div className="pl-[500px] pr-[500px] pt-[170px]">
                    <fieldset className='border border-white pb-[60px] pt-[60px] shadow-xl shadow-white bg-gray'>
                        <legend className='ml-[90px] text-white text-[20px] font-bold'>Log In</legend>
                        <LoginForm onSubmit={handleFormSubmit} />
                    </fieldset>
                </div>
            </div>
        </div>
    );
}
