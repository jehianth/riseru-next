import React from 'react'
import Image from 'next/image'

const Aboutus = () => {
    const benefit = [
        {
            name: 'Products',
            desc: 'We have diversity of product, Looking for Figma? or Action Figure? We got it for you and you only!',
        },
        {
            name: 'Quality Product',
            desc: 'Our product is original and at the best condition! just like you!',
        },
        {
            name: 'Solid Packaging',
            desc: 'Worry not, your product will be in good condition when arrived.',
        },
        {
            name: 'Payment',
            desc: 'We make it easy for you to make payments, After all who likes hassle?',
        },
    ];
    return (
        <section id='aboutus' className='bg-white w-full flex flex-col items-center justify-center'>
            <h1 className='text-center text-orange-600 text-3xl font-semibold mt-10 border border-orange-600 rounded-full py-4 px-8'>About Us</h1>
            <div className='bg-white m-10 w-96 h-[850px] md:w-[800px] md:h-[500px] rounded-xl flex flex-col md:flex-row items-center justify-center'>
                <Image src='/benefit.svg' width={280} height={447} alt='' className='md:ml-10 md:mr-20 mb-4'></Image>
                <div className='grid grid-row md:gap-4'>
                {benefit.map((poin, index) => (
                    <div key={index} className='mr-10 ml-4 md:ml-0'>
                        <div className='flex items-center'>
                            <Image src='/check.svg' width={30} height={30} alt=''></Image>
                            <h6 className='text-black font-semibold text-lg ml-4'>{poin.name}</h6>
                        </div>
                        <h6 className='text-zinc-600 ml-[46px] text-justify'>{poin.desc}</h6>
                    </div>
                ))}
            </div>
            </div>
            {/*  */}
        </section>
    )
}

export default Aboutus