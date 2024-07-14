'use client';

import React, { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToHome = () => {
    gsap.to(window, { duration: 2, scrollTo: { y: '#home' } });
    setIsOpen(!isOpen);
  };
  const scrollToAbout = () => {
    gsap.to(window, { duration: 2, scrollTo: { y: '#about' } });
    setIsOpen(!isOpen);
  };
  const scrollToMenu = () => {
    gsap.to(window, { duration: 2, scrollTo: { y: '#menu' } });
    setIsOpen(!isOpen);
  };
  const scrollToContact = () => {
    gsap.to(window, { duration: 2, scrollTo: { y: '#contact' } });
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* mobile nav */}
      <div className="h-[100px] w-screen flex justify-between items-center px-10 bg-white sm:hidden fixed z-10">
        {/* logo */}
        <div>Plenitudo Solutions</div>
        {/* menu */}
        <button className="text-neutral-200" onClick={toggleMenu}>
          <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.86768 22.5V20H26.3677V22.5H3.86768ZM3.86768 16.25V13.75H26.3677V16.25H3.86768ZM3.86768 10V7.5H26.3677V10H3.86768Z"
              fill="#363020"
            />
          </svg>
        </button>

        {/* nav menu open */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-white overflow-hidden sm:hidden">
            <div className="absolute right-10 top-[34px]">
              <button onClick={toggleMenu}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 23.75L6.25 22L13.25 15L6.25 8L8 6.25L15 13.25L22 6.25L23.75 8L16.75 15L23.75 22L22 23.75L15 16.75L8 23.75Z"
                    fill="#363020"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col h-screen justify-center items-center">
              <ul className="flex flex-col justify-between text-[48px] leading-[48px] text-whitesmoke font-dahlia tracking-tight space-y-1 items-center cursor-pointer">
                <li onClick={scrollToHome}>Home</li>
                <li onClick={scrollToAbout}>About</li>
                <li onClick={scrollToMenu}>Sevices</li>
                <li onClick={scrollToContact}>Contact</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
