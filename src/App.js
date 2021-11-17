import React from "react";
import "./styles.css";

import "./styleguide.css";

import ProductCode from "./components/product/productCode";
import CarouselImages from "./components/product/carousel";

import HomePageCode from "./components/menu/homePageCode";
import ScrollButton from "././components/menu/scrollButton";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MenuPage from "./components/menu/menuPage";
import Cart from "./components/menu/cart";
import Navbar from "./components/menu/Navbar";
import Checkout from "./components/menu/checkout";
import Test from "./components/menu/test";
import Items from "./components/menu/items";
import Confirm from "./components/menu/confirm";
import DisConfirm from "./components/menu/disconfirm";
import Contact from "./components/menu/contact";
import Profile from "./components/menu/profile";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePageCode} />
        <Route path="/menu" exact component={MenuPage} />
        <Route path="/home" exact component={HomePageCode} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/items" exact component={Items} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/product" exact component={ProductCode} />
        <Route path="/confirm" exact component={Confirm} />
        <Route path="/carousel" exact component={CarouselImages} />
        <Route path="/disconfirm" exact component={DisConfirm} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
