import React, {useState, useEffect} from 'react';
import './App.css';

//GRADIANT COLOR AND EFFECT Change the colour  to match the previous section colour
import {
  GradientDecorationBottom,
  GradientDecorationTop,
} from "./Decoration/GradientDecoration";

//////
import SubscribeModalButton from "./Decoration/Modal";

////PRIME REACT
import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

//COMPONENTS
import Navbar from './Components/Navbar';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Pricing from "./Components/Pricing";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";


const App: React.FC = () => {

  return (
    <div className="leading-normal tracking-normal text-white gradient">
   
      <Navbar />
      <SubscribeModalButton  />
      <Header  />
      <GradientDecorationBottom />
      <About />
      <Skills />
      <Pricing />
      <GradientDecorationTop />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
