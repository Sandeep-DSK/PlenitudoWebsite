import Link from 'next/link';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Healthcare() {
  return (
    <main>
      <Navbar />
      <div className="sm:h-screen h-full w-screen flex flex-col justify-start items-start pt-28 px-5 gap-1 sm:flex-row sm:justify-center sm:items-center sm:px-10 sm:pt-10">
        <Image
          src="/images/healthcare-analytics-solutions.jpg"
          alt="Background"
          className="mx-auto sm:w-[580px] sm:h-[580px] w-[350px] h-[350px] object-cover object-center rounded-xl sm:rounded-none sm:mx-5"
          width={1000}
          height={1000}
        />
        <div className="sm:w-[580px]">
          <div className="text-greenpl font-bold text-[16px] uppercase sm:text-[20px]">
            Healthcare analytics solutions
          </div>
          <p className="font-medium text-[18px] leading-[24px] tracking-wider text-grey sm:text-[24px] sm:font-light sm:text-black sm:leading-[28px]">
            Empower healthcare organizations with actionable insights using our advanced analytics solutions. From
            predictive modeling to performance tracking, our healthcare analytics tools enable informed decision-making
            and improved patient care. Leverage data to optimize operations, enhance clinical outcomes, and drive
            strategic growth in the healthcare industry.
          </p>
          <Link
            href={'/scheduling'}
            className="cursor-pointer text-white uppercase flex items-center justify-center h-[60px] w-[350px] rounded-3xl bg-greenpl hover:bg-green-800 text-[16px] font-bold mt-4 sm:w-[300px] sm:font-semibold"
          >
            Schedule Appointment
          </Link>
        </div>
      </div>
    </main>
  );
}
