import React from 'react'
import "../pages/pricing.css"

const Pricing = () => {
  return (
    <section className='pricing'>
      <h1 className='h1-pricing'>PRICING PLAN</h1>
      <br />
      <table>
        <tbody>
          <tr className='heading'>
            <b>PERSONAL <br />WEBSITE</b>
          </tr>
          <tr>
            <p><b>Estimated Time<br /></b>40 Hours</p>
          </tr>
          <tr>
            <p><b>Hourly Rate<br /></b>£15</p>
          </tr>
          <tr>
            <p><b>Price<br /></b>£600</p>
          </tr>
        </tbody>

        <tbody>
          <tr className='heading'>
            <b>SMALL BUSINESS <br />WEBSITE</b>
          </tr>
          <tr>
            <p><b>Estimated Time<br /></b>80 Hours</p>
          </tr>
          <tr>
            <p><b>Hourly Rate<br /></b>£15</p>
          </tr>
          <tr>
            <p><b>Price<br /></b>£1,200</p>
          </tr>
        </tbody>

        <tbody>
          <tr className='heading'>
            <b>CORPORATE <br />WEBSITE</b>
          </tr>
          <tr>
            <p><b>Estimated Time<br /></b>120 Hours</p>
          </tr>
          <tr>
            <p><b>Hourly Rate<br /></b>£15</p>
          </tr>
          <tr>
            <p><b>Price<br /></b>£1,800</p>
          </tr>
        </tbody>

        <tbody>
          <tr className='heading'>
            <b>WEB APPLICATION <br />(SIMPLE)</b>
          </tr>
          <tr>
            <p><b>Estimated Time<br /></b>160 Hours</p>
          </tr>
          <tr>
            <p><b>Hourly Rate<br /></b>£15</p>
          </tr>
          <tr>
            <p><b>Price<br /></b>£2,400</p>
          </tr>
        </tbody>

        <tbody>
          <tr className='heading'>
            <b>WEB APPLICATION <br />(AVERAGE)</b>
          </tr>
          <tr>
            <p><b>Estimated Time<br /></b>200 Hours</p>
          </tr>
          <tr>
            <p><b>Hourly Rate<br /></b>£15</p>
          </tr>
          <tr>
            <p><b>Price<br /></b>£3,000</p>
          </tr>
        </tbody>

        <tbody>
          <tr className='heading'>
            <b>WEB APPLICATION <br />(COMPLEX)</b>
          </tr>
          <tr>
            <p><b>Estimated Time<br /></b>300 Hours</p>
          </tr>
          <tr>
            <p><b>Hourly Rate<br /></b>£15</p>
          </tr>
          <tr>
            <p><b>Price<br /></b>£4,500</p>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Pricing