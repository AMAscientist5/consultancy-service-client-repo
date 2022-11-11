import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const AddServiceSecond = () => {
  const { user } = useContext(AuthContext);
  const [addedService, setAddedService] = useState([]);
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    fetch(
      `https://aradun-visa-consultancy-service-server.vercel.app/addService?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setAddedService(data));
  }, [user?.email]);

  useEffect(() => {
    fetch("https://aradun-visa-consultancy-service-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setAllServices(data);
      });
  }, []);

  return (
    <div>
      <p>Service lists to add in cart</p>
      <div className="d-flex mx-5">
        {allServices.map((service) => (
          <p className="bg-light mb-1 mx-3">
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
  );
};

export default AddServiceSecond;
