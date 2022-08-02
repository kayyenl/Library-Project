import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Book from '../components/ui/Book';
import Price from '../components/ui/Price';
import Rating from '../components/ui/Rating';

const BookInfo = ({ addToCart, books, cart }) => {
    const { id } = useParams()
    const book = books[id - 1]

    function addBookToCart(book) {
        addToCart(book)
    }

    function bookExists() {
        return cart.find(book => +book.id === +id)
    }

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to='/books' className='book__link'>
                                <FontAwesomeIcon icon='arrow-left' />
                            </Link>
                            <Link to='/books' className='book__link'>
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} alt="" className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">{book.title}</h2>
                                <Rating rating={book.rating} />
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} /> 
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">
                                        Summary
                                    </h3>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Cum itaque esse quibusdam 
                                        facere sed neque quas assumenda ducimus! 
                                        Laborum, maiores!
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Cum itaque esse quibusdam 
                                        facere sed neque quas assumenda ducimus! 
                                        Laborum, maiores!
                                    </p>
                                </div>
                                {
                                    bookExists() ? 
                                    <Link to='/cart' className='book__link'>
                                        <button className="btn">Checkout</button> 
                                    </Link> :
                                    <button className="btn" onClick={() => addBookToCart(book)}>Add to Cart</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                        </div>
                        <div className="books">
                            {
                                books.filter(elem => elem.rating === 5 && elem.id !== +id).slice(0,4)
                                .map(elem => <Book key={elem.id} info={elem} />)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BookInfo;
