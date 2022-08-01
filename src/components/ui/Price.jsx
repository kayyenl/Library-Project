import React from 'react';

const Price = ({salePrice, originalPrice}) => {
    return (
        <div className='book__price'>
            {salePrice === null ? 
                <span>${originalPrice.toFixed(2)}</span> :
                <div><span className="book__price--normal">${originalPrice.toFixed(2)}</span>${salePrice.toFixed(2)}</div>}
        </div>
    );
}

export default Price;
