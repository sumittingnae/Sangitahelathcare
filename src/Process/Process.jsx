import React from 'react';
import './Process.scss'

 function Process (){

    return (
      <>
        <div className="process">
          <div className="container">
            <div className="col-12 ">
              <div className="d-flex w-100 col-lg-5">
                <div className="wrappe">
                  <div className="title">
                    <h4>Working Process</h4>
                    <h3>How we works?</h3>
                  </div>
                  <div className="back">
                    <img src="square.png" alt="plus" />
                  </div>
                  <div className="service-card">
                    <div className="card">
                      <div className="c1">
                        <h5>01</h5>
                        <h4>Make Appointmnet</h4>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of.
                        </p>
                        <div className="btn">
                          <p>
                            View More <i className="fa fa-angle-right"></i>
                          </p>
                        </div>
                      </div>
                  
                      <div className="hover-card">
                        <div className="c1">
                          <h5>01</h5>
                          <h4>Make Appointmnet </h4>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of.
                          </p>
                          <div className="btn">
                            <p>
                              View More <i className="fa fa-angle-right"></i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                    <div className="card2">
                      <div
                        className="c"
                        style={{ backgroundColor: "#f17732", color: "white" }}>
                        <h5>02</h5>
                        <h4>Take Treatment</h4>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of.
                        </p>
                        <div className="btn">
                          <p>
                            View More <i className="fa fa-angle-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="card">
                      <div className="c1">
                        <h5>03</h5>
                        <h4>Registration</h4>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of.
                        </p>
                        <div className="btn">
                          <p>
                            View More <i className="fa fa-angle-right"></i>
                          </p>
                        </div>
                      </div>
                      <div className="hover-card">
                        <div className="c1">
                          <h5>03</h5>
                          <h4>Registration</h4>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of.
                          </p>
                          <div className="btn">
                            <p>
                              View More <i className="fa fa-angle-right"></i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="back">
                      <img src="+.png" alt="plus" />
                       <img src="./wave.png" alt="" 
                       style={{ display:"block",
                        margin:"200px 0px 0px -50px"}}/>
                    </div> */}
                      {/* <div className='back'>
                      <img src="./wave.png" alt="" style={{ display:"block",
                        margin:""
                      }}/>
                    </div> */}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}
export default Process;