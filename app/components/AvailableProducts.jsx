import Image from 'next/image'
import React from 'react'
import PartnersCorousel from './PartnersCorousel'

const AvailableProducts = () => {
  return (
    <main className='w-full h-[600px] mt-16 lg:mt-0 lg:h-[400px] bg-[#023a15]'>
        <div className="w-full relative flex flex-col items-center">
            <Image
                height={100}
                width={240}
                src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/Asset-6_2.png"
                alt="Description of the image"
                className="absolute top-32 md:ml-[320px] lg:ml-[360px] h-auto"
            />
            <h2 className="text-5xl font-serif text-white mb-8 text-center my-32">Our Products also Available at</h2>

            <div className='mt-4'>
                <PartnersCorousel/>
            </div>
        </div>

    </main>    
  )
}

export default AvailableProducts