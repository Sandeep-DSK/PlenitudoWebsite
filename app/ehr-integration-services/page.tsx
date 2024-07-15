import Link from 'next/link';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function EHR() {
  return (
    <main>
      <Navbar />
      <div className="sm:h-screen h-full w-screen flex flex-col justify-start items-start pt-28 px-5 gap-1">
        <Image
          src="/images/ehr-integration-services.jpg"
          alt="Background"
          className="mx-auto sm:w-[95%] sm:h-[95%] w-[350px] h-[350px] object-cover object-center rounded-xl"
          width={1000}
          height={1000}
        />
        <div className="text-greenpl font-bold text-[16px] uppercase">EHR integration services</div>
        <p className="font-medium text-[18px] leading-[24px] tracking-wider text-grey">
          Facilitate seamless access to patient information across healthcare systems with our EHR integration services.
          We streamline the integration process, ensuring interoperability between different EHR platforms for efficient
          data exchange. Enhance care coordination, reduce errors, and improve clinical decision-making with integrated
          EHR systems. Trust us to simplify the exchange of medical records and promote continuity of care for better
          patient outcomes.
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
