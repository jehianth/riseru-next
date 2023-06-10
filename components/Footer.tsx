'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const [isEmailHovered, setEmailHovered] = useState(false);
    const [isPhoneHovered, setPhoneHovered] = useState(false);
    const handleEmailMouseEnter = () => {
        setEmailHovered(true);
        setPhoneHovered(false);
    };
    const handleEmailMouseLeave = () => {
        setEmailHovered(false);
    };
    const handlePhoneMouseEnter = () => {
        setPhoneHovered(true);
        setEmailHovered(false);
    };
    const handlePhoneMouseLeave = () => {
        setPhoneHovered(false);
    };
    const [visitorCount, setVisitorCount] = useState(0);
    useEffect(() => {
        // Mendapatkan jumlah pengunjung dari localStorage
        const storedVisitorCount = localStorage.getItem("visitorCount");

        // Mengupdate jumlah pengunjung saat komponen dimuat
        const count = storedVisitorCount ? parseInt(storedVisitorCount) + 1 : 1;
        setVisitorCount(count);
    }, []);

    useEffect(() => {
        // Menyimpan jumlah pengunjung ke localStorage setiap kali visitorCount berubah
        localStorage.setItem("visitorCount", visitorCount.toString());
    }, [visitorCount]);
    return (
        <section className="bg-black flex flex-col items-center ">
            <div className='hidden w-full md:flex flex-row items-center justify-between px-28 py-10'>
                <div className='w-max'>
                    <Image src='/logo-footer.png' width={106} height={60} alt='Logo Riseru'/>
                    <h3 className='text-white text-lg font-bold'>Channel your hobbies by purchasing <br/>your favorite merchandise.</h3>
                    <h6 className='text-xs text-zinc-400 w-fit mt-4'>Riseru, 2023.</h6>
                </div>
                <div className='w-max'>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-col ml-4'>
                            <h5 className='text-white font-semibold'>Contact</h5>
                            <Link href='mailto:support@riseru.id' target='_blank' className='flex flex-row my-3 cursor-pointer' onMouseEnter={handleEmailMouseEnter} onMouseLeave={handleEmailMouseLeave}>
                                {isEmailHovered ? (
                                    <Image src='/email(1).png' width={16} height={16} alt=''/>
                                ) : (
                                    <Image src='/email.png' width={16} height={16} alt=''/>
                                )}
                                <h6 className='text-xs text-zinc-300 hover:text-orange-600 ml-2 w-fit'>support@riseru.id</h6>
                            </Link>
                            <Link href='https://wa.me/6285155433460' target='_blank' className='flex flex-row cursor-pointer' onMouseEnter={handlePhoneMouseEnter} onMouseLeave={handlePhoneMouseLeave}>
                                {isPhoneHovered ? (
                                    <Image src='/telephone(1).png' width={16} height={16} alt=''/>
                                ) : (
                                    <Image src='/telephone.png' width={16} height={16} alt=''/>
                                )}
                                <h6 className='text-xs text-zinc-300 hover:text-orange-600 ml-2 w-fit'>+62 851-5543-3460</h6>
                            </Link>          
                        </div>
                        <div className='flex flex-col ml-10'>
                            <h5 className='text-white font-semibold'>Support</h5>
                            <Link href='/support'>
                                <h6 className='text-xs text-zinc-400 my-3 w-fit hover:text-orange-600'>Feedback</h6>
                            </Link>
                            <Link href='/support'>
                                <h6 className='text-xs text-zinc-400 w-fit hover:text-orange-600'>Help Center (FAQ)</h6>
                            </Link>
                        </div>
                        <div className='flex flex-col ml-10'>
                            <h5 className='text-white font-semibold mb-[12px] pt-[28px]'>Legal</h5>
                            <Link href='/legal'>
                                <h6 className='text-xs text-zinc-400 w-fit hover:text-orange-600'>Term Of Service</h6>
                            </Link>
                            <Link href='/legal'>
                                <h6 className='text-xs text-zinc-400 pt-3 w-fit hover:text-orange-600'>Privacy Policy</h6>
                            </Link>
                            <Link href='/legal'>
                                <h6 className='text-xs text-zinc-400 pt-3 w-fit hover:text-orange-600'>Refund Policy</h6>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:hidden flex flex-col my-10 items-center'>
                <Image src='/logo-footer.png' width={106} height={60} alt='Logo Riseru'/>
                <h3 className='font-semibold text-center my-2 text-white'>Channel your hobbies by purchasing <br/>your favorite merchandise.</h3>
                <h6 className='text-xs text-zinc-400 w-fit'>Riseru, 2023.</h6>
                <h5 className='font-semibold mt-8 text-white'>Contact</h5>
                <Link href='mailto:support@riseru.id' target='_blank' className='flex flex-row my-3 cursor-pointer' onMouseEnter={handleEmailMouseEnter} onMouseLeave={handleEmailMouseLeave}>
                    {isEmailHovered ? (
                        <Image src='/email(1).png' width={16} height={16} alt=''/>
                    ) : (
                        <Image src='/email.png' width={16} height={16} alt=''/>
                    )}
                    <h6 className='text-xs text-zinc-300 hover:text-orange-600 ml-2 w-fit'>support@riseru.id</h6>
                </Link>
                <Link href='https://wa.me/6286187656453' target='_blank' className='flex flex-row cursor-pointer' onMouseEnter={handlePhoneMouseEnter} onMouseLeave={handlePhoneMouseLeave}>
                    {isPhoneHovered ? (
                        <Image src='/telephone(1).png' width={16} height={16} alt=''/>
                    ) : (
                        <Image src='/telephone.png' width={16} height={16} alt=''/>
                    )}
                    <h6 className='text-xs text-zinc-300 hover:text-orange-600 ml-2 w-fit'>+62 861-8765-6453</h6>
                </Link>
                <h5 className='font-semibold mt-8 text-white'>Support</h5>
                <Link href='/support'>
                    <h6 className='text-xs text-zinc-400 my-3 w-fit hover:text-orange-600'>Feedback</h6>
                </Link>
                <Link href='/support'>
                    <h6 className='text-xs text-zinc-400 w-fit hover:text-orange-600'>Help Center (FAQ)</h6>
                </Link>
                <h5 className='font-semibold mb-[12px] pt-[28px] text-white'>Legal</h5>
                <Link href='/legal'>
                    <h6 className='text-xs text-zinc-400 w-fit hover:text-orange-600'>Term Of Service</h6>
                </Link>
                <Link href='/legal'>
                    <h6 className='text-xs text-zinc-400 pt-3 w-fit hover:text-orange-600'>Privacy Policy</h6>
                </Link>
                <Link href='/legal'>
                    <h6 className='text-xs text-zinc-400 pt-3 w-fit hover:text-orange-600'>Refund Policy</h6>
                </Link>
            </div>
            <hr className='px-48 md:px-[90vh] border-zinc-500'/>
            <h6 className='text-xs text-zinc-400 pt-5 w-fit'>© 2023 Riseru. All rights reserved.</h6>
            <h6 className='text-xs text-zinc-400 pt-1 pb-5 w-fit'>Visitor Count : <p className="inline-flex p-1 w-fit bg-zinc-700 rounded-sm">{visitorCount}</p></h6>
        </section>
    )
}

export default Footer