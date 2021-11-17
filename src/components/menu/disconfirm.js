import React, { Component } from "react";
import Navbar from "./Navbar";
import "./menuStyle.css";
import DiningModal from "./dining";
import { Link } from "react-router-dom";
import "./confirm.scss";
import * as MdIcons from "react-icons/md";

class DisConfirm extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <div className="row " style={{ backgroundColor: "white" }}>
          <div className="col-md-12 col-lg-12 col-12">
            <div className="col-12 col-md-12 col-lg-12" id="hideNav">
              <div className="col-md-12 col-12 px-1">
                <div className="row cartBackColorCard py-2 ">
                  <div className="col-2  cartIconDesktop ">
                    <Navbar />
                  </div>

                  <div className="col-7">
                    <DiningModal />
                  </div>
                  <div className="col-3  ">
                    <Link to="/cart">
                      <div className=" start-1 translate-middle badge  ">
                        10
                      </div>
                      <MdIcons.MdShoppingCart
                        style={{
                          fontSize: "24px",
                          color: "black"
                        }}
                      />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-4 ">
              <div className="cartTitle px-4">
                <h6>Sorry</h6>
              </div>
            </div>
            <div
              className="container "
              style={{ height: "calc(80vh - 10rem)", overflowY: "scroll" }}
            >
              <div id="errorCart" className="col-12 text-center"></div>
              <div>
                <h2>Oops! Something went wrong, please try again.</h2>
                <div style={{ color: "red" }}>#1020</div>
              </div>
            </div>

            <Link to="/menu">
              <div className="row py-4 text-center buttonPosition ">
                <div className="footerColor">
                  <button
                    type="button"
                    className="btn btn-danger col-11 col-md-2 col-lg-2 buttonWidth "
                  >
                    Back to menu
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default DisConfirm;
