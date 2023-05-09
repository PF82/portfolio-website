import React from 'react'
import '../sass/curriculumvitae.scss'
import { HtmlCV, CssCV, JsCV, ReactJsCV, PhotoshopCV, EnglishCV, PortugueseCV, SpanishCV } from '../components/ProgressBars.jsx'

const CurriculumVitae = () => {

    return (
        <section className='sectionCV'>

            <div className='main-container'>
                <div className='grid-container'>
                    <div className='information-skills-languages'>
                        <div className='personal-information'>
                            <h2><b><i className='fas fa-id-card'></i>Personal Information</b></h2>
                            <p><b>Pedro Fernandes</b></p>
                            <p>UI/UX Designer / Front-End Developer</p>
                            <p>London</p>
                            <p><a href="mailto:pedrofernandes@hotmail.co.uk?cc=&bcc=&subject=Mail from PF Website&body="
                                title="Send an email"
                                rel="noreferrer"
                                style={{ color: 'black', textDecoration: 'none', cursor: 'pointer' }}>pedrofernandes@hotmail.co.uk</a>
                            </p>
                            <p><a href="https://pedro-fernandes.netlify.app/"
                                title="Visit website"
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: 'black', textDecoration: 'none', cursor: 'pointer' }}>https://pedro-fernandes.netlify.app</a>
                            </p>
                        </div>
                        <br />

                        <div className='technical-skills'>
                            <h2><b><i className='fas fa-laptop'></i>Technical Skills</b></h2>
                            <p>HTML</p>
                            <div className='htmlCV-1'>
                                <div className='htmlCV-2'><HtmlCV /></div>
                            </div>
                            <p className='pCV'>CSS</p>
                            <div>
                                <div className='cssCV-1'>
                                    <div className='cssCV-2'><CssCV /></div>
                                </div>
                            </div>
                            <p className='pCV'>JavaScript</p>
                            <div className='jsCV-1'>
                                <div className='jsCV-2'><JsCV /></div>
                            </div>
                            <p className='pCV'>React</p>
                            <div className='reactCV-1'>
                                <div className='reactCV-2'><ReactJsCV /></div>
                            </div>
                            <p className='pCV'>Adobe Photoshop</p>
                            <div className='photoshopCV-1'>
                                <div className='photoshopCV-2'><PhotoshopCV /></div>
                            </div>
                        </div>
                        <br />

                        <div className='soft-skills'>
                            <h2><b><i className='fa fa-certificate'></i>Soft Skills</b></h2>
                            <p>Time management</p>
                            <p>Teamwork</p>
                            <p>Communication</p>
                            <p>Critical thinking</p>
                            <p>Problem-solving</p>
                            <p>Adaptability and flexibility</p>
                            <p>Attention to detail</p>
                        </div>
                        <br />

                        <div className='languages'>
                            <h2><b><i className='fas fa-globe-americas'></i>Languages</b></h2>
                            <p>English</p>
                            <div className='englishCV-1'>
                                <div className='englishCV-2'><EnglishCV /></div>
                            </div>
                            <p className='pCV'>Portuguese</p>
                            <div className='portugueseCV-1'>
                                <div className='portugueseCV-2'><PortugueseCV /></div>
                            </div>
                            <p className='pCV'>Spanish</p>
                            <div className='spanishCV-1'>
                                <div className='spanishCV-2'><SpanishCV /></div>
                            </div>
                        </div>
                        <br />

                        <div className='additional-information'>
                            <div className='box-5'>
                                <h2><b><i className='fas fa-address-card'></i>Additional Information</b></h2>
                                <p>UK Driving Licence</p>
                                <p>References available upon request</p>
                                <p>Enjoy football, squash and kayaking</p>
                                <p>Chess and video games enthusiast</p>
                                <p>Love riding my motorbike and travelling</p>
                            </div>
                        </div>
                    </div>

                    <div className='work-experience'>
                        <h2><i className='fa fa-suitcase'></i>Work Experience</h2>
                        <h4><b>Junior UI/UX Designer / Front-End Developer</b></h4>
                        <h4 style={{ fontWeight: 'normal' }}>PF, London, UK</h4>
                        <h5 style={{ fontWeight: 'normal' }}><i className='fas fa-calendar-alt'></i>Sep 2022 - <span>Current</span></h5>
                        <p style={{ textAlign: 'justify', fontSize: '12px' }}>Analysing requirements and gathering information; Assessing UX and UI designs for technical feasibility;
                            Deciding websites and web applications design and structure; Developing websites and apps that are easy to navigate, visually aesthetic,
                            functional, responsive and fast-loading; Applying SEO best practices; Collecting and analysing usage data to improve and optimize
                            performance efficiency.</p>
                        <hr style={{ margin: '10px 0' }} />
                        <h4><b>Quantity Surveyor / Estimator</b></h4>
                        <h4 style={{ fontWeight: 'normal' }}>Develop UK, London, UK</h4>
                        <h5 style={{ fontWeight: 'normal' }}><i className='fas fa-calendar-alt'></i>Apr 2019 - May 2021</h5>
                        <p style={{ textAlign: 'justify', fontSize: '12px' }}>Researching materials, equipment and labour costs; Collecting quotes from subcontractors and suppliers; Forecasting costs; Preparing bills of quantities and tender
                            documents; Procurement and tendering; Value engineering; Producing costs plans; Negotiating, awarding and administering subcontracts, including variations and claims;
                            Valuing completed work and arranging payments; Cost value reconciliations and final accounts.</p>
                        <hr style={{ margin: '10px 0' }} />
                        <h4><b>Quantity Surveyor</b></h4>
                        <h4 style={{ fontWeight: 'normal' }}>VINCI Construction UK, London, UK</h4>
                        <h5 style={{ fontWeight: 'normal' }}><i className='fas fa-calendar-alt'></i>Feb 2010 - Mar 2019</h5>
                        <p style={{ textAlign: 'justify', fontSize: '12px' }}>Participating in handover meetings and receiving tender and contract documents from
                            the estimating department; Ensuring the procurement of consultants, subcontractors and suppliers were in line with the company procedures;
                            Pricing, tendering and contract selection; Identifying, managing, reducing and driving out unnecessary costs and inefficient activities;
                            Preparing design and subcontract orders ensuring compliance with specifications, drawings and employer’s requirements; Maintaining
                            commercial control over all costs; Payments and certifications; Maximising cash flow through timely preparation of valuations, submission
                            of invoices and receipt of payment; Forecasting costs and value; Assisting in the prompt preparation and settlement of final accounts with
                            subcontractors and client, including site instructions, variations, claims and disputes.</p>
                        <hr style={{ margin: '10px 0' }} />
                        <h4><b>Civil Design Technician</b></h4>
                        <h4 style={{ fontWeight: 'normal' }}>Geonius - Civil BV, Breda, Netherlands</h4>
                        <h5 style={{ fontWeight: 'normal' }}><i className='fas fa-calendar-alt'></i>Jun 2007 - May 2009</h5>
                        <p style={{ textAlign: 'justify', fontSize: '12px' }}>Assessing the feasibility study, cost benefit analysis, lifecycle costing and constructability of highways; Determining within the
                            project team the optimum location and preparing conceptual, functional and detailed 3D models; Assisting the surveying
                            department with the earthwork volume calculations for marine and oil & gas pipeline projects. </p>
                        <hr style={{ margin: '10px 0' }} />
                        <h4><b>Architectural Technician</b></h4>
                        <h4 style={{ fontWeight: 'normal' }}>Martifer SGPS, Oliveira de Frades, Portugal</h4>
                        <h5 style={{ fontWeight: 'normal' }}><i className='fas fa-calendar-alt'></i>Mar 2006 - Mar 2007 (Fixed-Term Contract)</h5>
                        <p style={{ textAlign: 'justify', fontSize: '12px' }}>Value engineering; Preparing and reviewing drawings for approval, fabrication and assembly; Accounting,
                            optimizing and ordering materials to be used in manufacturing; Monitoring the preparation and execution of works off-site and on-site.</p>
                    </div>

                    <div className='education-and-training'>
                        <h2><i className='fas fa-graduation-cap'></i>Education and Training</h2>
                        <h4><b>Front-End Web Development</b></h4>
                        <h5 style={{ fontWeight: 'normal' }}><i className='fas fa-calendar-alt'></i>Dec 2021 - Mar 2023</h5>
                        <p style={{ fontSize: '12px' }}>FreeCodeCamp, Interactive Learning Web Platform</p>
                        <hr style={{ margin: '10px 0' }} />
                        <h4><b>Construction Management</b></h4>
                        <h5 style={{ fontWeight: 'normal' }}><i className='fas fa-calendar-alt'></i>Sep 2004 - Dec 2005</h5>
                        <p style={{ fontSize: '12px' }}>Gondomar College, Portugal</p>
                        <hr style={{ margin: '10px 0' }} />
                        <h4><b>Quantity Surveying</b></h4>
                        <h5 style={{ fontWeight: 'normal' }}><i className='fas fa-calendar-alt'></i>Sep 1999 - Jul 2002</h5>
                        <p style={{ fontSize: '12px' }}>Coimbra College, Portugal</p><br />
                    </div>

                    <div className='professional-development'>
                        <h2><i className='fas fa-award'></i>Professional Development</h2>
                        <p>
                            <span>Artificial Intelligence (AI) ChatGPT crash course</span>
                            <span><i className='fas fa-calendar-alt'></i>2023</span>
                        </p>
                        <p>
                            <span>Git & GitHub crash course</span>
                            <span><i className='fas fa-calendar-alt'></i>2022</span>
                        </p>
                        <p>
                            <span>Google Chrome Developer Tools crash course</span>
                            <span><i className='fas fa-calendar-alt'></i>2022</span>
                        </p>
                        <p>
                            <span>Visual Studio Code crash course</span>
                            <span><i className='fas fa-calendar-alt'></i>2021</span>
                        </p>
                        <p>
                            <span>Royal Institution of Chartered Surveyors (RICS) - Black Book for Quantity Surveyors and Construction Professionals</span>
                            <span><i className='fas fa-calendar-alt'></i>2020</span>
                        </p>
                        <p>
                            <span>Joint Contracts Tribunal (JCT) 2016 Contracts - Update</span>
                            <span><i className='fas fa-calendar-alt'></i>2019</span>
                        </p>
                        <p>
                            <span>Virtual Reality (VR) & Augmented Reality (AR) in Construction Management</span>
                            <span><i className='fas fa-calendar-alt'></i>2018</span>
                        </p>
                        <p>
                            <span>Innovative Off-Site Modular Building Solutions</span>
                            <span><i className='fas fa-calendar-alt'></i>2018</span>
                        </p>
                        <p>
                            <span>Orchestra – Build on Knowledge (Project Launch, Planning the Works & Delivery)</span>
                            <span><i className='fas fa-calendar-alt'></i>2017</span>
                        </p>
                        <p>
                            <span>Risk Management</span>
                            <span><i className='fas fa-calendar-alt'></i>2017</span>
                        </p>
                        <p>
                            <span>Staying Safe within the Bribery Act and Data Protection Act</span>
                            <span><i className='fas fa-calendar-alt'></i>2016</span>
                        </p>
                        <p>
                            <span>Respect at VINCI and Fraud Prevention</span>
                            <span><i className='fas fa-calendar-alt'></i>2016</span>
                        </p>
                        <p>
                            <span>Introduction to Insurance</span>
                            <span><i className='fas fa-calendar-alt'></i>2015</span>
                        </p>
                        <p>
                            <span>Introduction to the New Engineering Contract (NEC)</span>
                            <span><i className='fas fa-calendar-alt'></i>2015</span>
                        </p>
                        <p>
                            <span>Building Information Modelling (BIM)</span>
                            <span><i className='fas fa-calendar-alt'></i>2014</span>
                        </p>
                        <p>
                            <span>Procure21+ (NHS Procurement Framework)</span>
                            <span><i className='fas fa-calendar-alt'></i>2013</span>
                        </p>
                        <p>
                            <span>Contract Law and Warranties</span>
                            <span><i className='fas fa-calendar-alt'></i>2013</span>
                        </p>
                        <p>
                            <span>COINS Finance - Procurement and Commercial</span>
                            <span><i className='fas fa-calendar-alt'></i>2012</span>
                        </p>
                        <p>
                            <span>Construction Skills Certification Scheme (CSCS) card for Managers and Professionals</span>
                            <span><i className='fas fa-calendar-alt'></i>2011</span>
                        </p>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default CurriculumVitae