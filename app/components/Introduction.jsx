import React from 'react';
import Image from 'next/image';

function Introduction() {
    return (
        <div className="relative bg-[#FDF5F3] py-16  lg:py-32 w-full flex lg:flex-row flex-col justify-center items-center lg:px-16">
      {/* Left Image with Circle */}
      <div className="relative mb-8 lg:mb-0">
      <Image 
                    src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/jar-of-organic-skin-care-mandarin-gel-in-sunlight-XJEHKYG.jpg"
                    alt="Left Image"
                    width={400}
                    height={400}
                    objectFit="cover"
                    className="rounded-t-full w-[300px] md:w-[200px] md:h-[300px] lg:h-[400px] lg:w-[400px]"
                />
        <div className="absolute w-[200px] h-[100px] bg-[#567C49] -rotate-45  rounded-t-full top-[-20px] left-[-45px]" />
      </div>

      {/* Text Content */}
      <div className="text-center mx-4 w-[80%] lg:w-[40%] mb-8 lg:mb-0">
        <h3 className="text-lg text-[#023A15]">Alive every moment</h3>
        <h1 className="text-5xl font-serif text-[#023A15] mt-2">
          Beauty is all about 
        </h1>
        
        <div className="relative flex justify-center items-center">
                <Image
                                width={180}
                                height={100}
                                src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/Asset-6_2.png"
                                alt="Description of the image"
                                className="absolute top-4 h-auto"
                            />
        <span className="text-5xl font-serif text-[#023A15] mt-2">you.</span>
        </div>
        <p className="text-[#567C49] text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam.
        </p>
      </div>

      {/* Right Image with Circle */}
      <div className="relative mb-8 lg:mb-0">
      <Image 
                    src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/stylish-sensual-woman-holding-protea-flower-at-fac-4CXRJ23.jpg"
                    alt="Right Image"
                    width={400}
                    height={400}
                    objectFit="contain"
                    className="rounded-t-full w-[300px] md:w-[200px] md:h-[300px] lg:h-[400px] lg:w-[400px]"
                />
    <div className="w-[200px] h-[100px] -rotate-45 bg-[#567C49] rounded-b-full absolute bottom-[-40px] right-[-60px]"></div>
      </div>
    </div>
    );
}

export default Introduction;
