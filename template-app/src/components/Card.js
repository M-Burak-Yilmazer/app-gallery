import React from "react";
import data from "../data/data";
import Collapse from "./Collapse";

const Card = () => {
  return data.map((item, index) => {
    const collapseId = `collapseExample${index + 1}`; // Unique ID for each collapse element
    return (
      <Collapse name={item.photographer} href={collapseId} key={index}>
        <div className="card w-100 mt-3">
          <img
            style={{ width: "250px", height: "250px" }}
            src={item.src.large}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{item.photographer}</h5>
          </div>
        </div>
      </Collapse>
    );
  });
};

export default Card;
