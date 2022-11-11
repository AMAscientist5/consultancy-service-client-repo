import React from "react";
import Banner from "../Banner/Banner";
import HomePageServices from "../Services/HomePageServices";
import ServiceCountries from "../ServiceCountries/ServiceCountries";
import AboutUs from "../AboutUs/AboutUs";
import Events from "../Events/Events";
import ContactUs from "../ContactUs/ContactUs";
import Partners from "../Partners/Partners";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomePageServices></HomePageServices>
      <ServiceCountries></ServiceCountries>
      <AboutUs></AboutUs>
      <Events></Events>
      <ContactUs></ContactUs>
      <Partners></Partners>
    </div>
  );
};

export default Home;
