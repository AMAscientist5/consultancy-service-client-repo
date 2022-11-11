import React from "react";
import Banner from "../Banner/Banner";
import HomePageServices from "../Services/HomePageServices";
import ContactUs from "../ContactUs/ContactUs";
import AboutUs from "../AboutUs/AboutUs";
// import ServiceCountries from "../ServiceCountries/ServiceCountries";
// import Events from "../Events/Events";
// import Partners from "../Partners/Partners";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="d-lg-flex">
        <div className="w-75 mx-auto">
          <HomePageServices></HomePageServices>
        </div>
        <div className="mx-auto mt-5">
          <h2 className="">service added</h2>
        </div>
      </div>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
      {/* <ServiceCountries></ServiceCountries> */}
      {/* <Events></Events> */}
      {/* <Partners></Partners> */}
    </div>
  );
};

export default Home;
