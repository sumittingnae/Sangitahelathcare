import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import './menu.scss'
 function menu (){

    return(

            <>
            <div className='menus'>
           
                <DropdownButton id="dropdown-basic-button" title='Menu'  >
                <Dropdown.Item><Link to='/' id='menu'>Home</Link></Dropdown.Item>
                <Dropdown.Item><Link to='/docter' id='menu'>Docters</Link></Dropdown.Item>
                <Dropdown.Item><Link to='/service' id='menu'>Services</Link></Dropdown.Item>
                <Dropdown.Item><Link to='/Blog' id='menu'>Blog</Link></Dropdown.Item>
                <Dropdown.Item><Link to='/Contact' id='menu'>Contact Us</Link></Dropdown.Item></DropdownButton>

                
         

            </div>
            </>
    )

}

export default menu;
