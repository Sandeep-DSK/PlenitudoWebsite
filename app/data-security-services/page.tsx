import Link from 'next/link';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Data() {
  return (
    <main>
      <Navbar />
      <div className="sm:h-screen h-full w-screen flex flex-col justify-start items-start pt-28 px-5 gap-1">
        <Image
          src="/images/data-security-services.jpg"
          alt="Background"
          className="mx-auto sm:w-[95%] sm:h-[95%] w-[350px] h-[350px] object-cover object-center rounded-xl"
          width={1000}
          height={1000}
        />
        <div className="text-greenpl font-bold text-[16px] uppercase">Data security services</div>
        <p className="font-medium text-[18px] leading-[24px] tracking-wider text-grey">
          Ensuring the highest level of data security, we safeguard sensitive healthcare information against cyber
          threats and breaches. Our comprehensive data security services include encryption, access control, and regular
          security audits to maintain compliance with industry regulations. Trust us to keep your patients data secure
          and confidential at all times.
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
