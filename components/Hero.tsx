import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    const sectionStyle = {
        backgroundImage: `url('/hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "130vh",
    };
    return (
        <section style={sectionStyle}>
            <h1 className="md:text-6xl text-6xl text-center font-bold mt-20 text-white">Elegant, Classy, Futuristic.</h1>
            <h6 className="text-center px-5 md:px-0 md:mt-8 mt-3 md:text-base text-sm text-white">Introducing Kalavinka, a metal build figure that advanced imagination and transformation features to <br className="hidden md:block"/>please you with the most weariness parts of a figurine.</h6>
            <div className="flex flex-col items-center justify-center mt-5">
                <Link href='https://www.tokopedia.com/riseruhobbyshop/bird-of-dawn-kalavinka-figure-by-big-fire-bird?extParam=whid%3D8295116'>
                    <button className='flex items-center bg-orange-600 text-lg text-white font-medium border border-orange-400 py-2 pl-8 pr-7 hover:drop-shadow-2xl hover:grayscale rounded-full'>
                        Buy Now
                        <Image src='/arrow.png' width={10} height={10} alt="" className="ml-2 scale-150 pt-[1px]" />
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
