import Link from 'next/link';

export default function Appointment() {
  return (
    <main>
      <div>Appointment scheduling system</div>
      <p>
        Optimize your clinic&apos;s workflow with our user-friendly appointment scheduling system. Seamlessly book,
        reschedule, and cancel appointments, reducing wait times and improving patient satisfaction. Our system
        integrates with EMRs to ensure accurate patient records and efficient communication between staff and patients.
        Enhance operational efficiency and streamline the appointment process with our intuitive scheduling solution.
      </p>
      <button>Schedule Appointment</button>
      <Link href="/">go back</Link>
    </main>
  );
}
