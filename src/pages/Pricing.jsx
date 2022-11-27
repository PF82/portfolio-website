import React from 'react'
import "../pages/pricing.css"

const Pricing = () => {
  return (
    <section className='pricing'>
      <h1 className='h1-pricing'>PRICING PLAN</h1>
      <br />
      <div className='table'>
        <div className='table-body'>
          <div className='table-row-heading'>
            <p>PERSONAL <br />WEBSITE</p>
          </div>
          <div className='table-row'>
            <p><b>Estimated Time</b><br />40 Hours</p>
          </div>
          <div className='table-row'>
            <p><b>Hourly Rate</b><br />£15</p>
          </div>
          <div className='table-row'>
            <p><b>Price</b><br />£600</p>
          </div>
        </div>

        <div className='table-body'>
          <div className='table-row-heading'>
            <p>SMALL BUSINESS <br />WEBSITE</p>
          </div>
          <div className='table-row'>
            <p><b>Estimated Time</b><br />80 Hours</p>
          </div>
          <div className='table-row'>
            <p><b>Hourly Rate</b><br />£15</p>
          </div>
          <div className='table-row'>
            <p><b>Price</b><br />£1,200</p>
          </div>
        </div>

        <div className='table-body'>
          <div className='table-row-heading'>
            <p>CORPORATE <br />WEBSITE</p>
          </div>
          <div className='table-row'>
            <p><b>Estimated Time</b><br />120 Hours</p>
          </div>
          <div className='table-row'>
            <p><b>Hourly Rate</b><br />£15</p>
          </div>
          <div className='table-row'>
            <p><b>Price</b><br />£1,800</p>
          </div>
        </div>

        <div className='table-body'>
          <div className='table-row-heading'>
            <p>WEB APPLICATION <br />(SIMPLE)</p>
          </div>
          <div className='table-row'>
            <p><b>Estimated Time</b><br />160 Hours</p>
          </div>
          <div className='table-row'>
            <p><b>Hourly Rate</b><br />£15</p>
          </div>
          <div className='table-row'>
            <p><b>Price</b><br />£2,400</p>
          </div>
        </div>

        <div className='table-body'>
          <div className='table-row-heading'>
            <p>WEB APPLICATION <br />(AVERAGE)</p>
          </div>
          <div className='table-row'>
            <p><b>Estimated Time</b><br />200 Hours</p>
          </div>
          <div className='table-row'>
            <p><b>Hourly Rate</b><br />£15</p>
          </div>
          <div className='table-row'>
            <p><b>Price</b><br />£3,000</p>
          </div>
        </div>

        <div className='table-body'>
          <div className='table-row-heading'>
            <p>WEB APPLICATION <br />(COMPLEX)</p>
          </div>
          <div className='table-row'>
            <p><b>Estimated Time</b><br />300 Hours</p>
          </div>
          <div className='table-row'>
            <p><b>Hourly Rate</b><br />£15</p>
          </div>
          <div className='table-row'>
            <p><b>Price</b><br />£4,500</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing