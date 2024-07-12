import Link from 'next/link';

export default function Remote() {
  return (
    <main>
      <div>Remote monitoring solutions</div>
      <p>
        Monitor patients health conditions in real-time with our remote monitoring solutions. Receive instant alerts for
        abnormal vital signs, medication reminders, and personalized care plans, enabling timely interventions and
        proactive healthcare management. Our remote monitoring technology enhances patient engagement, improves
        treatment adherence, and reduces hospital readmissions, promoting better health outcomes and quality of life.
      </p>
      <button>Schedule Appointment</button>
      <Link href="/">go back</Link>
    </main>
  );
}
