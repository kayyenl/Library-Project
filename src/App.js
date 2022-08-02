import Nav from "./components/Nav";
import React, { useState, useEffect } from 'react';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import { books } from './data.js'
import Cart from "./pages/Cart";


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    const dupeItem = cart.find(elem => elem.id === book.id)
    if (dupeItem) {
      setCart(cart.map(elem => {
        if (elem.id === book.id) 
        return {
          ...elem,
          quantity: elem.quantity + 1
        }
      }))
    }
    if (dupeItem === undefined) setCart([...cart, {...book, quantity: 1}])
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path='/' exact component={Home} />
        <Route path='/books' exact render={() => <Books books={books} />} />
        <Route path='/books/:id' render={() => <BookInfo books={books} addToCart={addToCart} cart={cart}/>} />
        <Route path='/cart' render={() => <Cart books={books} cart={cart}/>} />
        <Footer />
      </div>  
    </Router>
  );
}

export default App;
 