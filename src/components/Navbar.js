/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import * as React from 'react';
import '../style/Navbar.css'



const Navbar = () => {

  const [navstring, setNavstring] = React.useState('topnav');
  
  const myFunction = () => {
    if (navstring === "topnav") {
      setNavstring('topnav responsive')
    } else {
      setNavstring('topnav')
    }
  };

  return (
    <>
        <div className ="topnav" id="myTopnav">
            <a href="/" className="active">Home</a>

            <div className="dropdown">
                <button className="dropbtn">About Us
                <i class="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="/aboutusagro">Agro Jaborandi Eireli</a>
                    <a href="/vision">Vission & Mission</a>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Products
                <i class="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="edibleoils">Edible Oils</a>
                    <a href="sugar">Sugar</a>
                    <a href="nuts">Nuts</a>
                    <a href="rice">Rice</a>
                    <a href="beef">Beef</a>
                    <a href="#">Link 6</a>
                    <a href="#">Link 7</a>
                    <a href="#">Link 8</a>
                    <a href="#">Link 9</a>
                    <a href="#">Link 10</a>

                </div>
            </div>

            

            <div className="dropdown">
                <button className="dropbtn">Services
                <i class="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="supplychain">Supply Chain Management</a>
                    <a href="quality">Quality Assurance</a>
                    <a href="market">Market Presence & Global Locations</a>
                </div>
            </div>

            <a href="news">News</a>
            <a href="career">Career</a>
            <a href="contactus">Contact Us</a>
            <a href="javascript:void(0);" className="icon" onclick="myFunction()">&#9776;</a>
        </div>
    </>
  )
}


export default Navbar