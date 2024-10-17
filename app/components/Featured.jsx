import Image from 'next/image';
import React from 'react';
import FeaturedCorousel from './FeaturedCorousel';

const Featured = () => {
  const images=[
    "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/composition-of-a-brown-glass-dropper-bottle-with-a-NWSPPKG.jpg",
    "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/lifting-anti-wrinkle-collagen-patches-under-eyes-RB522JG.jpg",
    "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/top-view-of-coconut-oil-in-bottle-on-coconut-half-VTN4936.jpg",
    "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/composition-of-a-brown-glass-dropper-bottle-with-a-NWSPPKG.jpg",
    "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/lifting-anti-wrinkle-collagen-patches-under-eyes-RB522JG.jpg",
    "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/composition-of-a-brown-glass-dropper-bottle-with-a-NWSPPKG.jpg",
  ]
  return (
    <section className="bg-[#023A15] text-white py-32 lg:px-32 flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row lg:flex-row items-center">
        {/* Left Section: Text Content */}
        <div className="w-full ml-8 md:ml-8 lg:ml-0 md:lg-full lg:w-1/3 text-left lg:mr-16 ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">Featured Product</h2>
          <p className="text-base md:text-base lg:text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
          </p>
          <button className="bg-white text-[#023A15] px-8 py-3 rounded-full text-sm font-semibold">
            SHOP NOW
          </button>
        </div>

        {/* Right Section: Product Images */}
        <div className="w-full lg:w-[80%] ">
          <FeaturedCorousel images={images}/>
        </div>
      </div>
    </section>
  );
};

export default Featured;
