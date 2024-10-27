import React, { useEffect } from 'react';

export default function Calendly() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* mobile */}
      <div
        className="calendly-inline-widget sm:hidden"
        data-url="https://calendly.com/plenitudoonlineservices/30min"
        style={{ minWidth: '350px', height: '700px' }}
      ></div>
      {/* 1440 */}
      <div
        className="calendly-inline-widget hidden sm:block"
        data-url="https://calendly.com/plenitudoonlineservices/30min"
        style={{ minWidth: '350px', height: '800px' }}
      ></div>
    </>
  );
}
