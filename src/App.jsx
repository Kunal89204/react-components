import React from "react";
import Box from "./components/Box";
import Team from "./components/Team";
import Faq from "./components/Faq";
import ImageHover from "./components/ImageHover";
import Insights from "./components/Insights";
import Values from "./components/Values";
import KeyStrength from "./components/KeyStrength";
import Carousel from "./components/Carousel";
import Feature from "./components/Feature";
import Analytics from "./components/Analytics";
import Connect from "./components/Connect";
import Strategy from "./components/Strategy";
import Faqs from "./components/Faqs";
import Grid from "./components/Grid";
import Info from "./components/Info";
import Axios from "./components/Axios";
import Condition from "./components/Condition";



const App = () => {
  return (
    <div className="py-4  h-screen">
      <Box />
      <Team />
      <ImageHover />
      <Insights />
      <Values />
      <KeyStrength />
      <Feature />
      <Carousel />
      <Analytics />
      <Connect />
      <Strategy />
      <Faqs />
      <Grid />
      <Info />
      <Axios />
      <Condition />
    </div>
  );
};

export default App;
