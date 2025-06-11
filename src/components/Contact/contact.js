import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'user_name':
        setName(value);
        break;
      case 'user_email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    if (!name ||!email ||!message) {
      setError('Please fill in all fields');
      return false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setError('Invalid email address');
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
       .sendForm('service_7chuvxb', 'template_89pl3oj', form.current, {
          publicKey: '-i9Yj8PnMobStwn24',
        })
       .then(
          () => {
            setSuccess('Email sent successfully!');
            setError(null);
            setTimeout(() => {
              setSuccess(null);
            }, 2000);
            console.log("sucess!");
          },
          () => {
            setError('Error sending email');
            setTimeout(() => {
              setError(null);
            }, 2000);
            console.log('FAILED...');
          }
        );
    }
  };

  return (
    <section id='contact'>
      <div className='contactTitle'>
        <h4 className='titleContact'>CONTACT ME</h4>
        <span className='contactDes'>Please fill the below section to discuss</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input
            className='nametitle'
            type='text'
            placeholder='Your name'
            name='user_name'
            value={name}
            onChange={handleInputChange}
          />
          <input
            className='email'
            type='email'
            placeholder='example@gmail.com'
            name='user_email'
            value={email}
            onChange={handleInputChange}
          />
          <textarea
            className='msg'
            name='message'
            rows='5'
            placeholder='Enter a Message'
            value={message}
            onChange={handleInputChange}
          />
          {error && <div className='errorMessage'>{error}</div>}
          {success && <div className='successMessage'>{success}</div>}
          <button className='submitBtn' type='submit'>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
