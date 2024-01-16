import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MEDIA_LINKS } from '../../../constants'

export default function Rrss() {
    return (

            <div className='flex flex-wrap items-center justify-center w-full  gap-12 my-2'>
                {MEDIA_LINKS[0].featured.map((_link) => (
                    <Link href={_link.href} key={_link.name}>
                        <Image
                            src={_link.imageSrc}
                            alt={_link.name}
                            height={MEDIA_LINKS[0].imageSize.height}
                            width={MEDIA_LINKS[0].imageSize.width}
                            className='hover:filter hover:opacity-30'
                        />
                    </Link>
                ))}
            </div>
    )
}
