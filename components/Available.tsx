import React from 'react'
import Image from "next/image"
import Link from "next/link"

const Available = () => {
    return (
        <section id="available" className="bg-zinc-100 w-full flex flex-col items-center justify-center">
            <h1 className="text-center text-black text-3xl font-semibold mt-10 border rounded-full py-4 px-8">Available On</h1>
            <div className='grid grid-rows-3 md:grid-cols-3 mt-10 mb-20 gap-5'>
                <Link href='https://www.instagram.com/riseru_hobbyshop/'>
                    <Image src='/instagram.png' width={200} height={108.82} alt='Instagram Riseru' className='border-2 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg'/>
                </Link>
                <Link href='https://www.tokopedia.com/riseruhobbyshop'>
                    <Image src='/tokopedia.png' width={200} height={108.82} alt='Instagram Riseru' className='border-2 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg'/>
                </Link>
                <Link href='https://www.shopee.co.id/'>
                    <Image src='/shopee.png' width={200} height={108.82} alt='Instagram Riseru' className='border-2 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg'/>
                </Link>
            </div>
        </section>
    );
}

export default Available