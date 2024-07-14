'use client';

import Link from 'next/link';
import Navbar from './components/Navbar';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const scrollTo = (selector: string) => {
    gsap.to(window, { duration: 2, scrollTo: { y: selector } });
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden" id="home">
      {/* navbar */}
      <Navbar />

      {/* main */}
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="h-screen w-screen flex flex-col justify-center items-center relative overflow-hidden">
          <Image
            src="/images/cta-main.jpg"
            alt="Background"
            className="absolute inset-0 mx-auto sm:w-[95%] sm:h-[95%] w-full h-full object-cover object-center brightness-95 contrast-50"
            width={1000}
            height={1000}
          />
          <div className="relative z-10 flex flex-col justify-center items-start text-center px-4">
            <div className="text-black font-semibold text-left text-[24px] leading-[24px] mb-5">
              Empowering seamless healthcare experiences with cutting-edge technology
            </div>
            <div
              onClick={() => scrollTo('#services')}
              className="cursor-pointer text-white uppercase flex items-center justify-center h-[60px] w-[200px] rounded-3xl bg-green text-[16px] font-bold"
            >
              view services
            </div>
          </div>
          <div className="text-black font-black text-[76px] leading-[64px] absolute bottom-5 ml-3">
            Plenitudo Solutions
          </div>
        </div>
      </div>

      {/* about */}
      <div className="h-full w-screen flex flex-col justify-start items-start pt-32 px-5 gap-1" id="about">
        <div className="text-green font-bold text-[16px] uppercase">Empowering healthcare</div>
        <div className="font-bold text-[24px] leading-[30px] tracking-wide">Revolutionizing Healthcare Solutions</div>
        <p className="font-medium text-[18px] leading-[24px] tracking-wider text-grey">
          Plenitudo Solutions is dedicated to providing cutting-edge IT services tailored for the healthcare industry.
          Our innovative solutions streamline processes and enhance patient care, ensuring efficiency and excellence in
          healthcare delivery.
        </p>
        <div className="text-[16px] underline text-grey py-5 cursor-pointer" onClick={() => scrollTo('#contact')}>
          Get in touch
        </div>

        <Image
          src="/images/about-main.jpg"
          alt="Background"
          className="mx-auto sm:w-[95%] sm:h-[95%] w-full h-[440px] object-cover object-center"
          width={1000}
          height={1000}
        />
      </div>

      {/* services */}
      <div
        className="sm:h-screen h-full w-screen flex flex-col justify-start items-start pt-32 px-5 gap-1"
        id="services"
      >
        <div className="text-green font-bold text-[16px] uppercase">our services</div>
        <div className="font-bold text-[24px] leading-[30px] tracking-wide">Transforming Healthcare IT</div>
        <p className="font-medium text-[18px] leading-[24px] tracking-wider text-grey">
          Enhance your healthcare operations with our comprehensive IT solutions designed to optimize efficiency,
          security, and patient care delivery.
        </p>
        <div className="grid sm:grid-row-3 sm:grid-cols-3 grid-cols-1 border-2 border-red-500 gap-5 pt-5">
          <div className="border-2 border-purple-500">
            <div className="border-2 h-48 w-48 bg-green-500">image</div>
            <Link href={'/telemedicine-solutions'}>Telemedicine solutions</Link>
            <p>Revolutionizing healthcare with remote consultations.</p>
          </div>
          <div className="border-2 border-purple-500">
            <div className="border-2 h-48 w-48 bg-green-500">image</div>
            <Link href={'/data-security-services'}>Data Security Services</Link>
            <p>Protecting sensitive healthcare information.</p>
          </div>
          <div className="border-2 border-purple-500">
            <div className="border-2 h-48 w-48 bg-green-500">image</div>
            <Link href={'/healthcare-analytics-solutions '}>Healthcare Analytics Solutions</Link>
            <p>Unlocking insights for data-driven decisions.</p>
          </div>
          <div className="border-2 border-purple-500">
            <div className="border-2 h-48 w-48 bg-green-500">image</div>
            <Link href={'appointment-scheduling-system'}>Appointment Scheduling System </Link>
            <p>Efficiently manage patient appointments.</p>
          </div>
          <div className="border-2 border-purple-500">
            <div className="border-2 h-48 w-48 bg-green-500">image</div>
            <Link href={'remote-monitoring-solutions'}>Remote Monitoring Solutions</Link>
            <p>Monitoring patient health remotely.</p>
          </div>
          <div className="border-2 border-purple-500">
            <div className="border-2 h-48 w-48 bg-green-500">image</div>
            <Link href={'ehr-integration-services'}>EHR Integration Services</Link>
            <p>Seamlessly integrate electronic health records.</p>
          </div>
        </div>
      </div>

      {/* contact */}
      <div className="h-screen w-screen" id="contact">
        <div>get in touch</div>
        <div>
          Reach out to us today to discover how our IT services can elevate your healthcare organization to new heights.
        </div>
        <div>Plenitudo Online Services Private Limited</div>
        <div>conact@plenitudosolutions.com</div>
        <div>Visakhapatnam, Andra Padesh India</div>
        <div>Plenitudo</div>
        <div>solutions</div>
      </div>
    </main>
  );
}
