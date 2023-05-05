import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import './docter.scss'
import { dlist } from './dlist';


 function Docters (){
const [dlists, setDlist] = useState(dlist);
useEffect(()=>{
 setDlist(dlist);

})

    return (
      <>
        <Header />
        <div className="docter">
          <div className="container">
            <div className="col-12">
              <div className="d-flex w-100 col-lg-5">
                <div className="wrappe">
                  {

                  dlists.map((item)=>{
                    const{dName,image,dDescrip}=item;
                    return (
                      <div className="main-box">
                        <div className="boxs">
                          <div className="img">
                            <img src={image} alt="" />
                          </div>
                        </div>
                        <div className="content">
                          <h5>{dName}</h5>
                          <p>{dDescrip}</p>
                        </div>
                        <div className="plus">
                          <img src="./+.png" alt="" />
                        </div>
                      </div>
                    );
                  })
                 
                  }
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}
export default Docters;