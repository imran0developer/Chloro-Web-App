// components/AutomaticImageCarousel.js
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const ReviewsCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

    const reviews = [
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu.",
            reviewer: "John Doe"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu.",
            reviewer: "Jane Smith"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu.",
            reviewer: "Alice Johnson"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu.",
            reviewer: "Bob Brown"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu.",
            reviewer: "Charlie Davis"
        },
    ];

    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = setInterval(() => {
            emblaApi.scrollNext();
        }, 6000); // Change slide every 6 seconds

        return () => clearInterval(autoplay);
    }, [emblaApi]);

    return (
        <main className="overflow-hidden ">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container flex">
                    {reviews.map((review, index) => (
                        <div className="relative min-w-[100%] px-8 w-full flex flex-col items-center" key={index}>
                            <p className="text-white mb-2 text-center">
                                {review.text}
                            </p>
                            <p className="text-white font-semibold my-8">
                                - {review.reviewer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ReviewsCarousel;
