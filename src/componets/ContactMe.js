import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {
  const form = useRef();
  const [email, setEmail] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    // Validar el correo electrónico
    if (!validator.isEmail(email)) {
      toast.error('Invalid email address');
      return;
    }
    
    try {
      const result = await emailjs.sendForm('service_ws3wcqq', 'template_7jhnjec', form.current, 'zK60Pt7Q8_KH6RxjF');
      console.log(result.text);
      toast.success('Email sent successfully');
    } catch (error) {
      console.error(error.text);
      toast.error('Error sending email');
    }    
  };

  return (
    <div className='bg-black items-center justify-center text-center mx-2 lg:mx-72 lg:rounded-4xl lg:mt-10 rounded-xl' id='join-us'>
      <div className='mb-4'>
        <div className='pt-4 lg:pt-10'>
          <span className='text-white'>READY TO </span>
          <span className='text-white'>LEVEL UP</span>
        </div>
        <div>
          <span className='text-white'>YOUR BODY </span>
          <span className='text-white'>WITH US?</span>
        </div>
      </div>
      <div className='rounded-2xl mb-10 pb-4' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form ref={form} action='' className='rounded-xl ' onSubmit={sendEmail}>
          <div className='mb-4'>
            <input
              type='text'
              name='user_name'
              placeholder='Enter your name...'
              className='rounded-xl p-2 w-64'
            />
          </div>
          <div className='mb-4'>
            <input
              type='email'
              name='user_email'
              placeholder='Enter your E-mail...'
              className='rounded-xl p-2 w-64'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <textarea
              id="exampleFormControlTextarea1"
              rows="7"
              placeholder="Your message"
              className='rounded-xl lg:w-[500px] w-72'
            />
          </div>
          <button className='btn lg:ml-52 ml-24 text-center bg-blue-600 mt-2 mb-3'>JOIN NOW</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactMe;
