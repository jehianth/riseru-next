import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    const menus = [
        { href: "/", text: "Home" },
        { href: "/catalog", text: "Catalog" },
        { href: "#overview", text: "Overview" },
        { href: "#whychooseus", text: "Why Choose Us?" },
        { href: "#aboutus", text: "About Us" },
        { href: "#available", text: "Available On" },
    ];
    return (
        <header className="sticky top-0 z-30 w-full bg-white bg-opacity-95 shadow text-black text-sm">
            <div className="flex flex-wrap flex-row justify-between px-10 items-center">
                <Link href='/'>
                    <Image
                        src='/logo.svg'
                        width={175}
                        height={63.11}
                        alt='Logo Riseru'
                    />
                </Link>
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
        </header>
    )
}

export default Navbar