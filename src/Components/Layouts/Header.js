"use client"
import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import { navItems } from '@/constant'
import Link from 'next/link'
import styles from './Layout.module.scss'
import { GiHamburgerMenu } from "react-icons/gi"
import Menu from './Menu'
const Header = () => {
    const [show, setShow] = useState(false);

    return (
        <div className={` ${styles.header} w-100`}>
            <header className="flex justify-between items-center p-4 lg:max-w-[1200px] mx-auto">
                <Image className="hidden lg:block" src="" alt='logo' />
                <button className="bg-transparent border-none outline-none block lg:hidden" onClick={()=>setShow(prev => !prev)}><GiHamburgerMenu/></button>
                <nav className="hidden lg:block">
                    {navItems.header?.map((e) =>
                        <Link className="mx-2 hover:text-yellow-500 duration-200" key={e.path} href={e.path}>{e.label}</Link>
                    )}
                </nav>
                <button className="text-white bg-black border border-yellow-500 py-2 px-4 rounded hover:bg-yellow-500 hover:text-black duration-200">Get Started</button>
            </header>
            <Menu show={show} onHide={setShow} />
        </div>
    )
}

export default Header