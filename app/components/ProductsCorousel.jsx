// components/AutomaticImageCarousel.js
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const ProductsCorousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

    const images = [
       "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/brown-and-white-glass-with-dropper-on-white-backgr-MMLCL93-1024x1024.jpg",
       "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/brown-and-white-glass-with-dropper-on-white-backgr-MMLCL93-1024x1024.jpg",
       "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/cosmetic-bottle-with-serum-or-hyaluronic-acid-and-YPT8W8X-1024x1024.jpg",
       "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/brown-and-white-glass-with-dropper-on-natural-back-KJCDBT2-1024x1024.jpg",
       "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/two-cosmetic-bottles-in-womans-hands-CQK35WA-1024x1024.jpg",
       "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/cosmetic-bottle-with-serum-or-hyaluronic-acid-and-YPT8W8X-1024x1024.jpg",
       "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/brown-and-white-glass-with-dropper-on-white-backgr-MMLCL93-1024x1024.jpg",
       "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/brown-and-white-glass-with-dropper-on-natural-back-KJCDBT2-1024x1024.jpg",
    ];

    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = setInterval(() => {
            emblaApi.scrollNext();
        }, 3000); // Change slide every 6 seconds

        return () => clearInterval(autoplay);
    }, [emblaApi]);

    return (
        <main className="lg:w-[680px] overflow-hidden ">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container flex">
                    {images.map((image, index) => (
                        <div className="relative min-w-[100%] md:min-w-[50%] lg:min-w-[25%] px-4 w-full flex flex-col items-center" key={index}>
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

export default ProductsCorousel;
