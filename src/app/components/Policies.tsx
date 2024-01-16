import React from 'react'
import Link from 'next/link'
import { POLICIES } from '../../../constants'


export default function Policies() {
    return (
        <div className="flex flex-wrap w-full justify-center my-2 gap-5">
            {POLICIES.map((poli) => (
                <div key={poli.name} className='flex flex-nowrap items-center justify-center lg:flex-nowrap'>
                    <div className='md:flex-col flex'>
                        <Link href={poli.href} key={poli.name}>
                            <h3 className='text-base font-semibold underline text-gray-900 hover:text-green-400 hover:underline ;'>{poli.name}</h3>
                        </Link>
                    </div>
                </div>
            ))}</div>
    )
}