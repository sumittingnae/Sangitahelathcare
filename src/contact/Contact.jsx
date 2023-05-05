import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import './contact.scss'

 function Contact (){
  const[user,setUser]=useState("")
    return (
      <>
        <Header />
        {/* Heading  */}
        <div className="Contact">
          <div className="container">
            <div className="col-12">
              <div className="d-flex w-100 col-lg-5">
                <div className="wrappe">
                  <div className="heading">
                    <h5>Contact Us</h5>
                    <img src="./dot.png" alt="dot" />
                    {/* <span className='btn'>Contact Us</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}

          <div className="container">
            <div className="col-12">
              <div className="d-flex w-100 col-lg-5">
                <div className="wrapped">
                  <div className="formed">
                    <div className="form-text">
                      <input type="text" placeholder="Name" onChange={(e)=>{setUser()}}/>
                    </div>
                    <div className="form-text">
                      <input type="text" placeholder="Email" />
                    </div>

                    <div className="form-text">
                      <input type="text" placeholder="Phone Number" />
                    </div>
                    <div className="form-text">
                      <select >
                        <option>Select Department</option>
                        <option>Nurology</option>
                        <option>Cardiology</option>
                        <option>Orthopedic</option>
                      </select>
                    </div>
                    <div className="form-text">
                      <textarea type="text" placeholder="Type Message" />
                    </div>

                    <div className="btn">Submit</div>
                  </div>

                  {/* Contact-Info */}
                  <div className="right-side">
                    <div className="contact-inform">
                      <h5>Contact Us For Any Informations</h5>

                     <div className='loc'>
                       <span>
                        <i className="fa fa-map-location-dot regular"></i>
                        Location
                      </span>

                     </div>
                      <div className="add">
                        <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                      </div>

                      <div className="email">
                        <span>
                          <i className="fa fa-address-card"></i> Email & Phone
                       </span>
                        <p>info@yourdomain.com (+68) 120034509</p>
                      </div>
                      <div className="follow">
                        <span>
                          <i className="fa fa-globe"></i>
                          Follow us
                        </span>
                        <p>
                          <a href="https://linkedin.com/">
                            <i class="fa-brands fa-linkedin"></i>
                          </a>
                          <a href="https://twitter.com">
                            <i class="fa-brands fa-twitter"></i>
                          </a>

                          <a href="https://www.instagram.com">
                            <i class="fa-brands fa-instagram"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}
export default Contact;