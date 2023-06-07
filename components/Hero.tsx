import React from "react";
import Link from "next/link";

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
            <h1 className="md:text-6xl text-5xl text-center font-bold mt-20">Elegant, Classy, Futuristic.</h1>
            <h6 className="text-center md:mt-8 mt-3 md:text-base text-xs">Introducing Kalavinka, a metal build figure that advanced imagination and transformation features to <br className="hidden md:inline" />please you with the most weariness parts of a figurine.</h6>
            <div className="flex flex-col items-center justify-center mt-5">
                <Link href='/'>
                    <button className='bg-orange-600 text-white border border-orange-600 py-1 px-3 hover:drop-shadow-2xl hover:grayscale rounded-xl'>
                        Buy Now
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
