import React from 'react'
import logoWhite from '../../assets/logo-white.png'

const Logo = () => {
    return (
        <div className='relative z-0'>
            <div className="w-10 absolute top-[2vw] left-7">
                <img src={logoWhite} alt="DivFlow" className="w-full h-auto" />
            </div>
        </div>
    )
}

export default Logo
