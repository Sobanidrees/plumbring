import React from 'react';
import Services from '../../api/service';
 
const phoneNumber = '17148635486';
 
const initialData = {
  service: '',
  details: '',
  name: '',
  phone: '',
  email: '',
  address: '',
  zip: '',
  date: '',
  time: '',
};
 
export default function ScheduleStepperModal() {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState(initialData);
 
  React.useEffect(() => {
    const handler = (e) => {
      const detail = e?.detail || {};
      setData((d) => ({ ...d, ...detail }));
      setStep(0);
      setOpen(true);
      document.body.classList.add('modal-open');
    };
    window.addEventListener('open-schedule-stepper', handler);
    return () => window.removeEventListener('open-schedule-stepper', handler);
  }, []);
 
  const close = () => {
    setOpen(false);
    setStep(0);
    setData(initialData);
    document.body.classList.remove('modal-open');
  };
 
  const next = () => setStep((s) => Math.min(s + 1, 4));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
 
  const sendWhatsApp = () => {
    const lines = [
      'New Plumbing Service Request',
      `Service: ${data.service || 'N/A'}`,
      `Details: ${data.details || 'N/A'}`,
      `Name: ${data.name || 'N/A'}`,
      `Phone: ${data.phone || 'N/A'}`,
      `Email: ${data.email || 'N/A'}`,
      `Address: ${data.address || 'N/A'}`,
      `ZIP: ${data.zip || 'N/A'}`,
      `Preferred Date: ${data.date || 'N/A'}`,
      `Preferred Time: ${data.time || 'N/A'}`,
    ];
    const text = encodeURIComponent(lines.join('\n'));
    const href = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(href, '_blank', 'noopener,noreferrer');
    close();
  };
 
  if (!open) return null;
 
  const serviceOptions = Services.map((s) => s.sTitle);
 
  return (
    <div className="schedule-stepper-overlay" role="dialog" aria-modal="true">
      <div className="schedule-stepper-modal">
        <div className="modal-header">
          <h3>Schedule Plumbing Service</h3>
          <button className="close-btn" aria-label="Close" onClick={close}>×</button>
        </div>
        <div className="modal-steps">
          <ul className="steps">
            {['Issue','Details','Customer','Schedule','Confirm'].map((label, i) => (
              <li key={label} className={i <= step ? 'active' : ''}>
                <span className="dot" />
                <span className="label">{label}</span>
              </li>
            ))}
          </ul>
        </div>
 
        <div className="modal-body">
          {step === 0 && (
            <div className="step step-issue">
              <div className="grid">
                {serviceOptions.slice(0,8).map((title) => (
                  <button
                    key={title}
                    className={`card ${data.service === title ? 'selected' : ''}`}
                    type="button"
                    onClick={() => setData((d) => ({ ...d, service: title }))}
                  >
                    <span className="card-title">{title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
 
          {step === 1 && (
            <div className="step step-details">
              <label htmlFor="details" className="form-label">Describe the issue</label>
              <textarea
                id="details"
                rows={4}
                value={data.details}
                onChange={(e) => setData((d) => ({ ...d, details: e.target.value }))}
                placeholder="Example: kitchen sink leaking under the cabinet; slow drain; loud water heater..."
              />
            </div>
          )}
 
          {step === 2 && (
            <div className="step step-customer">
              <div className="two-col">
                <div>
                  <label className="form-label" htmlFor="name">Full name</label>
                  <input id="name" type="text" value={data.name} onChange={(e)=>setData((d)=>({...d, name:e.target.value}))} />
                </div>
                <div>
                  <label className="form-label" htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" value={data.phone} onChange={(e)=>setData((d)=>({...d, phone:e.target.value}))} />
                </div>
              </div>
              <div className="two-col">
                <div>
                  <label className="form-label" htmlFor="email">Email</label>
                  <input id="email" type="email" value={data.email} onChange={(e)=>setData((d)=>({...d, email:e.target.value}))} />
                </div>
                <div>
                  <label className="form-label" htmlFor="zip">ZIP</label>
                  <input id="zip" type="text" inputMode="numeric" maxLength={5} value={data.zip} onChange={(e)=>setData((d)=>({...d, zip:e.target.value.replace(/\D/g,'')}))} />
                </div>
              </div>
              <div>
                <label className="form-label" htmlFor="address">Address</label>
                <input id="address" type="text" value={data.address} onChange={(e)=>setData((d)=>({...d, address:e.target.value}))} />
              </div>
            </div>
          )}
 
          {step === 3 && (
            <div className="step step-schedule">
              <div className="two-col">
                <div>
                  <label className="form-label" htmlFor="date">Preferred date</label>
                  <input id="date" type="date" value={data.date} onChange={(e)=>setData((d)=>({...d, date:e.target.value}))} />
                </div>
                <div>
                  <label className="form-label" htmlFor="time">Preferred time</label>
                  <select id="time" value={data.time} onChange={(e)=>setData((d)=>({...d, time:e.target.value}))}>
                    <option value="">Select</option>
                    <option>Morning (8–12)</option>
                    <option>Afternoon (12–4)</option>
                    <option>Evening (4–7)</option>
                  </select>
                </div>
              </div>
            </div>
          )}
 
          {step === 4 && (
            <div className="step step-confirm">
              <ul className="review">
                {Object.entries({
                  Service: data.service,
                  Details: data.details,
                  Name: data.name,
                  Phone: data.phone,
                  Email: data.email,
                  Address: data.address,
                  ZIP: data.zip,
                  Date: data.date,
                  Time: data.time,
                }).map(([k,v])=>(
                  <li key={k}><strong>{k}:</strong> <span>{v || '—'}</span></li>
                ))}
              </ul>
            </div>
          )}
        </div>
 
        <div className="modal-footer">
          <button className="btn theme-btn-s2 alt" type="button" onClick={close}>Cancel</button>
          {step > 0 && <button className="btn theme-btn-s2" type="button" onClick={prev}>Back</button>}
          {step < 4 && <button className="btn theme-btn" type="button" onClick={next} disabled={step===0 && !data.service}>Continue</button>}
          {step === 4 && <button className="btn theme-btn" type="button" onClick={sendWhatsApp}>Send via WhatsApp</button>}
        </div>
      </div>
    </div>
  );
}
