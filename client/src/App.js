import React, { createContext, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';
import Logout from './components/Logout';
import Delivery from './products/delivery';
import Endpage from './products/endpage';
import Dashboard from './products/productspage';
import Product1 from './productDetails/product1';
import Product2 from './productDetails/product2';
import Product3 from "./productDetails/product3";
import Product4 from './productDetails/product4';
import Product5 from './productDetails/product5';
import Product6 from "./productDetails/product6";
import Cart from './products/cart';
import { CartProvider } from "react-use-cart";
import { initialState, reducer } from './reducer/UseReducer';



  // 1. contextAPI
  export const UserContext = createContext();

  const Routing = () => {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/logout">
          <Logout />
        </Route>

        <Route path="/products/Product-details-1" exact component={Product1} />
        <Route path="/products/Product-details-2" exact component={Product2} />
        <Route path="/products/Product-details-3" exact component={Product3} />
        <Route path="/products/Product-details-4" exact component={Product4} />
        <Route path="/products/Product-details-5" exact component={Product5} />
        <Route path="/products/Product-details-6" exact component={Product6} />
        <Route path="/products" exact render={props =>
        <div>
        <CartProvider>
          <Dashboard />
                                
        </CartProvider>
        </div>         
        }/>
        <Route path="/products/Cart" exact render={props =>
        <div>
        <CartProvider>
          <Cart />
                                
        </CartProvider>
        </div>       
        }/>

        <Route path="/products/Cart/Endpage">
          <Endpage />
        </Route>

        <Route>
          <Errorpage />
        </Route>

      </Switch>
    )
  }



  const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState);


  return (


      <>
        <UserContext.Provider value={{state, dispatch}}>

          <Navbar />

          <Routing />

        </UserContext.Provider>

    </>
  );
}

export default App;


