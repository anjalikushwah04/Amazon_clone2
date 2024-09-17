import "./App.css";
import React from "react";
import NavBar from "./components/Header/NavBar.js";
import Newnav from "./components/newnavbar/Newnav.js";
import Maincomp from "./components/home/Maincomp.js";
import Footer from "./components/footer/Footer.js";
import { Route, Switch } from "react-router-dom";
import Sign_in from "./components/signup_signin/Sign_in.js";
import Sign_up from "./components/signup_signin/Sign_up.js";
import Cart from "./components/cart/Cart.js";
import Buynow from "./components/buynow/Buynow.js";

function App() {
  return (
    <>
      <NavBar />
      <Newnav />
      <Switch>
        <Route exact path="/">
          {" "}
          element={<Maincomp />}
        </Route>
        <Route exact path="/login">
          {" "}
          element={<Sign_in />}
        </Route>
        <Route exact path="/register">
          {" "}
          element={<Sign_up />}
        </Route>
        <Route exact path="/getproductsone/:id">
          {" "}
          element={<Cart />}
        </Route>
        <Route exact path="/buynow">
          {" "}
          element={<Buynow /> }
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
