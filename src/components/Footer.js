import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Footer.css'; // Import CSS file for styling

function Footer() {
  return (
    <footer>
      <div className="click">
        <div className="container">
          <ul>
            <li className="clicks"><a href="#"> <i className="fa fa-instagram"></i></a></li>
            <li className="clicks"><a href="#"> <i className="fa fa-facebook"></i></a></li>
            <li className="clicks"><a href="#"> <i className="fa fa-twitter"></i></a></li>
            <li className="clicks"><a href="#"> <i className="fa fa-whatsapp"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="text"> 
        <span> Created by <a href="#"> U.H MAYABA</a>  | &#169; 2023 All rights reserved </span>
      </div>
      <script src="./js/script.js"></script>
    </footer>
  );
}

export default Footer;