import React, { useEffect, useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import VideoModal from '../ModalVideo/VideoModal';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Appointment = () => {


    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        zip: '',
        time: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const router = useRouter();
    const [date, setDate] = useState(null);
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };
    useEffect(() => {
        const { service, zip } = router.query || {};
        const nextState = { ...forms };
        if (service && !nextState.subject) nextState.subject = String(service).replace(/-/g, ' ');
        if (zip && !nextState.zip) nextState.zip = String(zip);
        setForms(nextState);
    }, [router.query]);

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                zip: '',
                time: '',
                message: ''
            })
            setDate(null)
        } else {
            validator.showMessages();
        }
    };


    return (
        <section className="wpo-contact-section section-padding">
            <div className="wpo-contact-img">
                <img src='/images/contact.jpg' alt="" />
                <VideoModal iframeSrc="https://www.youtube.com/embed/ScMzIvxBSi4" iframeTitle="Intro Video" />
            </div>
            <div className="wpo-contact-img-s2">
                <img src='/images/contact.png' alt="" />
            </div>
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-contact-form-area">
                                <div className="wpo-section-title-s2">
                                    <span>Book Plumbing Service</span>
                                    <h2>Schedule your appointment</h2>
                                </div>
                                <div className="d-flex flex-wrap gap-2 mb-3">
                                    <span className="badge bg-primary">Licensed & Insured</span>
                                    <span className="badge bg-success">Upfront Pricing</span>
                                    <span className="badge bg-info text-dark">Same‑Day Service</span>
                                </div>
                                <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
                                    <div className="row">
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-group">
                                                <label>Full name here*</label>
                                                <input
                                                    className="form-control"
                                                    value={forms.name}
                                                    type="text"
                                                    name="name"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Your Name" />
                                            {validator.message('name', forms.name, 'required|alpha_space')}
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-group">
                                                <label>Email here*</label>
                                                <input
                                                    className="form-control"
                                                    value={forms.email}
                                                    type="email"
                                                    name="email"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Your Email" />
                                                {validator.message('email', forms.email, 'required|email')}
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-group">
                                                <label>Contact number*</label>
                                                <input
                                                    className="form-control"
                                                    value={forms.phone}
                                                    type="phone"
                                                    name="phone"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Your phone" />
                                                {validator.message('phone', forms.phone, 'required|phone')}
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-group">
                                                <label>Select service*</label>
                                                <select className="form-control"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    value={forms.subject}
                                                    type="text"
                                                    name="subject">
                                                    <option>Choose a Service</option>
                                                    <option>Kitchen plumbning</option>
                                                    <option>Gas Line Services</option>
                                                    <option>Water Line Repair</option>
                                                    <option>Bathroom Plumbing</option>
                                                    <option>Basement Plumbing</option>
                                                </select>
                                                {validator.message('subject', forms.subject, 'required|alpha_space')}
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-group">
                                                <label>ZIP code</label>
                                                <input
                                                    className="form-control"
                                                    value={forms.zip}
                                                    type="text"
                                                    name="zip"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="ZIP (optional)" />
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-group">
                                                <label>Preferred date</label>
                                                <DatePicker
                                                    selected={date}
                                                    onChange={(d) => setDate(d)}
                                                    className="form-control"
                                                    placeholderText="Choose a date"
                                                    minDate={new Date()}
                                                />
                                            </div>
                                        </div>
                                        <div className="col col-lg-12 col-12">
                                            <div className="form-group">
                                                <label>Preferred time</label>
                                                <div className="d-flex flex-wrap gap-2">
                                                    <label className="btn btn-outline-secondary btn-sm">
                                                        <input type="radio" name="time" value="Morning" className="d-none" onChange={changeHandler} checked={forms.time === 'Morning'} />
                                                        Morning
                                                    </label>
                                                    <label className="btn btn-outline-secondary btn-sm">
                                                        <input type="radio" name="time" value="Afternoon" className="d-none" onChange={changeHandler} checked={forms.time === 'Afternoon'} />
                                                        Afternoon
                                                    </label>
                                                    <label className="btn btn-outline-secondary btn-sm">
                                                        <input type="radio" name="time" value="Evening" className="d-none" onChange={changeHandler} checked={forms.time === 'Evening'} />
                                                        Evening
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col fullwidth col-lg-12 ">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    value={forms.message}
                                                    type="text"
                                                    name="message"
                                                    placeholder="Describe the issue or request">
                                                </textarea>
                                                {validator.message('message', forms.message, 'required')}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn">Book Now</button>
                                        <a href="tel:+17148635486" className="theme-btn-s2 ms-2">Call 714-863-5486</a>
                                    </div>
                                </form>
                                <div className="border-style"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Appointment;
