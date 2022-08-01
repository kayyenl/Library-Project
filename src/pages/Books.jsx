import React, { useState } from 'react';
import Book from '../components/ui/Book';

const Books = ( {books : initialBooks} ) => {
    const [books, setBooks] = useState(initialBooks)
    function filterBooks(filter) {
        books.sort((a,b) => a - b)
    }
    return (
        <div id='books__body'>
            <main id="books__main">
                <section>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__header">
                                <h2 className='section__title books__header--title'>All Books</h2>
                                <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                                    <option value="DEFAULT" disabled>Sort by...</option>
                                    <option value="LOW_TO_HIGH">Price, Low to High</option>
                                    <option value="HIGH_TO_LOW">Price, High to Low</option>
                                    <option value="RATING">Rating</option>
                                </select>
                            </div>
                            <div className="books">
                                {
                                    books.map(elem => 
                                        <Book key = {elem.id} info = {elem}/>)
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Books;
