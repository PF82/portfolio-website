import React from 'react'
import "../pages/contact.css"
import { GoogleMap } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/withScriptjs';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 51.546506, lng: -0.105806 }}
    />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const Contact = () => {
  return (
    <section className='contact'>
      <h1 className='h1-contact'>Contact and Location Map</h1>

<WrappedMap 


      {/* <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map> */}
    </section>
  )
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDjW1pVa41w0qHkK6mmdIGarzjtUjhaN_U")
})(Contact)