import React, { useRef } from 'react';
import '../sass/contact.scss'
import { FaEnvelope } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import { IoIosSend } from "react-icons/io";
import emailjs from '@emailjs/browser';
import TypeWriterEffect from 'react-typewriter-effect';
// import Maps from '../components/Maps';
import Iframe from 'react-iframe'

const Contact = () => {

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u7pjc3s', 'template_0puyrt9', form.current, 'CJvtl4boYxE2sk9c7')
    fetch("/", {
      method: "post",
      action: "/action_page.php",
      target: "_blank",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert(`
  Dear ${name}, 

  Thank you for writing to me. 

  I have just received your message, and I will be in touch soon. 

  Kind regards, 
  Pedro Fernandes
      `))
      .catch((error) => alert(error));
  };

  return (
    <section className='sectionC'>
      <h1 className='h1C'>CONTACT</h1>
      <div className='divC'></div>

      <div className='containerC'>
        <TypeWriterEffect
          textStyle={{
            fontFamily: 'inherit',
            color: '$white',
            fontSize: '18px',
            textAlign: 'center',
          }}
          startDelay={100}
          typeSpeed={50}
          hideCursorAfterText="true"
          cursorColor="white"
          text="Let’s work together..."
        />
        <TypeWriterEffect
          textStyle={{
            fontFamily: 'inherit',
            color: '$white',
            fontSize: '18px',
            textAlign: 'center',
          }}
          startDelay={2000}
          typeSpeed={50}
          cursorColor="white"
          hideCursorAfterText="true"
          text="by making your vision a reality!"
        />

        <div className='flexboxC'>
          <div className='boxC box1C'>
            <FaEnvelope className='emailC' size={30} />
            <p><a href="mailto:pedrofernandes@hotmail.co.uk?cc=&bcc=&subject=Mail from PF Website&body="
              title="Send an email"
              rel="noreferrer"
              style={{ color: 'white', textDecoration: 'none', cursor: 'pointer', fontWeight: 'normal' }}>pedrofernandes@hotmail.co.uk</a>
            </p>
          </div>
          <div className='boxC box2C'>
            <MdLocationPin className='locationC' size={30} />
            <p>London, UK</p>
          </div>
          <div className='boxC box3C'>
            <ImMobile className='phoneNrC' size={28} />
            <p>Available upon request</p>
          </div>
        </div>


        <form
          name='contact'
          ref={form}
          onSubmit={sendEmail}
          className='formC'
        >

          <div className='textInputA'>
            <input
              className='inputC'
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
              placeholder='Name'
              required
            />
          </div>

          <div className='textInputB'>
            <input
              className='inputC'
              type='tel'
              id='phone'
              name='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Phone number (optional)'
              pattern='[0-9]{3}[0-9]{4}[0-9]{4}'
            />
          </div>

          <div className='textInputC'>
            <input
              className='inputC'
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              required
            />
          </div>

          <div className='textInputD'>
            <input
              className='inputC'
              type='text'
              id='subject'
              name='subject'
              value={subject}
              onChange={(e) => setSubject(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
              placeholder='Subject (optional)'
            />
          </div>

          <div className='textInputE'>
            <textarea
              className='textareaC'
              id='message'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
              rows="3"
              cols="30"
              placeholder='Message'
              required
            >
            </textarea>
          </div>

          <button className='buttonC' type="submit"          >
            <IoIosSend className='sendC' size={30} />Submit
          </button>
        </form>

        <Iframe
          url=""
          src='https://www.google.com/maps/embed/v1/place?q=London+N7+6rz&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
          width="1100px"
          height="500px"
          id=""
          className="map"
          display="block"
          position="relative"
          frameBorder={0}
          allowFullScreen
        />
      </div>

    </section >
  )
}

export default React.memo(Contact)