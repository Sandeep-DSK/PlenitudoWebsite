import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden">
      {/* navbar mobile */}
      <Navbar></Navbar>

      {/* main */}
      <div className="bg-[url(images/cta-main.jpg)] bg-cover bg-center h-screen w-screen">
        <div>Empowering seamless healthcare experiences with cutting-edge technology</div>
        <div>plenitudo solutions</div>
      </div>

      {/* about */}
      <div>
        <div>Empowering healthcare</div>
        <div>Revolutionizing Healthcare Solutions</div>
        <p>
          Plenitudo Solutions is dedicated to providing cutting-edge IT services tailored for the healthcare industry.
          Our innovative solutions streamline processes and enhance patient care, ensuring efficiency and excellence in
          healthcare delivery.
        </p>
        <button>get in touch</button>
      </div>

      {/* services */}
      <div>
        <div>our services</div>
        <div>Transforming Healthcare IT</div>
        <span>
          Enhance your healthcare operations with our comprehensive IT solutions designed to optimize efficiency,
          security, and patient care delivery.
        </span>
        <div className="grid grid-row-3 grid-cols-3 border-2 border-red-500 gap-5">
          <div className="border-2 border-purple-500">
            <div className="border-2 h-48 w-48 bg-green-500">image</div>
            <Link href={'/telemedicine-solutions'}>Telemedicine solutions</Link>
            <p>Revolutionizing healthcare with remote consultations.</p>
          </div>
          <div className="border-2 border-purple-500">
            <div className="border-2 h-48 w-48 bg-green-500">image</div>
            <Link href={'/data-security-services'}>Data Security Services</Link>
            <p>Protecting sensitive healthcare information.</p>
          </div>
          <div className="border-2 border-purple-500">
            <div className="border-2 h-48 w-48 bg-green-500">image</div>
            <Link href={'/healthcare-analytics-solutions '}>Healthcare Analytics Solutions</Link>
            <p>Unlocking insights for data-driven decisions.</p>
          </div>
          <div className="border-2 border-purple-500">
            <div className="border-2 h-48 w-48 bg-green-500">image</div>
            <Link href={'appointment-scheduling-system'}>Appointment Scheduling System </Link>
            <p>Efficiently manage patient appointments.</p>
          </div>
          <div className="border-2 border-purple-500">
            <div className="border-2 h-48 w-48 bg-green-500">image</div>
            <Link href={'remote-monitoring-solutions'}>Remote Monitoring Solutions</Link>
            <p>Monitoring patient health remotely.</p>
          </div>
          <div className="border-2 border-purple-500">
            <div className="border-2 h-48 w-48 bg-green-500">image</div>
            <Link href={'ehr-integration-services'}>EHR Integration Services</Link>
            <p>Seamlessly integrate electronic health records.</p>
          </div>
        </div>
      </div>

      {/* contact */}
      <div>
        <div>get in touch</div>
        <div>
          Reach out to us today to discover how our IT services can elevate your healthcare organization to new heights.
        </div>
        <div>Plenitudo Online Services Private Limited</div>
        <div>conact@plenitudosolutions.com</div>
        <div>Visakhapatnam, Andra Padesh India</div>
        <div>Plenitudo</div>
        <div>solutions</div>
      </div>
    </main>
  );
}
