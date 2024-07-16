'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import { useEffect } from 'react';

export default function Scheduling() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main>
      <Navbar />
      <div className="sm:h-screen h-full w-screen flex flex-col justify-start items-start pt-28 pb-10 px-5 gap-1">
        <div className="text-greenpl font-bold text-[16px] uppercase">Meeting request form</div>
        <div className="font-bold text-[24px] leading-[30px] tracking-wide">We look forward to meeting with you</div>
        <p className="font-medium text-[18px] leading-[24px] tracking-wider text-grey mb-4">
          To schedule an appointment, pick a time that works for you and share your contact information. After you
          submit the form, check your email for an appointment confirmation.
        </p>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/srjezza/test"
          style={{ minWidth: '350px', height: '630px' }}
        ></div>
        <ContactForm />
      </div>
    </main>
  );
}
