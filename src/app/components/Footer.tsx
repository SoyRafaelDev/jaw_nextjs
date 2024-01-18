'use client';
import React from 'react'
import Newsletter from './Newsletter'
import Policies from './Policies'
import Rrss from './Rrss'


export default function Footer() {
    return (
        <div className='border-2'>
        <div className="flex flex-col items-center mb-3">
            <Newsletter />
            <Policies />
            <Rrss />
        </div>
        </div>
    )
}