import React from 'react';
import './ContactInfo.css'; // Import CSS file for styling

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="info-item">
        <h4>E-mail Address:</h4>
        <p>mayabaunathi6@gmail.com</p>
      </div>
      <div className="info-item">
        <h4>Instagram Account:</h4>
        <p>@compu-learn professionals</p>
      </div>
      <div className="info-item">
        <h4>Facebook Account:</h4>
        <p>@compu-learn professionals</p>
      </div>
      <div className="info-item">
        <h4>Cellphone Numbers:</h4>
        <p>062 608 6674</p>
        <p>084 508 8070</p>
      </div>
      <div className="info-item">
        <h4>Working Hours:</h4>
        <p>Mon-Fri - 08:00 - 18:00</p>
        <p>Sat - 08:00 - 15:30</p>
        <p>Sun - closed</p>
      </div>
      <div className="info-item">
        <h4>Address:</h4>
        <p>1387 Komati Road Senaoane, Soweto 1818</p>
      </div>
    </div>
  );
}

export default ContactInfo;