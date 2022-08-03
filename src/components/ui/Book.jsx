import React , {useState} from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";


const Book = (props) => {
    const [img, setImg] = useState()

    return (
        <div className="book">
            {
                img ? <>
                    <Link to={`/books/${props.info.id}`}>
                        <figure className="book__img--wrapper">
                            <img src={props.info.url} alt="" className="book__img"/>
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
                </> : <>
                    <div className="book__img--skeleton"></div>
                    <div className="skeleton book__title--skeleton"></div>
                    <div className="skeleton book__rating--skeleton"></div>
                    <div className="skeleton book__price--skeleton"></div>
                </>
            }
        </div>
  );
};

export default Book;
