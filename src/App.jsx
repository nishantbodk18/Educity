import { useState } from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Program from "./Components/Program";
import Title from "./Components/Title";
import About from "./Components/About";
import Campus from "./Components/Campus";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer"></Title>
        <Program />
        <About />
        <Title subTitle="Gallery" title="Campus photos"></Title>
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Students says"></Title>
        <Testimonials/>
      </div>
    </>
  );
}

export default App;
