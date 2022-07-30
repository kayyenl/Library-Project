import React from "react";

const Highlight = (props) => {
  return (
    <div className="highlight">
      <div className="highlight__img">
        {props.icon}
      </div>
      <h3 className="highlight__subtitle">{props.title}</h3>
      <p className="highlight__para">{props.para}</p>
    </div>
  );
};

export default Highlight;
