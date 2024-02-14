import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Footer/Logo (7).png'
export default function Footer() {
    return (
        <div className='bg-yellow p-[50px] mt-[50px] px-[150px] flex justify-between items-center md550:flex-col md600:flex-row'>
            <div className='flex gap-[20px] w-[30px] md550:mr-[100px] mb-[10px] md600:mb-[-10px]'>
                <Link to="https://www.instagram.com/"><i className="fa-brands fa-instagram text-[30px] text-darkGrey font-bold"></i></Link>
                <Link to="https://www.facebook.com/"><i className="fa-brands fa-facebook text-[30px] text-darkGrey"></i></Link>
                <Link to="https://web.telegram.org/k/"><i className="fa-brands fa-telegram text-[30px] text-darkGrey"></i></Link>

            </div>
            <Link to="/">
                <div>
                    <img src={Logo} alt="logo" />
                </div>
            </Link>
        </div>
    )
}
