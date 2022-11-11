import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import ServiceDetail from "./ServiceDetails/ServiceDetail";
import ReviewSection from "./ReviewSection/ReviewSection";
import AddReview from "./AddReview/AddReview";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();

  return (
    <div>
      <h2>Service Details{service.ServiceName}</h2>
      <div className="w-50 mx-auto">
        <ServiceDetail service={service}></ServiceDetail>
        <ReviewSection service={service}></ReviewSection>
        {user?.email}
        {user?.email ? (
          <AddReview service={service}></AddReview>
        ) : (
          <Link to="/login">
            <button>Please login to add your review</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
