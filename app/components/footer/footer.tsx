import React from 'react'
import Container from '../Container';
import FooterList from './footerList';
import Link from 'next/link';

function Footer() {
  return (
    <footer className='bg-sky-500 text-slate-200 text-sm mt-16'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 xl:flex justify-between pt-16 pb-8 '>
            <FooterList>
              <h3 className='text-base font-bold mb-2'>MAYWEHELPYOU?</h3>
              <Link href='/'>Contact Us</Link>
              <Link href='/'>My Order</Link>
              <Link href='/'>FAQs</Link>
              <Link href='/'>Email Unsubscribe</Link>
              <Link href='/'>Sitemap</Link>
            </FooterList>
            <FooterList>
              <h3 className='text-base font-bold mb-2'>THE COMPANY</h3>
              <Link href='/'>About Ikiguy</Link>
              <Link href='/'>Ikiguy Equilibrium</Link>
              <Link href='/'>Code of Ethics</Link>
              <Link href='/'>Legal</Link>
              <Link href='/'>Privacy & Cookie Policy</Link>
              <Link href='/'>COOKIES SETTINGS</Link>
              <Link href='/'>Corporate Information</Link>
            </FooterList>
            <div className='w-full md:w-1/3 mb-6 md:mb-0'>
              <h3 className='text-base font-bold mb-2'>STORE LOCATOR</h3>
              <h3 className='text-base font-bold mb-2'>SIGN UP FOR IKIGUY UPDATES</h3>
              <p>&copy; {new Date().getFullYear()} Ikiguy. All rights reserved</p>
            </div>
            <FooterList>
              <h3 className='text-base font-bold mb-2'>THE COMPANY</h3>
              <Link href='/'>About Ikiguy</Link>
              <Link href='/'>Ikiguy Equilibrium</Link>
              <Link href='/'>Code of Ethics</Link>
              <Link href='/'>Legal</Link>
            </FooterList>
          </div>
          <h1 className='text-lg tracking-[.99em] text-center p-20 md:text-8xl md:p-8'>IKIGUY</h1>
        </Container>
    </footer>
  )
}

export default Footer;