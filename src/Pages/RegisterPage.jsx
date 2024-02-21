import React, { useState, useEffect } from 'react';
import LoginForm from '../Components/RegistrationForm/Form'
import { useMemo } from 'react';

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
            location.href = '/';
        }
    };

    const formSubmit = useMemo(() => {
        return <LoginForm onSubmit={handleFormSubmit} />;
    }, []);

    if (submit) {
        return null;
    }

    return (
        <div>
            <div className="bg-gradient-to-br from-viaGray via-viaGray to-viaGray h-[100vh]">
                <div className="pl-[500px] pr-[500px] pt-[170px]">
                    <fieldset className='border-[3px] border-yellow pb-[60px] pt-[60px] bg-gradient-to-br from-viaGray via-fromGray to-viaGray'>
                        <legend className='ml-[90px] text-white text-[20px] font-bold'>Log In</legend>
                        {formSubmit}
                    </fieldset>
                </div>
            </div>
        </div>
    );
}