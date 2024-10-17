import Image from 'next/image';
import React from 'react';
import ReviewsCorousel from './ReviewsCorousel';

const Review = () => {
  return (
    <div className="relative w-full lg:h-[800px] bg-[#023A15] flex flex-col md:flex-row lg:flex-row justify-center items-center lg:px-60 lg:space-x-16 ">
      {/* Background Shape (Gray Arch) */}


      {/* Story Content Box */}
      <div className="w-[80%] md:w-[40%] lg:w-1/2">
        <div className='relative'>
          <h2 className="text-3xl lg:text-5xl font-serif text-white mb-2 mt-8 lg:mt-0 text-center">Good Review From Our</h2>
          <div className='flex flex-col items-center justify-center mb-4 lg:mb-16'>
            <h2 className="text-3xl lg:text-5xl font-serif text-white text-center">Customer</h2>
            <Image
                    height={12}
                    width={200}
                    src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/Asset-4_2.png"
                    alt="Description of the image"
                    className=" w-1/3 lg:w-full object-contain" // Ensure image fits within its container
                />
          </div>
          <ReviewsCorousel />

        </div>
      </div>

      <div className="relative ">
        <Image
          src={'https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/lifting-anti-wrinkle-collagen-patches-under-eyes-RB522JG.jpg'}
          alt={'image'}
          width={600}
          height={400}
          className="bg-cyan-200 rounded-t-full object-cover m-8 w-[80%] lg:w-[550px] lg:h-[575px]"
        />
        {/* Bottom-right Semicircle */}
        <div className="w-[100px] lg:w-[200px] h-[50px] lg:h-[100px] -rotate-[40deg] bg-[#567C49] rounded-b-full absolute -bottom-28 -right-24"></div>
      </div>

    </div>
  );
};

export default Review;
