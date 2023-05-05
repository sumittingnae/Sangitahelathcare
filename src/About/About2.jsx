import React from 'react';
import { Link } from 'react-router-dom';
//import Header from '../header/header';
import'./About.scss'

 function About (){

    return (
      <>
        <section className="about">
          <div className="container">            
            <div className="col-12"> 
              <div className=" d-flex w-100 col-lg-5">                            
                <div className="wrappe">                    
                  <div className="left-side">
                    <div className="box"></div>
                    <div className="img">
                      <img src="./doctor3.png" alt="" className="i1" />
                      <img src="./doctor2.png" alt="" className="i2" />
                      <img src="./doctor4.png" alt="" className="i3" />
                      <div className="contect">
                        <span>20</span>
                        <p>Year Experience</p>
                      </div>
                    </div>
                     <div className='square1'>
                       <img src="./square.png" alt="square" />
                     </div>
                  </div>
               
                  <div className="right-side">
                    <div className="content">
                      <h4>About Us</h4>
                      <h3>The Great Place Of Medical Hospital Center</h3>
                      <p>
                        We provide the special tips and advice’s of heath care
                        treatment and high level of best technology involve in
                        the our hospital.
                      </p>
                     
                    </div>

                    <div className="service">                      
                      <div className="boxs">                         
                        <div className="sub-box">                          
                          <div className="emergency">
                            <i
                              className="fa fa-truck-medical fa-light"
                              style={{
                                backgroundColor: "#d0d2f0",
                                color: "#565acf",
                                border: "1px solid #d0d2f0",
                              }}
                            ></i>
                            <h4> Emergency Help</h4>
                          </div>
                          <div className="emergency">
                            <i
                              className="fa fa-stethoscope fa-light "
                              style={{
                                backgroundColor: "#dcfcdf",
                                color: "#56dd08",
                                border: "1px solid #dcfcdf",
                              }}
                            ></i>
                            <h4>Qualified Doctors</h4>
                          </div>
                          <div className="emergency">
                            <i
                              className="fa fa-user-tie fa-light"
                              style={{
                                backgroundColor: "#fcf7dc",
                                color: "#f0ce11",
                                border: "1px solid #fcf7dc",
                              }}
                            ></i>
                            <h4> Best Professionals</h4>
                          </div>
                          <div className="emergency">
                            <i
                              className="fa fa-syringe fa-light"
                              style={{
                                backgroundColor: "#d0d2f0",
                                color: "#8F00FF",
                                border: "1px solid #f6e2fe",
                              }}
                            ></i>
                            <h4> Medical Treatment</h4>
                          </div>
                          <div className='read'>
                            <Link to='/'><span className='btn'>Read More</span></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='square'>
                  <img src="./square2.png" alt="square" />
               </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );

}
export default About;