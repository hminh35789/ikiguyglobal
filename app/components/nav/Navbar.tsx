import React from 'react'
import Container from '../Container';
import Link from 'next/link';
import { Redressed } from 'next/font/google';
import CartCount from './CartCount';

const redressed = Redressed({subsets: ['latin'], weight: ['400']})
function Navbar() {
  return (
    <div
    className='
    sticky
    top-0
    w-full
    bg-yellow-100
    z-30
    shadow-sm
    '
    >
        <div className='py-4 border-b-[1px]'>
          <Container>
            <div
            className='
            flex
            items-center
            justify-between
            gap-3
            md:gap-0
            '
            >
              <Link href='/' className={`${redressed.className} font-bold text-2xl`}>ikiguy</Link>
              <div className='hidden md:block'>Search</div>
              <div className='flex items-center gap-8 md:gap-12'>
                <CartCount />
                <div>UserMenu</div>
              </div>
            </div>
          </Container>
        </div>
    </div>
  )
}
  
export default Navbar;