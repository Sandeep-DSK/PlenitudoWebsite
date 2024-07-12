import Link from 'next/link';

export default function EHR() {
  return (
    <main>
      <div>EHR integration services</div>
      <p>
        Facilitate seamless access to patient information across healthcare systems with our EHR integration services.
        We streamline the integration process, ensuring interoperability between different EHR platforms for efficient
        data exchange. Enhance care coordination, reduce errors, and improve clinical decision-making with integrated
        EHR systems. Trust us to simplify the exchange of medical records and promote continuity of care for better
        patient outcomes.
      </p>
      <button>Schedule Appointment</button>
      <Link href="/">go back</Link>
    </main>
  );
}
