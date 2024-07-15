import Link from 'next/link';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Remote() {
  return (
    <main>
      <Navbar />
      <div className="sm:h-screen h-full w-screen flex flex-col justify-start items-start pt-28 px-5 gap-1">
        <Image
          src="/images/remote-monitoring-solutions.jpg"
          alt="Background"
          className="mx-auto sm:w-[95%] sm:h-[95%] w-[350px] h-[350px] object-cover object-center rounded-xl"
          width={1000}
          height={1000}
        />
        <div className="text-greenpl font-bold text-[16px] uppercase">Remote monitoring solutions</div>
        <p className="font-medium text-[18px] leading-[24px] tracking-wider text-grey">
          Monitor patients health conditions in real-time with our remote monitoring solutions. Receive instant alerts
          for abnormal vital signs, medication reminders, and personalized care plans, enabling timely interventions and
          proactive healthcare management. Our remote monitoring technology enhances patient engagement, improves
          treatment adherence, and reduces hospital readmissions, promoting better health outcomes and quality of life.
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
