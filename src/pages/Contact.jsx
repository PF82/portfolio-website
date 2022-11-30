import React, { useState, useEffect } from 'react';
import "../pages/contact.css";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { FaEnvelope } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import { IoIosSend } from "react-icons/io";

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

  // const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(location);
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [zoom, setZoom] = useState(10)

  useEffect(() => {
    setTimeout(() => {
      setZoom(11)
    }, 1000);
  }, [])

  return isLoaded ? (
    <section className='contact-map'>
      <h1 className='h1-contact'>CONTACT ME</h1>
      <div className='underline'></div>

      <div className='contact-container'>
        <div className='boxes'>
          <div className='box box1'>
            <FaEnvelope className='email' size={30} />
            <p>pf@gmail.com</p>
          </div>
          <div className='box box2'>
            <MdLocationPin className='location' size={30} />
            <p>London, UK</p>
          </div>
          <div className='box box3'>
            <ImMobile className='phone-number' size={30} />
            <p>+447 951 255 944</p>
          </div>
        </div>

        <hr className='line' />

        <form className='contact-form' method='post' action="/action_page.php" target="_blank">
          <div className='text-input'>
            <label className='label'>Name:</label>
            <input
              className='input'
              type="text"
              name='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=''
              required
            />
          </div>
          <div className='text-input'>
            <label className='label'>Email:</label>
            <input
              className='input'
              type="text"
              name='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=''
              required
            />
          </div>
          <div className='text-input'>
            <label className='label'>Message:
              <textarea
                className='textarea'
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="1"
                cols="30"
                placeholder=''>
              </textarea>
            </label>
          </div>

          <button className='submit' type="submit">
            <IoIosSend className='send' size={30} />
            Submit</button>
        </form>

        <hr className='line' />

        <div className='google-map'>
          <GoogleMap
            mapContainerClassName="map"
            mapContainerStyle={containerStyle}
            center={location}
            zoom={zoom}
          // onLoad={onLoad}
          // onUnmount={onUnmount}
          >
            { /* Child components, such as markers, info windows, etc. */}
            <Marker position={location} />
          </GoogleMap>
        </div>
      </div>

    </section>
  ) : <></>
}

export default React.memo(Contact)