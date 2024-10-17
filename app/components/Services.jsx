import Image from 'next/image';
import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'Face Scrub',
            description: 'Lorem ipsum dolor sit amet, cctetur adipiscing elit.',
            image: 'https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/woman-relaxing-with-a-facial-mask-at-the-spa-FT2XZH6.jpg',
            link: '#',
        },
        {
            title: 'Face Massage',
            description: 'Lorem ipsum dolor sit amet, cctetur adipiscing elit.',
            image: 'https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/facial-massage-beauty-treatment-CV8BDTP.jpg',
            link: '#',
        },
        {
            title: 'Body Massage',
            description: 'Lorem ipsum dolor sit amet, cctetur adipiscing elit.',
            image: 'https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/pedicure-LDJ5TEU.jpg',
            link: '#',
        },

        {
            title: 'Face Massage',
            description: 'Lorem ipsum dolor sit amet, cctetur adipiscing elit.',
            image: 'https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/facial-massage-beauty-treatment-CV8BDTP.jpg',
            link: '#',
        },
        {
            title: 'Body Massage',
            description: 'Lorem ipsum dolor sit amet, cctetur adipiscing elit.',
            image: 'https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/pedicure-LDJ5TEU.jpg',
            link: '#',
        },

        {
            title: 'Face Scrub',
            description: 'Lorem ipsum dolor sit amet, cctetur adipiscing elit.',
            image: 'https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/woman-relaxing-with-a-facial-mask-at-the-spa-FT2XZH6.jpg',
            link: '#',
        },
    ];

    return (
        <section className="bg-[#FDF5F3] py-16">
            <div className="container mx-auto text-center lg:px-48 relative">
                <div className="w-[50%] mx-auto">
                    {/* Section Title */}
                    <h2 className="text-6xl font-serif text-[#023A15] mb-4">Our Service</h2>
                    <p className="text-lg text-[#567C49] mb-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center mb-16">
                            <div className="overflow-hidden">
                                <Image
                                    width={350}
                                    height={500}
                                    src={service.image}
                                    alt={service.title}
                                    className="rounded-t-full object-cover transform transition duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="w-60 bg-white p-6 rounded-lg shadow-md -mt-8 relative z-10">
                                <h3 className="text-xl font-serif text-[#023A15] mb-4">{service.title}</h3>
                                <p className="text-sm text-gray-500 mb-4">{service.description}</p>
                                <a href={service.link} className="text-[#319E48] font-semibold text-sm hover:underline">
                                    LEARN MORE →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
