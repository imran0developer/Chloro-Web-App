// components/AutomaticImageCarousel.js
import React, { useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

const FeaturedCorousel = ({ images }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = setInterval(() => {
            emblaApi.scrollNext();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(autoplay);
    }, [emblaApi]);

    return (
        <main className="overflow-hidden ">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container flex">
                    {images.map((image, index) => (
                        <div className="relative min-w-[80%] mt-8 lg:mt-0 lg:min-w-[30%] ml-8 w-full flex justify-center" key={index}>
                            <Image
                                width={400}
                                height={200}
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className=" object-cover rounded-t-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default FeaturedCorousel;
