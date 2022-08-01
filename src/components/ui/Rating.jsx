import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = (props) => {
  return (
    <div className="book__ratings">
      {new Array(Math.floor(props.rating)).fill(1).map((_, index) => {
        return <FontAwesomeIcon icon="star" key={index} />;
      })}
      {props.rating % 1 !== 0.5 || (
        <FontAwesomeIcon icon="star-half-alt" />
      )}
    </div>
  );
};

export default Rating;
