import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const UpdateReviews = () => {
  const navigate = useNavigate();
  const service = useLoaderData();
  const { user } = useContext(AuthContext);

  const { _id, price, serviceName } = service;
  console.log(service);

  const handleUpdateReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.fullName.value;
    const email = user?.email || "unregistered";
    const reviewText = form.review.value;

    const review = {
      service: _id,
      serviceName: serviceName,
      price,
      customer: name,
      email,
      reviewText,
    };

    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Review is Updated");
          console.log(data);
          navigate("/myReview");
        }
      });
  };

  return (
    <div className="w-50 mx-auto my-5">
      <h2>Please Update: {service.customer}</h2>
      <form onSubmit={handleUpdateReview}>
        <h2 className="text-4xl">{service.ServiceName}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            defaultValue={service.customer}
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
          defaultValue={service.reviewText}
          name="review"
          className="textarea textarea-bordered h-24 text-white w-full"
          placeholder="Your Review"
          required
        ></textarea>
        <input className="btn border" type="submit" value="Add Review" />
      </form>
    </div>
  );
};

export default UpdateReviews;
