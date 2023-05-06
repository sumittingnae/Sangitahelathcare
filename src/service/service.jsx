import React, { useEffect, useState } from 'react';
import './service.scss';
import Header from "../header/header";
import { slist } from './slist';


function Service (){
  const [service, setService] = useState(slist);

  useEffect(()=>{
    setService(slist);
  })
    

    return (
      <>
        <Header />
        <div className="service">
          <div className="container">
            <div className="col-12">
              <div className="d-flex w-100 col-lg-5">
                <div className="wrappe">
                  <div className="swiper MySwiper container">
                    <div className="swiper-wrapper content">
                      {service.map((data) => {
                        const { name, Department, image } = data;
                        return(
                        <div className="swiper-slide card">
                          <div className="card-content">
                            <div className="image">
                              <img src={image} alt="" />
                            </div>
                            <div className="media-icons">
                              <i className="fab fa-facebook"></i>
                              <i className="fab fa-twitter"></i>
                              <i className="fab fa-github"></i>
                            </div>
                            <div className="name-profession">
                              <span className="name">{name}</span>
                              <span className="profession">{Department}</span>
                            </div>
                            <div className="rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <div className="button">
                              <button className="anoutMe">About Me</button>
                              <button className="view">view</button>
                            </div>
                          </div>
                        </div>);
                      })}
                    </div>

                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}
export default Service;