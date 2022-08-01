import React from 'react';
import { Link } from 'react-router-dom';

const BookInfo = ({ books }) => {
    return (
        <div id="books__body">
            <main className="books__main">
                <div className="book__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to='/books'>
                    
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BookInfo;
