import React from 'react';
import Book from './ui/Book';
import { books } from '../data'

const Featured = () => {
    console.log(books)
    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        {books
                        .filter(elem => (elem.rating === 5))
                        .slice(0,4)
                        .map(elem => 
                        <Book 
                        key={elem.id}
                        info={elem}
                        />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
