import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const HomePageServices = () => {
  const [limitServices, setLimitServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/limit-services")
      .then((res) => res.json())
      .then((data) => {
        setLimitServices(data);
      });
  }, []);
  return (
    <div>
      <h2>All Services: {limitServices.length}</h2>
      <div className="grid grid-cols-3 gap-12 p-5">
        {limitServices.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>

      <Link to="/services">
        <button className="btn btn-warning">see all</button>
      </Link>
    </div>
  );
};

export default HomePageServices;
