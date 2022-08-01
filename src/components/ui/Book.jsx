import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";


const Book = (props) => {
    return (
        <div className="book">
            <Link to="">
                <figure className="book__img--wrapper">
                    <img src={props.info.url} alt="" />
                </figure>
            </Link>
            <div className="book__title">
                <Link to="/" className="book__title--link">
                    {props.info.title}
                </Link>
            </div>
            <div className="book__ratings">
                {
                    new Array(Math.floor(props.info.rating)).fill(1).map((_, index) => {
                        return(
                            <FontAwesomeIcon icon="star" key={index}/>
                        )
                    })
                }
                {
                    props.info.rating % 1 !== 0.5 ||
                    <FontAwesomeIcon icon="star-half-alt" />
                }
            </div>
            <div className="book__price">
                {props.info.salePrice === null ? 
                    <span>${props.info.originalPrice.toFixed(2)}</span> :
                    <div><span className="book__price--normal">${props.info.originalPrice}</span>${props.info.salePrice.toFixed(2)}</div>}
            </div>
        </div>
  );
};

export default Book;
