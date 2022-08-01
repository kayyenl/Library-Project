import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";


const Book = (props) => {
    return (
        <div className="book">
            <Link to={`/books/${props.info.id}`}>
                <figure className="book__img--wrapper">
                    <img src={props.info.url} alt="" />
                </figure>
            </Link>
            <div className="book__title">
                <Link to={`/books/${props.info.id}`} className="book__title--link">
                    {props.info.title}
                </Link>
            </div>
            <div className="book__ratings">
                <Rating rating={props.info.rating} />
            </div>
            <Price salePrice={props.info.salePrice}
            originalPrice={props.info.originalPrice} />
        </div>
  );
};

export default Book;
