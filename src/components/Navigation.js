import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Navigation.css'

function Navigation() {
  // Define the function to handle the click event for toggling the menu
  const toggleMenu = () => {
    const navMenu = document.getElementById('myTopnav');
    if (navMenu.className === 'topnav') {
      navMenu.className += ' responsive';
    } else {
      navMenu.className = 'topnav';
    }
  };

  return (
    <>
      <div className="navbar">
        <a className="active" href="#"><i className="fa fa-fw fa-phone"></i>062 608 6674</a>
        <a href="#"><i className="fa fa-fw fa-inbox"></i>mayabaunathi6@gmail.com</a>
        <a href="#"><i className="fa fa-fw fa-instagram"></i>@compu-learn professionals</a>
        <a href="#"><i className="fa fa-fw fa-facebook"></i>compu-learn professionals</a>
      </div>
      <br />
      <div className="topnav" id="myTopnav">

        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </>
  );
}

export default Navigation;