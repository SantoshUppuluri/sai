import React, { useRef }from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const showToastMessage = () => {
  };
  
  



const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pqn4oq4', 'template_1edw6lv', form.current, {
        publicKey: '-i9Yj8PnMobStwn24',
      })
      .then(
        () => {
          showToastMessage()
            console.log("sucess!");
          },
          () => {
            showToastMessage()
            console.log('FAILED...');
          }
      );
  };
  
  return (
    <section id='contact'>
      <div className='contactTitle'>
        <h4 className='titleContact'>CONTACT ME</h4>
        <span className='contactDes'>Please fill the below section to discuss</span> 
        <form className='contactForm' ref={form}  onSubmit={sendEmail}>
          <input className='nametitle' type='text' placeholder='Your name' name='user_name'/>
          <input className='email' type='email' placeholder='example@gmail.com' name='user_email'/>
          <textarea className='msg' name='message' rows='5' placeholder='Enter a Message'></textarea>
          <button className='submitBtn' type='submit'>Submit</button>
          {/* <ToastContainer/> */}
        </form>
      </div>
    </section>
  )
}

export default Contact