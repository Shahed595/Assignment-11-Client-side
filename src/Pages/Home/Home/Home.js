import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Packaging from "../Packaging/Packaging";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div id="home">
      {/* <Navigation></Navigation> */}
      <Banner></Banner>
      <Services></Services>
      <Packaging></Packaging>
      <Footer></Footer>
    </div>
  );
};

export default Home;
