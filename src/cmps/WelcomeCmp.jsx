import React from 'react'
import mainLogo from'../Assets/logo_dta7.png';
import 'animate.css';


export default function WelcomeCmp() {
  return (
    <div className='animate__animated animate__fadeIn'>
      <img  src={mainLogo}  alt="Hi there :)" className="logo animate__animated animate__slideInDown"/>
    </div>
    )
}
