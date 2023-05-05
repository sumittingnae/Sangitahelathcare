import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";
import "./Home.scss";
import About2 from "../About/About2";
import Process from "../Process/Process";
import Appointmnet from "../Appoinment/Appoinment";
import Testimonals from "../Testimonal/Testimonal";

function Home() {
  return (
    <>
      <Header />
      <section className="home">
        <div className="container">
          <div className="col-12">
            <div className=" d-flex w-100 col-lg-5">
              <div className="wrappe">
                <div className="content">
                  <img src="./dot.png" alt="" />

                  <span>We Provide All Health Care Solution</span>
                  <h3>Protect Your Health And Take Care To Of Your Health</h3>

                  <div className="read-more">
                    <Link to="/About" id="btn" style={{ textDecoration: "none" }}>
                      <span className="btn">Read More</span>
                    </Link>
                  </div>
                  <div className="side">
                    <img src="./trangl.png" alt="" id="img2" />
                  </div>
                </div>
                <div className="right">
                  <div className="img">
                    <img src="./doctor.png" alt="" />
                  </div>
                  <div className="back">
                    <img src="./+.png" alt="" id="img1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About2/>
      <Process/>
      <Appointmnet/>
      <Testimonals/>
    </>
  );
}
export default Home;
