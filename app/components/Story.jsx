import Image from 'next/image';
import React from 'react';


const Story = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#FDF5F3] flex flex-col md:flex-row lg:flex-row justify-start items-center lg:px-60  py-8">

      {/* Story Content Box */}
      <div className="md:absolute lg:absolute md:w-1/2 lg:w-[30%] bg-[#023A15] py-24 px-16 z-10 shadow-lg right-8 lg:right-[18%] top-32 m-8 lg:m-0">
        <div className='relative'>
          <h2 className="text-4xl lg:text-6xl font-serif text-white mb-4">Our Story</h2>
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan arcu est, at lobortis nulla porta eu. Aenean vel dolor enim. Etiam aliquam mauris eros.</p>
          {/* Button */}
          <button className="flex items-center justify-center w-[180px] h-[50px] bg-white text-[#023A15] font-semibold rounded-full shadow-md hover:bg-gray-100 transition-all">
            READ MORE →
          </button>


          {/* Bottom-right Semicircle */}
          <div className="w-[200px] h-[100px] -rotate-[40deg] bg-[#567C49] rounded-b-full absolute top-[110%] left-[80%]"></div>

        </div>
      </div>

            {/* Counters */}
            <div className="md:absolute lg:absolute mb-8 lg:mb-0 lg:flex space-16 bottom-40 md:bottom-24 right-8 lg:right-[20%]">
        <div className="text-center mb-4 mr-8">
          <p className="text-[#023A15] font-extralight text-6xl">955+</p>
          <p className="text-[#319E48] text-base">Happy Customer</p>
        </div>
        <div className="text-center mb-4 mr-8">
          <p className="text-[#023A15] font-extralight text-6xl">240+</p>
          <p className="text-[#319E48] text-base">Positive Reviews</p>
        </div>
      </div>

            {/* Background Shape (Gray Arch) */}
            <div className="relative ">
        <Image
          src={'https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/woman-taking-a-bath-massage-soap-treat-yourself-sp-ZZG446W-2.jpg'}
          alt={'image'}
          width={600}
          height={400}
          className="bg-cyan-200 rounded-t-full object-cover md:w-[500px] ml-8 lg:ml-0 lg:w-[700px] lg:h-[820px]"
        />


        {/* Top-left Semicircle */}
        <div className="absolute w-[200px] h-[100px] bg-[#023A15] -rotate-[40deg]  rounded-t-full bottom-[70%] left-[-60px] lg:left-[-90px]" />
      </div>



    </div>
  );
};

export default Story;
