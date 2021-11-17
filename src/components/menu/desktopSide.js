import React, { Component, useState } from "react";
import Cart from "./cart";
import Checkout from "./checkout";
import Confirm from "./confirm";
import DisConfirm from "./disconfirm";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function DesktopSide() {
  const [desktopView, setdesktopView] = useState(false);

  const showDesk = () => setdesktopView(!desktopView);
  return (
    <div>
      <div className={desktopView ? "desk-cart" : ""}>
        <Cart />
      </div>
    </div>
  );
}
export default DesktopSide;
