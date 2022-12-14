import React, { useState, useEffect } from 'react';
import Price from '../components/ui/Price';
import EmptyCart from '../assets/empty_cart.svg'
import { Link } from 'react-router-dom';

const Cart = ({ cart, changeQuantity }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newPrice = cart.reduce((starting, cartItem) => {
            return (starting + (cartItem.salePrice || cartItem.originalPrice)*cartItem.quantity)
        }, 0).toFixed(2)

        setTotal(newPrice)
    }, [cart])

    function totalFraction(percent) {
        return (total * percent).toFixed(2)
    }
    
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {
                                    cart.map(elem => {
                                        return +elem.quantity ==+ 0 ? null :
                                        (
                                            <div className="cart__item">
                                                <div className="cart__book">
                                                    <img src={elem.url} 
                                                    alt="" className='cart__book--img'/>
                                                    <div className="cart__book--info">
                                                        <span className="cart__book--title">
                                                            {elem.title}
                                                        </span>
                                                        <span className="cart__book--price">
                                                        <Price originalPrice={elem.originalPrice}
                                                            salePrice={elem.salePrice} />
                                                        </span>
                                                        <button className="cart__book--remove" onClick={() => changeQuantity(elem, 0)}>
                                                            Remove</button>
                                                    </div>
                                                </div>
                                                <div className="cart__quantity">
                                                    <input type="number" min={0} max={99} value={elem.quantity}
                                                    className='cart__input'
                                                    onChange={(event) => changeQuantity(elem, event.target.value)}/>
                                                </div>
                                                <div className="cart__total">
                                                    ${((elem.salePrice || elem.originalPrice) * elem.quantity).toFixed(2)}
                                                </div>
                                            </div>  
                                        )
                                    })
                                }
                            </div>
                            { cart.length !== 0 || 
                                <div className="cart__empty">
                                    <img src={EmptyCart} alt="" className="cart__empty--img" />
                                    <h2>You don't have any books in your cart!</h2>
                                    <Link to='/books'>
                                        <button className="btn">Browse Books</button>
                                    </Link>
                                </div>
                            }
                        </div>
                        { cart.length === 0 || 
                            <div className="total">
                                <div className="total__item total__sub-total">
                                    <span>Subtotal</span>
                                    <span>${totalFraction(0.9)}</span>
                                </div>
                                <div className="total__item total__tax">
                                    <span>Tax</span>
                                    <span>${totalFraction(0.1)}</span>
                                </div>
                                <div className="total__item total__price">
                                    <span>Total</span>
                                    <span>${total}</span>
                                </div>
                                <button className="btn btn__checkout no-cursor" 
                                    onClick={() => alert("This is still a work in progress!")}>
                                        Proceed to Checkout!
                                </button>
                            </div> }
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cart;
