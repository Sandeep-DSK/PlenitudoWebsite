import Link from 'next/link';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Telemedicine() {
  return (
    <main>
      <Navbar />
      <div className="sm:h-screen h-full w-screen flex flex-col justify-start items-start pt-28 px-5 gap-1">
        <Image
          src="/images/telemedicine_solution.jpg"
          alt="Background"
          className="mx-auto sm:w-[95%] sm:h-[95%] w-[350px] h-[350px] object-cover object-center rounded-xl"
          width={1000}
          height={1000}
        />
        <div className="text-greenpl font-bold text-[16px] uppercase">Telemedicine solutions</div>
        <p className="font-medium text-[18px] leading-[24px] tracking-wider text-grey">
          Our telemedicine solutions connect patients and healthcare providers seamlessly, ensuring access to quality
          care from the comfort of your home. Experience virtual consultations, prescription refills, and medical advice
          without the need for in-person visits. Improve patient outcomes and streamline healthcare delivery with our
          innovative telemedicine technology.
        </p>
        <Link
          href={'/scheduling'}
          className="cursor-pointer text-white uppercase flex items-center justify-center h-[60px] w-[350px] rounded-3xl bg-greenpl hover:bg-green-800 text-[16px] font-bold mt-4"
        >
          Schedule Appointment
        </Link>
        {/* <Link href="/">go back</Link> */}
      </div>
    </main>
  );
}
