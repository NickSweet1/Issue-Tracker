"use client"
import React from 'react'
import Link from 'next/link'
import { PiBugBeetleBold } from "react-icons/pi";
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname();

    const link = [ //setting like array to our link paths and labels to avoid dupilcate code
        { label: 'Dashboard', href: '/'},
        { label: 'Issues', href: '/issues/list'}
    ];


  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><PiBugBeetleBold /></Link>
        <ul className='flex space-x-6'>
            {/* rendering the navbar compents by mapping through the link array */}
            {link.map(link =>
                <Link key={link.href} 
                // using classnames library to create a function that returns a string of the classes to render 
                className={classnames({
                    'text-zinc-900': link.href === currentPath,
                    'text-zinc-500': link.href !== currentPath,
                    'hover:text-zinc-900 transition-colors': true,
                })} 
                href={link.href}>
                    {link.label}
                </Link>
                )}
        </ul>
    </nav>
  )
}

export default NavBar