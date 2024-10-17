import React from 'react';

const SubscribeSection = () => {
  return (
    <section className="w-full px-8 lg:px-48 bg-[#557b48] py-16 relative">
        <div className="absolute w-[100px] lg:w-[200px] h-[50px] lg:h-[100px] bg-[#023a15] -rotate-45  rounded-t-full top-[-20px] -left-16" />
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl lg:text-6xl font-serif text-white mb-6">
          Get the latest <span className="underline">updates</span> about our products and services
        </h2>

        {/* Form */}
        <div className="flex justify-center mt-8">
          <form className="flex items-center border border-[#023A15] rounded-full p-2 w-full md:mx-16 lg:px-0">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 text-black placeholder-black bg-transparent outline-none"
              required
            />
            
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-[#014512] transition-colors"
            >
              SEND →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
