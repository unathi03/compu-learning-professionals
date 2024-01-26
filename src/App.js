import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AboutSection from './pages/AboutSection';
import ServicesSection from './pages/ServicesSection';
import ContactInfo from './pages/ContactInfo';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">
      
      <Navigation />
      <Home/>
      <AboutSection/>
      <ServicesSection/>
      <ContactInfo/>
      <Footer/>
    </div>
  );
}

export default App;
