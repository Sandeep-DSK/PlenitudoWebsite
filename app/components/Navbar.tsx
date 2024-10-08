'use client';

import React, { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useRouter, usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (selector: string) => {
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        gsap.to(window, { duration: 2, scrollTo: { y: selector } });
      }, 100);
    } else {
      gsap.to(window, { duration: 2, scrollTo: { y: selector } });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* mobile nav */}
      <div className="h-[100px] w-screen flex justify-between items-center px-5 bg-white sm:hidden fixed z-50">
        <div
          onClick={() => scrollTo('#home')}
          className="text-[20px] leading-3 tracking-normal font-black cursor-pointer uppercase"
        >
          Plenitudo Solutions
        </div>
        {/* menu */}
        <button className="text-neutral-200 pr-5" onClick={toggleMenu}>
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
              <ul className="flex flex-col justify-between text-[48px] leading-[48px] text-whitesmoke font-dahlia tracking-tight space-y-5 items-center cursor-pointer">
                <li onClick={() => scrollTo('#home')}>Home</li>
                <li onClick={() => scrollTo('#about')}>About</li>
                <li onClick={() => scrollTo('#services')}>Services</li>
                <li onClick={() => scrollTo('#contact')}>Contact</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* web nav */}
      <nav className="hidden sm:flex sm:justify-between sm:items-center sm:px-10 text-black sm:w-[100%] fixed bg-white h-[60px] z-50">
        <div
          onClick={() => scrollTo('#home')}
          className="text-[32px] leading-3 tracking-tighter font-semibold cursor-pointer"
        >
          Plenitudo Solutions
        </div>
        <ul className="flex justify-center items-center space-x-5 h-[40px] text-[24px] cursor-pointer font-geistmono">
          <li onClick={() => scrollTo('#home')}>Home</li>
          <li onClick={() => scrollTo('#about')}>About</li>
          <li onClick={() => scrollTo('#services')}>Services</li>
          <li
            onClick={() => scrollTo('#contact')}
            className="border-2 px-2 rounded-full border-black hover:bg-greenpl hover:border-greenpl hover:text-white"
          >
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
