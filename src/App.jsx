import React from "react";
import "./style.css"; // Ensure the CSS file path is correct
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Phone from "./components/Phone";
import EsayImage from "./components/EsayImage";
import Problemsection from "./components/Problemsection";
import DealSection from "./components/DealSection";
import ImpactSection from "./components/ImpactSection";
import { AppSection } from './components/AppSection';
import {Newslatter} from "./components/Newslatter";
import {Footer} from "./components/Footer";



const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Card />
      <Phone />
      <EsayImage />
      <Problemsection />
      <DealSection />
      <ImpactSection />
      <AppSection />
      <Newslatter />
      <Footer />
     
      
    </div>
  );
};

export default App;
