import React from "react";

const Highlight = (props) => {
  return (
    <div className="highlight">
      <div className="highlight__img">
        {props.icon}
      </div>
      <h3 className="highlight__subtitle">{props.title}</h3>
      <p>Get access to the book you purchased online instantly!</p>
    </div>
  );
};

export default Highlight;
