import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Overview = () => {
    const cardData = [
        {
            link: 'https://www.tokopedia.com/riseruhobbyshop/bird-of-dawn-kalavinka-figure-by-big-fire-bird',
            imageSrc: '/kalavinka.jpg',
            category: 'Mecha',
        },
        {
            link: 'https://www.tokopedia.com/riseruhobbyshop/komik-fate-grand-order-mortalis-realta-vol-1-original-m-c-bekas?extParam=whid%3D8295116',
            imageSrc: '/fgo.jpg',
            category: 'Manga',
        },
        {
            link: 'https://www.tokopedia.com/riseruhobbyshop/komik-komi-sulit-berkomunikasi-original-elex-vol-1-4-bekas',
            imageSrc: '/komi.jpg',
            category: 'Manga',
        },
        {
            link: 'https://www.tokopedia.com/riseruhobbyshop/kartu-pokemon-tcg-indonesia-hisuain-goodra-vstar-rrr-057-071-s10a',
            imageSrc: '/pokemon.png',
            category: 'Card',
        },
    ];
    return (
        <section id='overview' className='bg-white w-full flex flex-col items-center justify-center'>
            <h1 className='text-orange-600 text-center text-3xl md:text-4xl font-bold mt-10'>Riseru Goodies</h1>
            <h5 className='text-black text-center text-lg md:text-xl font-semibold'>For You!</h5>
            <Image src='/logo-base.png' width={174} height={109} alt='' className='hidden md:block -translate-y-20 -translate-x-[650px]'/>
            <Image src='/logo-base.png' width={81} height={51} alt='' className='md:hidden -translate-y-14 -rotate-12 -translate-x-44'/>
            <div className='grid md:-mt-14 mb-8 md:grid-cols-4 md:gap-6'>
                {cardData.map((card, index) => (
                    <div key={index} className='my-3 md:my-0'>
                        <Image src={card.imageSrc} width={296} height={344} alt='' className='rounded-3xl border-8 border-black border-opacity-5'/>
                        <p className='text-zinc-500 text-center text-lg pt-2 pb-6'>Introducing our Product from<br/>{card.category} Category</p>
                        <Link href={card.link} target='_blank'>
                            <button className='py-2 px-6 font-semibold mb-14 md:mb-0 text-orange-600 border-2 border-orange-600 rounded-full ml-20 transform transition duration-500 hover:scale-105 hover:text-white hover:bg-orange-600'>
                                Order Now!
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
            <Link href='https://www.tokopedia.com/riseruhobbyshop/product'>
                <button className='py-2 px-6 -mb-5 -translate-y-14 md:-translate-y-0 text-sm text-orange-600 border-2 border-orange-600 rounded-full transform transition duration-500 hover:scale-105 hover:text-white hover:bg-orange-600'>
                    Want to see more? Check our Store!
                </button>
            </Link>
            <Image src='/cat.png' width={94} height={94} alt='' className='hidden md:block -translate-y-10 -translate-x-48'/>
            <Image src='/cat.png' width={80} height={80} alt='' className='md:hidden -translate-y-20 -translate-x-44 -mb-14'/>
        </section>
    )
}

export default Overview