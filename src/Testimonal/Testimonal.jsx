import React, { useState } from 'react';
//import { Carousel, CarouselItem } from 'react-bootstrap';
import './Testmonal.scss';
import { docters } from './docters';

 function Testimonals (){
    const[docter,setDocters]= useState(docters)
  const filterItem=(cateItem)=>{
    const updatedItems=docters.filter((curtElem)=>{
      return curtElem.categary===cateItem;
      
    })
    setDocters(docters);
 }

    return(

        <>
        <div className="testominal">
            <div className="container">
                <div className="col-12">
                    <div className="d-flex w-100 col-lg-5">
                        <div className="wrappe">
                            <h5 >Testimonial</h5>
                            <h4>See What Are The Patients Saying About us</h4>
                             <div className="content">
                                {
                                    docter.map((data)=>{
                                        const{name,image,description}=data;
                                       return(
                                        
                                            <div className='docter-qutoes'>
                                <img src={image} alt="" />
                                <div className='quetos'>
                              <p>{description}</p>
                              <span>"{name}"</span>
                                </div>
                                
                               </div>
                             
                                       )
                                    })
                                }
                                </div>

                           
                            
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    
       
        </>
    )

}
export default Testimonals;