import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactStyles.module.css'

const ContactForm = () => {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', formRef.current, 'ISVBtzGSIyzSXhDGC')
      .then(
        (result) => {
          console.log('Success:', result.text);
          setIsSubmitted(true); // update state to indicate submission
        },
        (error) => {
          console.error('Email error:', error.text);
          setError('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
        <br/>
        <h1 className="sectionTitle">Contact</h1>
      {isSubmitted ? (
        <p>Thank you! Your message has been sent.</p>
      ) : (
        <form ref={formRef} onSubmit={sendEmail} className="formGroup" action="">
            <div className="formGroup">
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                />
            </div>
            <div className="formGroup">
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                required
                />
            </div>
            <div className="formGroup">
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea
                name="message"
                id="message"
                placeholder="Message"
                required>

                </textarea>
            </div>
            <input className="hover btn" type="submit" 
            value="Submit"/>
        </form>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </section>
  );
};

export default ContactForm;
