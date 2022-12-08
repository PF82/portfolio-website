import React from 'react'
import './pricing.scss'

const Pricing = () => {
  return (
    <section className='sectionPr'>
      <h1 className='h1Pr'>PRICING PLAN</h1>
      <div className='divPr'></div>
      <br />
      
      <div className='tablePr'>
        <div className='tableBodyPr'>
          <div className='tableRowHeadingPr'>
            <p>PERSONAL <br />WEBSITE</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Estimated Time</b><br />40 - 80 Hours</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Hourly Rate</b><br />£15</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Price</b><br />£600 - £1,200</p>
          </div>
        </div>

        <div className='tableBodyPr'>
          <div className='tableRowHeadingPr'>
            <p>SMALL BUSINESS <br />WEBSITE</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Estimated Time</b><br />80 - 160 Hours</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Hourly Rate</b><br />£15</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Price</b><br />£1,200 - £2,400</p>
          </div>
        </div>

        <div className='tableBodyPr'>
          <div className='tableRowHeadingPr'>
            <p>CORPORATE <br />WEBSITE</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Estimated Time</b><br />120 - 240 Hours</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Hourly Rate</b><br />£15</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Price</b><br />£1,800 - £3,600</p>
          </div>
        </div>

        <div className='tableBodyPr'>
          <div className='tableRowHeadingPr'>
            <p>WEB APPLICATION <br />(SIMPLE)</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Estimated Time</b><br />160 - 240 Hours</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Hourly Rate</b><br />£15</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Price</b><br />£2,400 - £3,600</p>
          </div>
        </div>

        <div className='tableBodyPr'>
          <div className='tableRowHeadingPr'>
            <p>WEB APPLICATION <br />(AVERAGE)</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Estimated Time</b><br />200 - 300 Hours</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Hourly Rate</b><br />£15</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Price</b><br />£3,000 - £4,500</p>
          </div>
        </div>

        <div className='tableBodyPr'>
          <div className='tableRowHeadingPr'>
            <p>WEB APPLICATION <br />(COMPLEX)</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Estimated Time</b><br />300 - 450 Hours</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Hourly Rate</b><br />£15</p>
          </div>
          <div className='tableRowPr'>
            <p><b>Price</b><br />£4,500 - £6,750</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing