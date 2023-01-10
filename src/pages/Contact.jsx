import React, { useState, useEffect, useRef } from 'react';
import '../sass/contact.scss'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { FaEnvelope } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import { IoIosSend } from "react-icons/io";
import emailjs from '@emailjs/browser';

const containerStyle = {
  width: '100%',
  height: '600px'
};

const location = {
  lat: 51.5544,
  lng: -0.1147
};

const Contact = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     fetch("/", {
  //       method: "post",
  //       action: "/action_page.php",
  //       target: "_blank",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: encode({ "form-name": "contact", name, email, message }),
  //     })
  //       .then(() => alert(`
  // Dear ${name}, 

  // I have just received your message. Thank you for writing to me. 

  // I'm working on your request and will get in touch as soon as possible. 

  // If it is an urgent matter, please call me on +447 951 255 944. I am happy to be of your assistance. 

  // Kind regards, 
  // PF
  //     `))
  //       .catch((error) => alert(error));
  //   }

  const [zoom, setZoom] = useState(10)

  useEffect(() => {
    setTimeout(() => {
      setZoom(11)
    }, 1000);
  }, [])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u7pjc3s', 'template_0puyrt9', form.current, 'CJvtl4boYxE2sk9c7')
      .then((result) => {
        console.log(result.text);
        console.log("Message sent");
      }, (error) => {
        console.log(error.text);
      });
  };

  return isLoaded ? (
    <section className='sectionC'>
      <h1 className='h1C'>CONTACT ME</h1>
      <div className='divC'></div>

      <div className='containerC'>
        <div className='flexboxC'>
          <div className='boxC box1C'>
            <FaEnvelope className='emailC' size={30} />
            <p>pf@gmail.com</p>
          </div>
          <div className='boxC box2C'>
            <MdLocationPin className='locationC' size={30} />
            <p>London, UK</p>
          </div>
          <div className='boxC box3C'>
            <ImMobile className='phoneNrC' size={30} />
            <p>+447 951 255 944</p>
          </div>
        </div>

        <hr />

        {/* https://www.w3schools.com/react/react_forms.asp */}
        <form
          name='contact'
          ref={form}
          onSubmit={sendEmail}
          className='formC'
        // method='post'
        // action="/action_page.php"
        // target="_blank"
        >
          <div className='textInputC'>
            <label className='labelC'>Name:</label>
            <input
              className='inputC'
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
              placeholder=''
              required
            />
          </div>
          <div className='textInputC'>
            <label className='labelC'>Email:</label>
            <input
              className='inputC'
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=''
              required
            />
          </div>
          <div className='textInputC'>
            <label className='labelC'>Message:
              <textarea
                className='textareaC'
                id='message'
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="3"
                cols="30"
                placeholder=''
                required
              >
              </textarea>
            </label>
          </div>
          <button
            className='buttonC'
            type="submit"
          >
            <IoIosSend className='sendC' size={30} />Submit
          </button>
        </form>

        <hr />

        <div className='googleMapC'>
          <GoogleMap
            mapContainerClassName='mapC'
            mapContainerStyle={containerStyle}
            center={location}
            zoom={zoom}
          >
            <Marker position={location} />
          </GoogleMap>
        </div>
      </div>

    </section>
  ) : <></>
}

export default React.memo(Contact)