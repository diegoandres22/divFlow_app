import React from 'react'
import Brand from './Brand'

const Logo = () => {
    return (
        <div className='relative z-0'>
            <div className="absolute top-[2vw] left-7 bg-[#F5F0EA] rounded-full px-4 py-1.5">
                <Brand className="text-[#1A120D] text-sm font-bold tracking-tight" />
            </div>
        </div>
    )
}

export default Logo
