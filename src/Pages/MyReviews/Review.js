import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// { order, handleDelete, handleStatusUpdate }
const Review = ({ review, handleDelete }) => {
  // const { _id, serviceName, phone, customer, price, service, status } = order;
  const { _id, serviceName, customer, price, service, reviewText } = review;
  const [reviewOrder, setReviewOrder] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setReviewOrder(data));
  }, [service]);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)}>X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {reviewOrder?.image_url && (
                <img
                  src={reviewOrder.image_url}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">{price}</span>
      </td>
      <td>{reviewText}</td>
      <th>
        <Link to={`/update/${_id}`}>
          <button className="btn btn-ghost bg-warning btn-xs">Update</button>
        </Link>
      </th>
    </tr>
  );
};

export default Review;
