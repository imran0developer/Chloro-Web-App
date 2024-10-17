// components/AutomaticImageCarousel.js
import React, { useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

const HeroCoroursel = ({ images }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = setInterval(() => {
            emblaApi.scrollNext();
        }, 2000); // Change slide every 3 seconds

        return () => clearInterval(autoplay);
    }, [emblaApi]);

    return (
        <main className="w-[360px] lg:w-[700px] overflow-hidden ">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container flex">
                    {images.map((image, index) => (
                        <div className="embla__slide w-full flex justify-center" key={index}>
                            <Image
                                src={image}
                                alt={`Slide ${index + 1}`}
                                width={330}
                                height={500}
                                objectFit="contain"
                                className="rounded-t-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default HeroCoroursel;
