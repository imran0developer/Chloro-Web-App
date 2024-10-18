import React, { useState } from 'react'
import { BsArrowRight } from "react-icons/bs";
import AutomaticImageCarousel from './HeroCoroursel';
import Image from 'next/image';

function HeroSection(PrimaryFont, SecondaryFont) {
    const [images] = useState([
        '/demo.jpeg',
        '/demo.jpeg',
        '/demo.jpeg',
    ]);

    const [hover, setHover] = useState(false)


    return (
        <main className="flex-1 lg:flex pt-16 pb-32 lg:pl-60 lg:pr-32 overflow-hidden relative bg-[#023A15] lg:h-[800px]">
            <div className={`text-4xl lg:text-6xl pt-20 font-medium pl-8 lg:pl-0`}>
                <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                <div className="relative items-end">
                <Image
                                height={100}
                                width={380}
                                src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/Asset-6_2.png"
                                alt="Description of the image"
                                className="absolute lg:left-12 right-24 md:right-4 lg:right-22 bottom-15 lg:bottom-20 w-[200px] lg:w-[400px] lg:h-auto "
                            />
                <h1 className='leading-snug'>
                        A whole <span className="italic hover:text-black transition-colors duration-300"> <span className={hover ? 'text-black font-light' : 'text-white'}>new world</span></span>, a whole
                    </h1>
                          
                        </div>
        
                    <h1>
                        <div className="flex flex-col items-start">
                            <span className={`italic transition-colors duration-300 ${hover ? "text-black font-light" : "text-white"}`}>new look</span>
                            <Image
                                height={12}
                                width={300}
                                src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/Asset-4_2.png"
                                alt="Description of the image"
                                className="w-[160px] md:w-[200px] lg:max-w-full object-contain"
                            />
                        </div>
                    </h1>
                </div>

                <div>
                    <div className={`text-base font-normal text-white ${SecondaryFont.className} mx-auto mt-16 leading-5 whitespace-pre-line flex flex-col gap-3`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/></p>
                        <p>Nobis libero officia quidem nihil quo ab aliquam alias </p>
                        <p>consectetur aut cum!</p>
                         
                    </div>

                    <button className="px-5 py-2 rounded-full text-lg bg-zinc-50 text-black flex gap-3 items-center mt-10">
                        <h1>Discover More</h1>
                        <span><BsArrowRight /></span>
                    </button>
                </div>
            </div>

            <div className="mt-16 ml-8 lg:ml-16">
                {/* Background Circles */}
                <div className="w-64 h-64 absolute top-[75%] left-[45%] bg-[#567C49] clip-custom-circle rotate-180" style={{ clipPath: "circle(50% at 50% 100%)" }}></div>
                <div className="mt-4 w-64 h-64 absolute top-[90%] -right-6 bg-[#567C49] clip-custom-circle rotate-180" style={{ clipPath: "circle(50% at 50% 100%)" }}></div>

                {/* Carousel */}
                <AutomaticImageCarousel images={images} />

            </div>
        </main>
    )
}

export default HeroSection