
import Link from 'next/link'
import Image from 'next/image'
import MaxWidthWrapper from './MaxWidhtWrapper'
import { NAV_LINKS } from '../../../constants'
import NavItems from './NavItems'

const Navbar = () => {
  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
        <nav className='relative bg-white'>
            <MaxWidthWrapper>
                <div className='border-b border-gray-200'>
                    <div className='flex h-16 items-center'>
                        {/* TODO: Mobile nav */}

                        <div className='ml-4 flex lg:ml-0'>
                            <Link href='/'>
                                <ul className='hidden h-full gap-12 lg:flex'>
                                    {NAV_LINKS.map((link) => (
                                        <Link href={link.href} key={link.key}>
                                            {link.label}
                                        </Link>
                                    ))}
                                </ul>
                            </Link>
                        </div>

                        <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                            <NavItems />
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    </div>
  )
}

export default Navbar