import React from 'react';
//import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { Link } from 'react-router-dom';
import './header.scss'
import Menu from '../menu/manu';

 function header (){

    return (
      <>
        <div className="header">
          <div className="logo">
            <img src="./logo8.png" alt="" />
            <p>Sangita Health Care</p>
          </div>

          <div className="menu">
            <Link to="/" id="menu">
              Home
            </Link>
            <Link to="/docter" id="menu">
              Docters
            </Link>
            <Link to="/service" id="menu">
              Services
            </Link>
            <Link to="/Blog" id="menu">
              Blog
            </Link>
            <Link to="/Contact" id="menu">
              Contact Us
            </Link>
          </div>
          <div className="call-number">
            <i className="fa fa-phone"></i>
            <p>(+91)8888455586</p>
          </div>
          <div className="contactus">
            <Link to="/Contact" className="clik">
              <span className="btn ">
                Contact <span className="fa fa-angle-right"></span>
              </span>
            </Link>
          </div>
          <Menu/>
        </div>
      </>
    );

}

export default header;