import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#023a15] px-16 lg:px-48 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4">Chlöro</h2>
          <p className="text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {/* Social media images - you can replace the src with actual paths */}
            <Image src="https://www.svgrepo.com/show/444570/social-instagram.svg" alt="Instagram" width={24} height={24} />
            <Image src="https://www.svgrepo.com/show/362167/social-youtube.svg" alt="YouTube" width={24} height={24} />
            <Image src="https://www.svgrepo.com/show/444567/social-facebook.svg" alt="Facebook" width={24} height={24} />
            <Image src="https://www.svgrepo.com/show/362166/social-twitter.svg" alt="Twitter" width={24} height={24} />
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Skincare</a></li>
            <li><a href="#" className="hover:underline">Make Up</a></li>
            <li><a href="#" className="hover:underline">Shampoo</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Our Shop</a></li>
            <li><a href="#" className="hover:underline">Career</a></li>
            <li><a href="#" className="hover:underline">Specialist</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center border-t border-green-800 pt-6 text-sm">
        <p>Copyright © 2021 ASK Project</p>
      </div>
    </footer>
  );
};

export default Footer;
