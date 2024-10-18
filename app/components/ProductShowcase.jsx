import Image from 'next/image'
import React from 'react'
import ProductsCorousel from './ProductsCorousel'

const ProductShowcase = () => {
  return (
    <section className='w-full h-[800px] lg:h-[800px] bg-white relative '>
        <div 
        className="absolute inset-0 bg-cover bg-fixed " 
        style={{
          backgroundImage: "url('https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/beautiful-woman-with-closed-eyes-posing-with-green-ZDTECGT.jpg')",
          opacity: 0.8,
        }}
      />
        {/* Tint Overlay */}
  <div className="absolute inset-0 bg-[#023A15] opacity-70" />
      <main className='h-[95%] pb-8 relative'>

        <div className='flex items-center justify-center z-10 mb-8 top-16 lg:-top-16 absolute'>
          {/* Story Content Box */}
          <div className="w-full lg:w-[50%] px-16 lg:px-32 z-10 right-[18%] top-0 lg:top-32">
            <div className='relative'>
              <h2 className="text-3xl lg:text-6xl font-serif text-white mb-8">Visit Our Store to Buy Beauty Products</h2>
              <p className="text-lg text-gray-400 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan arcu est, at lobortis nulla porta eu. Aenean vel dolor enim. Etiam aliquam mauris eros, eget ornare diam volutpat eu. Fusce auctor pretium tellus vitae bibendum. Proin eget accumsan felis.
              </p>
              {/* Button */}
              <button className="flex items-center justify-center w-[180px] h-[50px] bg-white text-[#023A15] font-semibold rounded-full shadow-md hover:bg-gray-100 transition-all">
                READ MORE →
              </button>
            </div>
          </div>

          <Image
            src={'https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/amber-glass-transparent-bottle-with-eucalyptus-lea-4FZTPPK.jpg'}
            alt={'image'}
            width={600}
            height={400}
            className="hidden md:hidden lg:block bg-cyan-200 rounded-t-full object-cover lg:w-[600px] lg:h-[820px] mr-32"
          />

        </div>

        <div className='w-full lg:h-[200px] absolute z-20 flex items-center justify-center -bottom-36 md:bottom-8 lg:-bottom-16'>
        <ProductsCorousel/>  
        </div>
      </main>

    </section>
  )
}

export default ProductShowcase