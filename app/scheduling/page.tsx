'use client';

import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Calendly from '../components/Calendly';
import AppointmentForm from '../components/AppointmentForm';

export default function Scheduling() {
  return (
    <main>
      <Navbar />
      {/* mobile */}
      <div className="sm:h-screen h-full w-screen flex flex-col justify-start items-start pt-28 pb-10 px-5 gap-1 sm:hidden">
        <div className="text-greenpl font-bold text-[16px] uppercase">Meeting request form</div>
        <div className="font-bold text-[24px] leading-[30px] tracking-wide">We look forward to meeting with you</div>
        <p className="font-medium text-[18px] leading-[24px] tracking-wider text-grey mb-4">
          To schedule an appointment, pick a time that works for you and share your contact information. After you
          submit the form, check your email for an appointment confirmation.
        </p>
        <Calendly />
        <ContactForm />
      </div>
      {/* web */}
      <div className="sm:h-screen h-full w-screen sm:flex flex-row justify-center items-center pt-28 pb-10 px-5 gap-5 hidden 2xl:gap-20">
        <div className="w-[600px]">
          <Calendly />
        </div>
        <div className="w-[600px] space-y-2 flex flex-col justify-start items-start">
          <div className="text-greenpl font-bold text-[20px] uppercase">Meeting request form</div>
          <div className="font-bold text-[24px] leading-[30px] tracking-wide sm:text-[28px]">
            We look forward to meeting with you
          </div>
          <p className="font-light text-[24px] leading-[28px] tracking-wider text-grey mb-4">
            To schedule an appointment, pick a time that works for you and share your contact information. After you
            submit the form, check your email for an appointment confirmation.
          </p>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
