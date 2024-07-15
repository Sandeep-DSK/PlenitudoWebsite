import Link from 'next/link';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Appointment() {
  return (
    <main>
      <Navbar />
      <div className="sm:h-screen h-full w-screen flex flex-col justify-start items-start pt-[100px] px-5 gap-1">
        <Image
          src="/images/appointment-scheduling-system.jpg"
          alt="Background"
          className="mx-auto sm:w-[95%] sm:h-[95%] w-[350px] h-[350px] object-cover object-center rounded-xl"
          width={1000}
          height={1000}
        />
        <div className="text-greenpl font-bold text-[16px] uppercase">Appointment scheduling system</div>
        <p className="font-medium text-[18px] leading-[24px] tracking-wider text-grey">
          Optimize your clinic&apos;s workflow with our user-friendly appointment scheduling system. Seamlessly book,
          reschedule, and cancel appointments, reducing wait times and improving patient satisfaction. Our system
          integrates with EMRs to ensure accurate patient records and efficient communication between staff and
          patients. Enhance operational efficiency and streamline the appointment process with our intuitive scheduling
          solution.
        </p>
        <Link
          href={'/scheduling'}
          className="cursor-pointer text-white uppercase flex items-center justify-center h-[60px] w-[350px] rounded-3xl bg-greenpl hover:bg-green-800 text-[16px] font-bold my-4"
        >
          Schedule Appointment
        </Link>
      </div>
    </main>
  );
}
