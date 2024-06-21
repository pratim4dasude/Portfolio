'use client'

import {Menu} from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

import {Sheet , SheetContent,SheetTrigger} from '@/components/ui/sheet'

export const menu =[
    {
    name: 'services',
    href:'#services'
},
{
    name: 'work',
    href:'/#work'
},
{
    name: 'FAQ',
    href:'/#FAQ'
},
{
    name: 'Contact',
    href:'/#Contact'
},
]


import React from 'react'

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger className="flex item-center">
            <Menu className='size-8 text-blue' />
        </SheetTrigger>

         <SheetContent>
            <div className='md-40 mt-32 flex item-center justify-center gap-8'>
                <Link href='/'>
                 <Image src="/logo.svg" height={60.53} width={47.35} alt="logo" /> 

                </Link>
            </div>
            <nav className='mt-8 flex flex-col items-center justify-center gap-8'>
                {menu.map((item,index)=>(
                    <Link href={item.href} key={index} className='text-lg font-medium capitalize'>
                        <span className='pb-2 transition-all hover:border-b-2 hover:border-blue hover:text-blue'>{item.name}</span>
                    </Link>
                ))}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
