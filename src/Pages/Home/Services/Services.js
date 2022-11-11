import React, { useEffect, useState } from "react";
import Service from "./Service";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://aradun-visa-consultancy-service-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="p-5">
      <h2 className="pb-5">All Our Services</h2>

      <Container>
        <Row xs={1} lg={3}>
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
