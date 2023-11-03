import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Card from "./components/card.jsx";
import Katie from "./assets/katie.png";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        img={Katie}
        rating="0.5"
        rating2={6}
        country="USA"
        paragraph="Life Lessons with Katie Zaferes"
        rate="From $136"
      />
      
    </>
  );
}

export default App;
