'use client'

import {
    Link,
    animateScroll as scroll
} from 'react-scroll'
import Image from 'next/image'
import React from 'react'

import Nav from '@/components/nav'
import MobileNav from '@/components/mobileNav'


const Header = () => {
  return (
    <header className="fixed z-50 w-full bg-primary py-6 xl:py-8">
        <div className="cotainer mx-auto flex item-center justify-between">
            {/* logo */}

            <Link to="/" spy={true} smooth={true} className="cursor-pointer">
            <Image src="/logo.svg" height={54.53} width={41.35} alt="logo" />

            </Link>


            {/* desktop nav */}

            <div className="hidden items-center gap-x-8 xl:flex">
                <Nav/>

                <Link to="/" spy={true} smooth={true} className="text-md rounded-full bg-blue px-6 py-2 font-medium text-white transition-all hover:bg-blue/80">
           Hire Me

            </Link>
            </div>

            {/* mobile nav */}

            <div className='z-50 x1:hidden'>
                <MobileNav/>
{/* modile view */}
            </div>


        </div>
    </header>
  )
}

export default Header
