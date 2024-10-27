'use client';

import Link from 'next/link';
import Navbar from './components/Navbar';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import ContactForm from './components/ContactForm';

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
            <div className="text-black font-semibold text-left text-[24px] sm:text-[48px] sm:w-[800px] sm:leading-[40px] leading-[24px] mb-5 2xl:w-[1000px] 2xl:text-[60px] 2xl:leading-[54px]">
              Empowering seamless healthcare experiences with cutting-edge technology
            </div>
            <div
              onClick={() => scrollTo('#services')}
              className="cursor-pointer text-white uppercase flex items-center justify-center h-[60px] w-[200px] rounded-3xl bg-greenpl hover:bg-green-800 text-[16px] font-bold sm:text-[20px] sm:font-medium"
            >
              view services
            </div>
          </div>
          <div className="text-black font-black text-[76px] leading-[64px] absolute bottom-5 ml-3 sm:ml-0 sm:bottom-[60px] sm:text-[140px] sm:leading-[100px] 2xl:text-[188px] 2xl:leading-[160px]">
            Plenitudo Solutions
          </div>
        </div>
      </div>

      {/* about */}
      <div
        className="h-full w-screen flex flex-col sm:flex-row justify-start sm:items-center items-start pt-32 sm:pt-20 px-5 sm:px-10 gap-1 sm:gap-5 2xl:px-12 2xl:pt-10"
        id="about"
      >
        <div className="sm:w-[700px] sm:h-[400px] sm:space-y-5 2xl:w-[800px] 2xl:mr-10">
          <div className="text-greenpl font-bold text-[16px] sm:text-[20px] uppercase">Empowering healthcare</div>
          <div className="font-bold text-[24px] leading-[30px] tracking-wide sm:text-[48px] sm:leading-[40px]">
            Revolutionizing Healthcare Solutions
          </div>
          <p className="font-medium text-[18px] leading-[24px] tracking-wider text-grey sm:text-[24px] sm:font-light sm:w-[560px]">
            Plenitudo Solutions is dedicated to providing cutting-edge IT services tailored for the healthcare industry.
            Our innovative solutions streamline processes and enhance patient care, ensuring efficiency and excellence
            in healthcare delivery.
          </p>
          <div
            className="text-[16px] underline text-grey py-5 cursor-pointer sm:text-[20px] sm:font-light hover:text-gray-700"
            onClick={() => scrollTo('#contact')}
          >
            Get in touch
          </div>
        </div>

        <Image
          src="/images/about-main.jpg"
          alt="Background"
          className="mx-auto sm:w-[674px] sm:h-[786px] 2xl:w-[1000px] 2xl:h-[1000px] w-full h-[440px] object-cover object-center"
          width={1000}
          height={1000}
        />
      </div>

      {/* services */}
      <div
        className="h-full w-screen flex flex-col justify-start items-start pt-32 sm:pt-20 px-5 sm:px-10 gap-1 2xl:px-12"
        id="services"
      >
        <div className="sm:w-[1060px] sm:space-y-5 sm:mb-5">
          <div className="text-greenpl font-bold text-[16px] uppercase sm:text-[20px]">our services</div>
          <div className="font-bold text-[24px] leading-[30px] tracking-wide sm:text-[48px]">
            Transforming Healthcare IT
          </div>
          <p className="font-medium text-[18px] leading-[24px] tracking-wider text-grey sm:text-[24px] sm:font-light">
            Enhance your healthcare operations with our comprehensive IT solutions designed to optimize efficiency,
            security, and patient care delivery.
          </p>
        </div>

        {/* grid */}
        <div className="grid sm:grid-row-3 sm:grid-cols-3 grid-cols-1 gap-5 pt-5 2xl:w-full">
          {/* 1 */}
          <div className="sm:space-y-1">
            <Image
              src="/images/telemedicine_solution.jpg"
              alt="Background"
              className="mx-auto sm:w-[450px] sm:h-[390px] w-[400px] h-[350px] 2xl:w-[600px] 2xl:h-[525px] 2xl:mx-0 2xl:w-[480px] 2xl:h-[420px] 2xl:mx-0 object-cover object-center rounded-xl"
              width={1000}
              height={1000}
            />
            <Link
              href={'/telemedicine-solutions'}
              className="text-black font-bold text-[20px] capitalize hover:underline sm:text-[28px]"
            >
              Telemedicine solutions
            </Link>
            <p className="font-medium text-[16px] leading-[20px] tracking-wider text-grey sm:text-[20px] sm:font-light">
              Revolutionizing healthcare with remote consultations.
            </p>
            <Link
              href={'/telemedicine-solutions'}
              className="text-greenpl font-bold text-[14px] uppercase hover:underline sm:text-[16px]"
            >
              Learn more
            </Link>
          </div>
          {/* 2 */}
          <div className="sm:space-y-1">
            <Image
              src="/images/data-security-services.jpg"
              alt="Background"
              className="mx-auto sm:w-[450px] sm:h-[390px] w-[400px] h-[350px] 2xl:w-[600px] 2xl:h-[525px] 2xl:mx-0 object-cover object-center rounded-xl"
              width={1000}
              height={1000}
            />
            <Link
              href={'/data-security-services'}
              className="text-black font-bold text-[20px] capitalize hover:underline sm:text-[28px]"
            >
              Data Security Services
            </Link>
            <p className="font-medium text-[16px] leading-[20px] tracking-wider text-grey sm:text-[20px] sm:font-light">
              Protecting sensitive healthcare information.
            </p>
            <Link
              href={'/data-security-services'}
              className="text-greenpl font-bold text-[14px] uppercase hover:underline sm:text-[16px]"
            >
              learn more
            </Link>
          </div>
          {/* 3 */}
          <div className="sm:space-y-1">
            <Image
              src="/images/healthcare-analytics-solutions.jpg"
              alt="Background"
              className="mx-auto sm:w-[450px] sm:h-[390px] w-[400px] h-[350px] 2xl:w-[600px] 2xl:h-[525px] 2xl:mx-0 object-cover object-center rounded-xl"
              width={1000}
              height={1000}
            />
            <Link
              href={'/healthcare-analytics-solutions'}
              className="text-black font-bold text-[20px] capitalize hover:underline sm:text-[28px]"
            >
              Healthcare Analytics Solutions
            </Link>
            <p className="font-medium text-[16px] leading-[20px] tracking-wider text-grey sm:text-[20px] sm:font-light">
              Unlocking insights for data-driven decisions.
            </p>
            <Link
              href={'/healthcare-analytics-solutions'}
              className="text-greenpl font-bold text-[14px] uppercase hover:underline sm:text-[16px]"
            >
              learn more
            </Link>
          </div>
          {/* 4 */}
          <div className="sm:space-y-1">
            <Image
              src="/images/appointment-scheduling-system.jpg"
              alt="Background"
              className="mx-auto sm:w-[450px] sm:h-[390px] w-[400px] h-[350px] 2xl:w-[600px] 2xl:h-[525px] 2xl:mx-0 object-cover object-center rounded-xl"
              width={1000}
              height={1000}
            />
            <Link
              href={'appointment-scheduling-system'}
              className="text-black font-bold text-[20px] capitalize hover:underline sm:text-[28px]"
            >
              Appointment Scheduling System
            </Link>
            <p className="font-medium text-[16px] leading-[20px] tracking-wider text-grey sm:text-[20px] sm:font-light">
              Efficiently manage patient appointments.
            </p>
            <Link
              href={'appointment-scheduling-system'}
              className="text-greenpl font-bold text-[14px] uppercase hover:underline sm:text-[16px]"
            >
              learn more
            </Link>
          </div>
          {/* 5 */}
          <div className="sm:space-y-1">
            <Image
              src="/images/remote-monitoring-solutions.jpg"
              alt="Background"
              className="mx-auto sm:w-[450px] sm:h-[390px] w-[400px] h-[350px] 2xl:w-[600px] 2xl:h-[525px] 2xl:mx-0 object-cover object-center rounded-xl"
              width={1000}
              height={1000}
            />
            <Link
              href={'remote-monitoring-solutions'}
              className="text-black font-bold text-[20px] capitalize hover:underline sm:text-[28px]"
            >
              Remote Monitoring Solutions
            </Link>
            <p className="font-medium text-[16px] leading-[20px] tracking-wider text-grey sm:text-[20px] sm:font-light">
              Monitoring patient health remotely.
            </p>
            <Link
              href={'remote-monitoring-solutions'}
              className="text-greenpl font-bold text-[14px] uppercase hover:underline sm:text-[16px]"
            >
              learn more
            </Link>
          </div>
          {/* 6 */}
          <div className="sm:space-y-1">
            <Image
              src="/images/ehr-integration-services.jpg"
              alt="Background"
              className="mx-auto sm:w-[450px] sm:h-[390px] w-[400px] h-[350px] 2xl:w-[600px] 2xl:h-[525px] 2xl:mx-0 object-cover object-center rounded-xl"
              width={1000}
              height={1000}
            />
            <Link
              href={'ehr-integration-services'}
              className="text-black font-bold text-[20px] capitalize hover:underline sm:text-[28px]"
            >
              EHR Integration Services
            </Link>
            <p className="font-medium text-[16px] leading-[20px] tracking-wider text-grey sm:text-[20px] sm:font-light">
              Seamlessly integrate electronic health records.
            </p>
            <Link
              href={'ehr-integration-services'}
              className="text-greenpl font-bold text-[14px] uppercase hover:underline sm:text-[16px]"
            >
              learn more
            </Link>
          </div>
        </div>
      </div>

      {/* contact */}
      <div
        className="h-full w-screen flex flex-col justify-start items-start pt-32 sm:pt-10 px-5 sm:px-10 gap-1 sm:relative"
        id="contact"
      >
        <div className="sm:flex sm:justify-start sm:items-start sm:w-full 2xl:justify-between">
          {/* contact content */}
          <div className="sm:w-[700px] sm:h-[200px] sm:pt-10 sm:mr-20">
            <div className="text-greenpl font-bold text-[16px] uppercase sm:lowercase sm:text-[64px]">get in touch</div>
            <div className="font-bold text-[24px] leading-[30px] tracking-wide sm:text-[32px] sm:hidden">
              Plenitudo Online Services Private Limited
            </div>
            <div className="font-medium text-[18px] leading-[24px] tracking-wider text-grey sm:text-black sm:font-medium sm:text-[32px] sm:leading-[30px]">
              Reach out to us today to discover how our IT services can elevate your healthcare organization to new
              heights.
            </div>

            {/* company info web */}
            <div className="max-w-xl my-8 text-grey font-medium hidden sm:block sm:pt-32 2xl:my-10 2xl:text-[20px]">
              <div className="font-bold text-[24px] leading-[30px] tracking-wide sm:text-[20px] sm:leading-[20px] sm:uppercase sm:text-black sm:pb-5 2xl:text-[24px]">
                Plenitudo Online Services Private Limited
              </div>
              <div className="underline">
                <a href="mailto:conact@plenitudosolutions.com">conact@plenitudosolutions.com</a>
              </div>
              <div className="underline">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Visakhapatnam,+Andhra+Pradesh+India"
                  target="_blank"
                >
                  Visakhapatnam, Andhra Pradesh India
                </a>
              </div>
            </div>
          </div>
          <div className="sm:flex sm:flex-col sm:justify-center sm:mt-[72px] 2xl:w-[700px]">
            <span className="hidden sm:block sm:text-center sm:text-black sm:text-[24px] sm:font-semibold sm:uppercase sm:mb-[-20px]">
              send us a message
            </span>
            <ContactForm />
          </div>
        </div>

        <div className="max-w-xl my-8 text-grey font-medium rounded-md underline sm:hidden">
          <div>
            <a href="mailto:conact@plenitudosolutions.com">contact@plenitudosolutions.com</a>
          </div>
          <div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Visakhapatnam,+Andhra+Pradesh+India"
              target="_blank"
            >
              Visakhapatnam, Andhra Pradesh India
            </a>
          </div>
        </div>
        {/* footer */}
        <div className="sm:ml-[-28px] sm:space-y-5 sm:pointer-events-none 2xl:mt-10">
          <div className="hidden sm:block sm:font-black sm:uppercase sm:text-[260px] sm:leading-[200px] sm:tracking-tighter sm:bottom-[72px] 2xl:text-[348px]">
            Plenitudo
          </div>
          <div className="hidden sm:block sm:font-light sm:uppercase sm:text-[64px] sm:leading-[60px] sm:tracking-[128px] sm:bottom-[4px] sm:ml-5 sm:pb-5 2xl:text-[80px] 2xl:leading-[76px] 2xl:tracking-[176px] 2xl:pt-5 2xl:pb-0">
            solutions
          </div>
        </div>
      </div>
    </main>
  );
}
