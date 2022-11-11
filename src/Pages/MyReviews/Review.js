import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
const Review = ({ review, handleDelete }) => {
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
          <button onClick={() => handleDelete(_id)}>
            <FaRegTrashAlt></FaRegTrashAlt>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center">
          <div className="avatar">
            <div className="mask mask-squircle  h-12">
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
            <div className="text-sm opacity-50">{serviceName}</div>
          </div>
        </div>
      </td>
      <td>
        <div>{price}</div>
      </td>
      <td>{reviewText}</td>
      <th>
        <Link to={`/update/${_id}`}>
          <button className="btn btn-ghost text-primary font-bold btn-xs">
            Update
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default Review;
