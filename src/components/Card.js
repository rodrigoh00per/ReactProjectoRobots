import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green dib  br3  pa1  ma2">
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
