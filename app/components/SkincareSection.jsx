import Image from 'next/image';
import React from 'react';

const SkincareSection = () => {
  return (
    <section className="bg-[#FDF5F3] py-16 px-6 lg:px-48">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Column - Images */}
        <div className="flex flex-col gap-8 lg:w-1/2 lg:mr-16">
          <div className="relative w-full">
            {/* Top Image */}
            <Image
              src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/brown-D9SR4HS-800x400.jpg"
              alt="Skincare"
              width={500}
              height={300}
              className="w-full lg:h-[300px] object-cover rounded-r-full"
            />
            {/* Green Circular Shape */}
            {/* <div className="absolute top-0 left-0 w-16 h-16 bg-[#023A15] rounded-full -translate-x-4 -translate-y-4"></div> */}
            <div className="absolute w-[100px] lg:w-[200px] h-[50px] lg:h-[100px] bg-[#023A15] -rotate-45  rounded-t-full -top-4 -left-16" />
          </div>

          {/* Bottom Image with Play Button */}
          <div className="relative w-full">
            <Image
              src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/woman-holding-grapefruit-HV8L8KM-800x400.jpg"
              alt="Orange in hand"
              width={500}
              height={300}
              className="w-full  lg:h-[300px] object-cover rounded-l-full"
            />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-end right-44">
            <button className="w-12 h-12 rounded-full  animate-scalePulse bg-white flex items-center justify-center animate-pulse border-2 border-transparent hover:text-white hover:border-[#319E48] transition-all duration-300 hover:bg-[#023A15]  hover:scale-110 shadow-[0_0_15px_rgba(49,158,72,0.7)] hover:shadow-[0_0_30px_rgba(49,158,72,1)]">
  <svg
    className="w-6 h-6 text-black hover:text-white"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" d="M5.5 3.5a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h.025a.5.5 0 00.285-.1l10.006-6a.5.5 0 000-.8L5.81 3.6A.5.5 0 005.5 3.5zM6 5.635l7.738 4.635L6 14.905V5.635z" />
  </svg>
</button>

            </div>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="lg:w-1/2 mt-16">
          <h2 className="text-5xl font-serif text-[#023A15] mb-6">
            Expert Skincare For 
            <div className="relative items-center">
                <Image
                    height={100}
                    width={240}
                    src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/Asset-6_2.png"
                    alt="Description of the image"
                    className="absolute left-24 -top-2 h-auto"
                />
            <span className="relative text-[#023A15] underline-offset-4">Your Beautiful Skin</span>
            </div>
          </h2>
          <p className="text-lg text-[#567C49] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan arcu est, at lobortis nulla porta eu.
            Aenean vel dolor enim. Etiam aliquam mauris eros, eget ornare diam volutpat eu.
          </p>

          <ul className="text-lg text-[#567C49] space-y-4 mb-8">
            <li>✔ Donec non vestibulum mauris.</li>
            <li>✔ Maecenas arcu eros.</li>
            <li>✔ Sed pulvinar lorem.</li>
            <li>✔ Nullam ut mauris tellus.</li>
            <li>✔ Nunc vitae convallis justo.</li>
          </ul>

          <a
            href="#"
            className="inline-block bg-[#023A15] text-white font-medium py-3 px-6 rounded-full hover:bg-[#319E48] transition-colors"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkincareSection;
