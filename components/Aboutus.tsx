/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

const Aboutus = () => {
    return (
        <section id='aboutus' className='bg-white w-full flex flex-col items-center justify-center'>
            <h1 className='text-center text-orange-600 text-3xl font-semibold mt-10 border border-orange-600 rounded-full py-4 px-8'>About Us</h1>
            <div className='bg-white border shadow-md shadow-orange-600 my-10 mx-4 md:m-10 h-[920px] md:w-[1000px] md:h-[500px] rounded-xl flex flex-col md:flex-row items-center justify-center'>
                <Image src='/about.svg' width={280} height={447} alt='' className='md:hidden md:ml-10 md:mr-20 mb-4'></Image>
                <div>
                    <div className='mx-6 md:ml-28'>
                        <div className='flex items-center'>
                            <h6 className='text-black font-semibold text-xl ml-28 md:ml-[100px] md:mb-4'>Riseru Hobby Shop</h6>
                        </div>
                        <h6 className='text-zinc-600 text-justify mt-3 md:mt-0'>At Riseru Hobby Shop, we are passionate about bringing joy and excitement to the world of hobbies. Whether you're a seasoned collector or a curious beginner, we are here to provide you with a wide range of quality products and exceptional customer service. <br className='mb-3'/>We prioritize your satisfaction. Our user-friendly website offers convenient browsing and ordering, while secure and diverse payment options and reliable packaging to ensure your purchases arrive in excellent condition. Experience seamless and enjoyable shopping from the comfort of your own home.
                        </h6>
                    </div>
            </div>
            <Image src='/about.svg' width={280} height={447} alt='' className='hidden md:block md:ml-20 md:mr-28 mb-4'></Image>
            </div>
            {/*  */}
        </section>
    )
}

export default Aboutus