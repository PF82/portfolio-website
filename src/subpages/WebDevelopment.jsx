import React from 'react'
import '../sass/webdevelopment.scss'

import img1 from '../images/services/web-development/web-design-and-development-services.png'
import img2 from '../images/services/web-development/e-commerce-services.png'
import img3 from '../images/services/web-development/domain-and-hosting-services.png'
import img4 from '../images/services/web-development/seo-services.png'
import img5 from '../images/services/web-development/conversion-rate optimization-services.png'
import img6 from '../images/services/web-development/content-marketing-services.png'
import img7 from '../images/services/web-development/social-media-marketing-services.png'
import img8 from '../images/services/web-development/support-services.png'

const WebDevelopment = () => {
  return (
    <section className='sectionMar'>
      <div className='divMar'>
        <h3>WEB DESIGN AND DEVELOPMENT & DIGITAL MARKETING</h3>

        <div className='containerMar'>
          <div className='boxMar'>
            <img src={img1} alt='web-design-and-development-services' className='imageMar' />
            <div className='overlayMar'>
              <div className='textMar' title='' target='_blank' rel="noreferrer" href="https://www.invisionapp.com/defined/web-design-and-development">
                <b>Web Design and Development Services</b>
                <p>
                  Web design and development is an umbrella term that describes the process of creating a website or a web application. Like the name suggests,
                  it involves two major skill sets: web design and web development. Web design determines the look and feel of a website or an app, while web
                  development determines how it functions.
                </p>
              </div>
            </div>
          </div>

          <div className='boxMar'>
            <img src={img2} alt='e-commerce-services' className='imageMar' />
            <div className='overlayMar'>
              <div className='textMar' title='' target='_blank' rel="noreferrer" href="https://sell.amazon.com/learn/what-is-ecommerce">
                <b>Ecommerce Services</b>
                <p>
                  An ecommerce website is your digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you
                  showcase your products, and your online customers make their selections. Your website acts as the product shelves, sales staff, and cash register of your online
                  business channel.
                </p>
              </div>
            </div>
          </div>

          <div className='boxMar'>
            <img src={img3} alt='domain-and-hosting-services' className='imageMar' />
            <div className='overlayMar'>
              <div className='textMar' title='' target='_blank' rel="noreferrer" href="https://support.squarespace.com/hc/en-us/articles/215754007-Web-hosting-vs-domain-hosting#:~:text=domain%20hosting-,Last%20updated%20March%2010%2C%202022,help%20visitors%20access%20website%20content.">
                <b>Domain and Hosting Services</b>
                <p>
                  While closely related, domain hosting and web hosting are two different services. Domain hosts provide domain names, which are the addresses that help
                  visitors access a website or a web application content. Web hosts store content, like a website or an app, on internet servers.
                </p>
              </div>
            </div>
          </div>

          <div className='boxMar'>
            <img src={img4} alt='seo-services' className='imageMar' />
            <div className='overlayMar'>
              <div className='textMar' title='' target='_blank' rel="noreferrer" href="https://www.techopedia.com/definition/1595/seo-services#:~:text=SEO%20(Search%20Engine%20Optimization)%20services,for%20the%20search%20engine%20crawlers.">
                <b>SEO Services</b>
                <p>
                  SEO (Search Engine Optimization) services primarily falls into the domain of internet marketing for designing and execution of internet strategy and web
                  development for optimizing web page's elements so that they appear meaningful for the search engine crawlers.
                </p>
              </div>
            </div>
          </div>

          <div className='boxMar'>
            <img src={img5} alt='conversion-rate-optimization-services' className='imageMar' />
            <div className='overlayMar'>
              <div className='textMar' title='' target='_blank' rel="noreferrer" href="https://www.hotjar.com/conversion-rate-optimization/cro-program/">
                <b>CRO Services</b>
                <p>
                  A CRO (Conversion Rate Optimization) program, also known as a CRO plan, is a digital marketing strategy that businesses develop for improving the
                  conversion rate of their website or app. CRO programs involve analyzing an entire website to find obstacles to conversion and then optimizing web
                  pages to improve conversion.
                </p>
              </div>
            </div>
          </div>

          <div className='boxMar'>
            <img src={img6} alt='content-marketing-services' className='imageMar' />
            <div className='overlayMar'>
              <div className='textMar' title='' target='_blank' rel="noreferrer" href="https://mailchimp.com/en-gb/marketing-glossary/content-marketing/#:~:text=Content%20marketing%20is%20a%20marketing,to%20buy%20what%20you%20sell.">
                <b>CM Services</b>
                <p>
                  CM (Content marketing) is a marketing strategy used to attract, engage, and retain an audience by creating and sharing relevant articles, videos, podcasts, and
                  other media. This approach establishes expertise, promotes brand awareness, and keeps your business top of mind when it's time to buy what you sell.
                </p>
              </div>
            </div>
          </div>

          <div className='boxMar'>
            <img src={img7} alt='social-media-marketing-services' className='imageMar' />
            <div className='overlayMar'>
              <div className='textMar' title='' target='_blank' rel="noreferrer" href="https://www.techtarget.com/whatis/definition/social-media-marketing-SMM#:~:text=Social%20media%20marketing%20(SMM)%20is,traffic%20to%20a%20website%3B%20and">
                <b>SMM Services</b>
                <p>
                  SMM (Social Media Marketing) is a form of internet marketing that uses social media apps as a marketing tool. These social media platforms enable brands
                  to connect with their audience to: build a brand, increase sales, drive traffic to a website or a web application, and build a community of followers to
                  share and engage with content.
                </p>
              </div>
            </div>
          </div>

          <div className='boxMar'>
            <img src={img8} alt='support-services' className='imageMar' />
            <div className='overlayMar'>
              <div className='textMar' title='Support Services' target='_blank' rel="noreferrer" href="https://www.indeed.com/career-advice/finding-a-job/what-is-support-services#:~:text=Support%20services%20are%20processes%20that,resources%2C%20IT%20and%20customer%20service.">
                <b>Support Services</b>
                <p>
                  Support services typically refer to a business' use of technology in the workplace. Some technologies offer support services through third-party entities,
                  also known as IT support services. These services provide the necessary support to ensure a business operates technology in an efficient and safe manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default WebDevelopment