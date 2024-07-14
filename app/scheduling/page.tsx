import Link from 'next/link';

export default function Scheduling() {
  return (
    <main>
      <div>Meeting request form</div>
      <div>We look forward to meeting with you</div>
      <p>
        To schedule an appointment, pick a time that works for you and share your contact information. After you submit
        the form, check your email for an appointment confirmation.
      </p>
      <Link href={'/'}>Submit</Link>
      <Link href="/">go back</Link>
    </main>
  );
}
