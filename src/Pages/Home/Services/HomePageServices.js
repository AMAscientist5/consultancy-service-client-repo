import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Service from "./Service";
const HomePageServices = () => {
  const [limitServices, setLimitServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://aradun-visa-consultancy-service-server.vercel.app/limit-services"
    )
      .then((res) => res.json())
      .then((data) => {
        setLimitServices(data);
      });
  }, []);
  return (
    <div className="pt-5">
      <h2 className="pb-5">All Our Services</h2>

      <Container>
        <Row xs={1} lg={3}>
          {limitServices.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </Row>
      </Container>

      <Link to="/services">
        <button className="mt-5 btn btn-warning ">see all</button>
      </Link>
    </div>
  );
};

export default HomePageServices;
