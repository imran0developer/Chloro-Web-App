import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import Logo from './Logo';

const TopNav = ({ currentPage }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (page) => currentPage === page && 'text-white';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main>
    <div className='pt-12 flex lg:flex justify-between items-center px-6 lg:px-60 bg-[#023A15] relative'>
      {/* Logo */}
      <div>
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <div className='hidden lg:flex'>
        <ul className='flex gap-16 text-[14px] font-medium cursor-pointer'>
          <li className={`text-gray-400 hover:text-white ${isActive('Home')}`}>Home</li>
          <li className={`text-gray-400 hover:text-white ${isActive('About')}`}>About</li>
          <li className={`text-gray-400 hover:text-white ${isActive('Services')}`}>Services</li>
          <li className={`text-gray-400 hover:text-white ${isActive('Pages')}`}>Pages</li>
          <li className={`text-gray-400 hover:text-white ${isActive('Contact')}`}>Contact</li>
        </ul>
      </div>

      {/* Icons (Search and Menu) */}
      <div className='flex gap-5 text-3xl lg:hidden'>
        <span><CiSearch /></span>
        <span onClick={toggleMobileMenu} className="cursor-pointer">
          {isMobileMenuOpen ? <IoMdClose /> : <IoIosMenu />}
        </span>
      </div>

      {/* Desktop Icons */}
      <div className='hidden lg:flex gap-5 text-3xl'>
        <span><CiSearch /></span>
        <span><IoIosMenu /></span>
      </div>
    </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
        <div className='lg:hidden pt-16 w-full bg-[#023A15] text-center py-5'>
          <ul className='flex items-center justify-center gap-16 text-[16px] font-medium'>
            <li onClick={toggleMobileMenu} className={`text-gray-400 hover:text-white ${isActive('Home')}`}>Home</li>
            <li onClick={toggleMobileMenu} className={`text-gray-400 hover:text-white ${isActive('About')}`}>About</li>
            <li onClick={toggleMobileMenu} className={`text-gray-400 hover:text-white ${isActive('Services')}`}>Services</li>
            <li onClick={toggleMobileMenu} className={`text-gray-400 hover:text-white ${isActive('Pages')}`}>Pages</li>
            <li onClick={toggleMobileMenu} className={`text-gray-400 hover:text-white ${isActive('Contact')}`}>Contact</li>
          </ul>
        </div>
      )}

    </main>
  );
};

export default TopNav;
