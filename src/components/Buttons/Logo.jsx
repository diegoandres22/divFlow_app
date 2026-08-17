import React from 'react'
import Brand from './Brand'

const Logo = () => {
    return (
        <div className='relative z-0'>
            <div className="absolute top-4 left-4 lg:top-[2vw] lg:left-7 bg-cream rounded-full px-4 py-1.5">
                <Brand className="text-surface text-sm font-bold tracking-tight" />
            </div>
        </div>
    )
}

export default Logo
