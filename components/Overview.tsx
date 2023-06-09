import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Overview = () => {
    const cardData = [
        {
            link: 'https://www.tokopedia.com/riseruhobbyshop/komik-fate-grand-order-mortalis-realta-vol-1-original-m-c-bekas?extParam=whid%3D8295116',
            imageSrc: '/card1.png',
        },
        {
            link: 'https://www.tokopedia.com/riseruhobbyshop/kartu-pokemon-tcg-indonesia-hisuain-goodra-vstar-rrr-057-071-s10a',
            imageSrc: '/card2.png',
        },
        {
            link: 'https://www.tokopedia.com/riseruhobbyshop/komik-sgc-survival-game-club-vol-7-13-end-original-elex-bekas?extParam=whid%3D8295116',
            imageSrc: '/card3.png',
        },
        {
            link: 'https://www.tokopedia.com/riseruhobbyshop/bird-of-dawn-kalavinka-figure-by-big-fire-bird?extParam=whid%3D8295116',
            imageSrc: '/card4.png',
        },
        {
            link: 'https://www.tokopedia.com/riseruhobbyshop/komik-komi-sulit-berkomunikasi-original-elex-vol-1-4-bekas',
            imageSrc: '/card5.png',
        },
        {
            link: 'https://www.tokopedia.com/riseruhobbyshop/komik-ito-junji-best-of-best-short-story-collection-original-m-c-bekas?extParam=whid%3D8295116',
            imageSrc: '/card6.png',
        },
    ];
    return (
        <section id='overview' className='bg-white w-full flex flex-col items-center justify-center'>
            <h5 className='text-orange-600 text-center text-lg font-medium mt-10'>Riseru Goodies</h5>
            <h1 className='text-black text-center text-3xl font-semibold'>For Your Happines!</h1>
            <div className='grid my-10 md:grid-cols-3 md:gap-6'>
                {cardData.map((card, index) => (
                    <div key={index} className='my-3 md:my-0 transform transition duration-500 hover:scale-105 hover:drop-shadow-2xl'>
                        <Link href={card.link} target='_blank'>
                            <Image src={card.imageSrc} width={296} height={344} alt='' className='rounded-3xl border-8 border-black border-opacity-5'></Image>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Overview