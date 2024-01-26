import React from 'react';
import './ServicesSection.css'; 


function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="content">
        <div className="title"><span>SERVICES PAGE</span></div>
        <div className="boxes">
          <div className="box">
            
            <div className="topic">Education</div>
            <p> 
                <ol>Entrepreneurship</ol>
                <ol>Financial management</ol>
                <ol>Sales and Marketing</ol>
                <ol>Customer Management</ol>
            </p>
      
          </div>
          <div className="box">
            
            <div className="topic">Training</div>
            <p>
                <ol>Intro.to.computers</ol>
                <ol>Systems Support</ol>
                <ol>Techical Support</ol>
                <ol>Systems Development</ol>
            </p>
          
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;