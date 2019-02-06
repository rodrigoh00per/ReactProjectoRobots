import React from "react";
import Card from "./Card";
//equals to props.robots

const CardsList = ({ robots }) => {
  //RECEIVE THE ARRAY


  return (
    <div>
      {robots.map((robot, i) => {
        return (
          <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
        );
      })}
    </div>
  );
};

export default CardsList;
