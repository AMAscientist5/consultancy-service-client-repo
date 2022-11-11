import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const AddService = () => {
  const service = useLoaderData();

  const { _id, price, ServiceName } = service;
  const { user } = useContext(AuthContext);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.fullName.value;
    const email = user?.email || "unregistered";
    const reviewText = form.review.value;

    const review = {
      service: _id,
      serviceName: ServiceName,
      price,
      customer: name,
      email,
      reviewText,
    };
    console.log(review);

    fetch(
      "https://aradun-visa-consultancy-service-server.vercel.app/addService",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Service order is successfully done");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="font-6xl text-center w-50 mx-auto">
      <div>
        <form onSubmit={handleAddReview}>
          <h2 className="text-4xl mb-4">{service.ServiceName}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              className="input input-ghost w-full  input-bordered"
            />

            <input
              name="email"
              type="text"
              placeholder="Your email"
              defaultValue={user?.email}
              className="input input-ghost w-full  input-bordered"
              readOnly
            />
          </div>
          <textarea
            name="review"
            className="textarea textarea-bordered h-24 text-white w-full"
            placeholder="Your Review"
            required
          ></textarea>
          <input
            className="btn border mb-3"
            type="submit"
            value="Confirm Add Service"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
