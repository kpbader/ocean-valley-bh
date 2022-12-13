import './contact-form.css';
import { useState, useRef } from 'react';

function ContactForm() {
    const form = useRef();
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = contactForm;
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <form id="contact-form">
            <h3 id="contact-form-header">Have questions?</h3>
            <h4>Don't wait! Our staff is ready to help. Reach out today.</h4>
            <div id="form-slot-1">
                <label htmlFor="name">Name</label>
                <input type="text" defaultValue={name} name="name" />
            </div>
            <div id="form-slot-2">
                <label htmlFor="email">Email</label>
                <input type="email" defaultValue={email} name="email" />
            </div>
            <div id="form-slot-3">
                <label htmlFor="message">Message</label>
                <textarea name="message" defaultValue={message} rows="10" cols="45" />
            </div>
            <button type="submit" className="contact-submit-btn">Submit</button>
        </form>
    )
}

export default ContactForm;