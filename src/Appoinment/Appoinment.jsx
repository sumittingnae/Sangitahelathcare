import React from 'react';
import { Link } from 'react-router-dom';
import './Appoinment.scss';
//import Header from "../header/header";



function Appointmnet(){
    return(
        <>
     
        <div className='appoinment'>
            <div className='container'>
                <div className='col-12'>
                    <div className='d-flex w-100 col-lg-5'>
                        <div className='wrappe'>
                            <div className='title'>
                                <h4>Book Appoinment</h4>
                                <div className='form-text'>
                                    <input type="text" placeholder='Name' />
                                </div>
                                 <div className='form-text'>
                                    <input type="text" placeholder='Mobile' />
                                </div>
                                 <div className='form-text'>
                                    <input type="datetime-local" placeholder='Name' />
                                </div>
                                 <div className='form-text'>
                                    <select id='select'>
                                        <option>Select Docters</option>
                                        <option>Dr.Anil Tingne</option>
                                        <option>Dr.Sangita Tingne</option>
                                        <option>Dr.John Doosa</option>
                                        <option>Dr.Jonny Waker</option>
                                </select>
                                </div>
                                 <div className='form-text'>
                                    <select id='select'>
                                        <option>Select Department</option>
                                        <option>Orthopadic</option>
                                        <option>Neurology</option>
                                        <option>Urology</option>
                                        <option>Cardiology</option>
                                </select>
                                </div>
                                    <Link to='/'><span className='btn'>Appoinment Now</span></Link>
                                

                            </div>
                            <div className='side'>
                                <div className='img'>
                                    <img src="./rightside.png" alt="" />
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>


        </>
    )
    ;

}
export default Appointmnet;