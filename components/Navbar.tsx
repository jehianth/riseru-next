'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null); // Create a ref for the header

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [navbar]);

    const handleClickOutside = (event: MouseEvent) => {
        if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
            setNavbar(false);
        }
    };
    const menus = [
        { href: "/", text: "Home" },
        { href: "https://www.tokopedia.com/riseruhobbyshop/product", text: "Catalog" },
        { href: "#overview", text: "Riseru Goodies" },
        { href: "#whychooseus", text: "Why Choose Us?" },
        { href: "#aboutus", text: "About Us" },
        { href: "#available", text: "Available On" },
    ];
    return (
        <header ref={headerRef} className="sticky top-0 z-30 w-full bg-white shadow text-black text-sm">
            <div className="flex flex-wrap flex-row justify-between md:px-10 items-center">
                <Link href='/'>
                    <Image
                        src='/logo.svg'
                        width={175}
                        height={63.11}
                        alt='Logo Riseru'
                    />
                </Link>
                <div className='md:hidden mt-2'>
                    <button onClick={() => setNavbar(!navbar)}>
                        {navbar ? (
                            <Image src='/close.png' width={37} height={37} alt='' className='mr-4'/>
                        ) : (
                            <Image src='/hamburger.png' width={30} height={30} alt='' className='mr-5'/>
                        )}
                    </button>
                </div>
                <nav className="hidden md:py-1 md:block ml-auto">
                    <ul className="flex">
                        {menus.map((menu, index) => (
                            <li key={index}>
                                <Link href={menu.href} className={`mr-3 hover:text-orange-600 ${index !== 0 ? "pl-3 border-l border-gray-400" : ""}`}>
                                    {menu.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div>
                    <div className={`md:hidden md:pb-0 md:mt-0 ${navbar ? 'md:p-0' : 'hidden'}`}>
                        <ul className="md:h-auto md:flex">
                            {menus.map((menu, index) => (
                                <li key={index} className=' py-3 md:px-6 text-center border-t-[1.5px] md:border-b-0  hover:bg-orange-600  md:hover:text-orange-400 md:hover:bg-transparent'>
                                    <Link href={menu.href} onClick={() => setNavbar(!navbar)}>
                                        {menu.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
        </header>
    )
}

export default Navbar