import React, { useState, useEffect, useContext } from "react";
import Banner from "../Banner/Banner";
import HomePageServices from "../Services/HomePageServices";
import ContactUs from "../ContactUs/ContactUs";
import AboutUs from "../AboutUs/AboutUs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [allServices, setAllServices] = useState([]);
  const [addedService, setAddedService] = useState([]);

  console.log(addedService);

  useEffect(() => {
    fetch(`http://localhost:5000/addService?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAddedService(data));
  }, [user?.email]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setAllServices(data);
      });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="d-lg-flex">
        <div className="w-75 mx-auto">
          <HomePageServices></HomePageServices>
        </div>
        <div className="mx-auto mt-2">
          <div>
            <p>Service lists to add in cart</p>
            {allServices.map((service) => (
              <p className="bg-light mb-1">
                <Link to={`/addService/${service._id}`}>
                  <button>{service.ServiceName}</button>
                </Link>
              </p>
            ))}
          </div>
          <div className="bg-light p-3">
            <h3>Your Added Servic</h3>
            {addedService.map((srv) => (
              <p className="bg-light mb-1" key={srv._id}>
                {srv.serviceName}
              </p>
            ))}
          </div>
        </div>
      </div>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
