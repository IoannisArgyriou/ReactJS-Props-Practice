import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card 
        img="./images/tedesco.png"
        rating="5.0"
        reviewCount = {6}
        country="Australia"
        title="Life lessons with James Tedesco"
        price={150}
      />
    </div>
  )
}

export default App;

