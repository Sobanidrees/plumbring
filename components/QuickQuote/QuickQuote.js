import React, { useMemo, useState } from 'react';
import Link from 'next/link';

const supportedZips = [
  '91701','91730','91737','91739','91761','91762','91764','91784','91786','91709',
  '92335','92336','92337','92401','92404','92405','92407','92501','92503','92504',
  '92505','92507','92508','92879','92880','92881','92882','92883','92865','92866',
  '92867','92868','92869','92831','92832','92833','92821','92823','92886','92887',
  '92870'
];

const services = [
  'Leak Repair',
  'Drain Cleaning',
  'Water Heater',
  'Toilet & Faucet',
  'Pipe Replacement',
  'Sewer Line',
];

const QuickQuote = () => {
  const [zip, setZip] = useState('');
  const [service, setService] = useState('');
  const validZip = useMemo(() => supportedZips.includes(zip), [zip]);

  return (
    <section className="wpo-quick-quote py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="p-3 p-md-4 bg-light rounded-3">
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                <h3 className="m-0">Get a quick quote</h3>
                <span className="badge bg-primary">Local Service Coverage</span>
              </div>
              <div className="row g-2">
                <div className="col-md-5">
                  <select
                    className="form-select"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="">Choose a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={5}
                    placeholder="ZIP code"
                    value={zip}
                    onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, ''))}
                  />
                </div>
                <div className="col-md-4 d-grid">
                  <Link
                    href={`/appointment${service || zip ? `?service=${encodeURIComponent(service)}&zip=${encodeURIComponent(zip)}` : ''}`}
                    className={`btn ${validZip && service ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    {validZip && service ? 'Continue to Booking' : 'Select service and ZIP'}
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                {zip && (
                  <small className={`text-${validZip ? 'success' : 'danger'}`}>
                    {validZip
                      ? 'We service your area.'
                      : 'Not in our coverage list yet. Call to confirm availability.'}
                  </small>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickQuote;
