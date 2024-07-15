import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Telemedicine() {
  return (
    <main>
      <Navbar />
      <div>Telemedicine solutions</div>
      <p>
        Our telemedicine solutions connect patients and healthcare providers seamlessly, ensuring access to quality care
        from the comfort of your home. Experience virtual consultations, prescription refills, and medical advice
        without the need for in-person visits. Improve patient outcomes and streamline healthcare delivery with our
        innovative telemedicine technology.
      </p>
      <Link href={'/scheduling'}>Schedule Appointment</Link>
      <Link href="/">go back</Link>
    </main>
  );
}
