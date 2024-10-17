import Image from 'next/image';
import React from 'react';

const BlogSection = () => {
  const blogs = [
    {
      title: 'A photographer shows the beauty of their transition',
      image: 'https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/allef-vinicius-_H4iwsvqKMI-unsplash.jpg',
      link: '#',
    },
    {
      title: 'Natural look: The evolution of breast implants',
      image: 'https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg',
      link: '#',
    },
    {
      title: 'Russian prosecutor seeks to ban Dolce & Gabbana',
      image: 'https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/jess-harper-sunday-TZBLq6MDfxc-unsplash.jpg',
      link: '#',
    },
  ];

  return (
    <section className="w-full bg-[#F9F3F0] lg:px-60  lg:h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <div className='w-full lg:px-60'>
        <h2 className="text-4xl lg:text-6xl font-serif text-[#023A15] mb-8 mt-8">Blog and News</h2>
        <p className="text-lg text-[#567C49] mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        </div>
        

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 lg:p-0">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-[#023A15] text-white p-4 shadow-lg">
              <Image
                width={400}
                height={400}
                src={blog.image}
                alt={blog.title}
                className="mb-4 object-cover"
              />
              <div className='flex flex-col items-start justify-start'>
              <h3 className="text-2xl text-start font-serif mb-4">{blog.title}</h3>
              <a href={blog.link} className="text-white font-medium underline">
                READ MORE →
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
