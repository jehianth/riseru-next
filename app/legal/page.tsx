/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from "next/image";

export default function Legal() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-orange-50 text-black text-center py-10 md:px-60">
      <h1 className="text-2xl font-bold pr-2">Legal</h1>
      <div className='md:flex md:flex-row'>
        <div>
          <div className='flex flex-row mt-10 justify-center md:justify-start md:pl-5'>
            <h3 className="text-lg font-medium">Term Of Service</h3>
            <Image src="/right-arrow.png" width={40} height={1} alt="" className='-translate-y-1'/>
          </div>
          <p className='font-bold block md:pr-80'>Agreement to Terms</p>
          <p className='px-5 pt-2 text-justify md:w-[525px]'>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and PT. Merchan Go Riseru ("Company","we","us", or"our"), concerning your access to and use of the as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). We are registered in Indonesia and have our registered office at Visit Riseru, Purwokerto, Central Java 53161. You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
        </div>
        <div>
          <div className='flex flex-row mt-10 justify-center md:justify-start md:pl-5'>
          <h3 className="text-lg font-medium">Privacy Policy</h3>
          <Image src="/right-arrow.png" width={40} height={1} alt="" className='-translate-y-1'/>
          </div>
          <p className='px-5 text-justify'>User information is collected by Riseru for the purpose of enabling processes and making the process of using the site on Riseru smoother. Such actions have obtained the User's consent at the time of information collection.</p>
          <div className='flex flex-row mt-10 justify-center md:justify-start md:pl-5'>
          <h3 className="text-lg font-medium">Refund Policy</h3>
          <Image src="/right-arrow.png" width={40} height={1} alt="" className='-translate-y-1'/>
          </div>
          <p className='px-5 text-justify'>Riseru endeavors to deliver the goods at the address you provide when ordering the goods and within the time specified after you place your order (and confirm your order), but Riseru cannot promise the exact date the goods will arrive after you place your order or confirm your order.</p>
        </div>
      </div>
    </main>
  );
}
