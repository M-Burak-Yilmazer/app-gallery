import React from "react";
import data from "../data/data";

const Collapse = (props) => {
  console.log(props);
  return (
    <div style={{ width: "250px" }} className="">
      <a
        className="btn btn-success  d-block"
        data-bs-toggle="collapse"
        href={"#".concat(props.href)}
        role="button"
        aria-expanded="false"
        aria-controls={props.href}
      >
        {props.name}
      </a>

      <div className="collapse  " id={props.href}>
        {props.children}
      </div>
    </div>
  );
};

export default Collapse;
