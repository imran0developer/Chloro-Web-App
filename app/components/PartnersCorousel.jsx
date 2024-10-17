// components/AutomaticImageCarousel.js
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const PartnersCorousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

    const images = [
       "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/clientlogo_4@4x.png",
       "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/clientlogo_2@4x.png",
       "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/clientlogo_6@4x.png",
       "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/clientlogo_3@4x.png",
       "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/clientlogo_2@4x.png",
       "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/clientlogo_7@4x.png",
    ];

    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = setInterval(() => {
            emblaApi.scrollNext();
        }, 3000); // Change slide every 6 seconds

        return () => clearInterval(autoplay);
    }, [emblaApi]);

    return (
        <main className="lg:w-[90%] overflow-hidden ">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container flex">
                    {images.map((image, index) => (
                        <div className="relative min-w-[100%] md:min-w-[33%] lg:min-w-[25%] px-4 w-full flex flex-col items-center" key={index}>
                            <Image
                            width={200}
                            height={200}
                            alt={`image: ${index}`}
                            src={image}/>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default PartnersCorousel;
