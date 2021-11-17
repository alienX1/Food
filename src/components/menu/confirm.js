import React, { Component } from "react";
import Navbar from "./Navbar";
import "./menuStyle.css";

import { Link } from "react-router-dom";
import "./confirm.scss";

class Confirm extends Component {
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
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="cartTitle px-4">
                <h6>Thank you</h6>
              </div>
            </div>
            <div className="row py-0">
              <div className="receipt">
                <div
                  className="receipt-list"
                  style={{ height: "calc(88vh - 10rem)", overflowY: "scroll" }}
                >
                  <div className="row py-0">
                    <div className="col-4"></div>
                    <div
                      className="col-4 receipt-logo"
                      style={{
                        "--img":
                          "url('https://eurekaleap.devstudio.com.ve/images/upl/animat-shopping-cart-color.gif')"
                      }}
                    ></div>
                    <div className="col-4"></div>
                  </div>

                  <h5>Your order: #74848 has been placed</h5>
                  <br></br>
                  <div className="dashed"></div>
                  <div className="row py-2">
                    <div
                      className="col-12"
                      style={{
                        textAlign: "center",
                        fontWeight: "light",
                        fontSize: "14px"
                      }}
                    >
                      Delivery within 45 minutes to London
                    </div>
                  </div>
                  <div
                    className="row py-0"
                    style={{
                      fontSize: "14px"
                    }}
                  >
                    <div className="col-6" style={{ textAlign: "start" }}>
                      {" "}
                      15 june 2021
                    </div>
                    <div className="col-6" style={{ textAlign: "end" }}>
                      {" "}
                      6:48 PM
                    </div>
                  </div>
                  <div
                    className="row py-0"
                    style={{
                      fontSize: "14px"
                    }}
                  >
                    <div className="col-6" style={{ textAlign: "start" }}>
                      Hamad Bader
                    </div>
                    <div className="col-6" style={{ textAlign: "end" }}>
                      97778867
                    </div>
                  </div>

                  <div className="dashed"></div>
                  <br></br>
                  <div className="receipt-item">
                    <div className="receipt-label">1x Milk</div>
                    <div className="receipt-value">0.990 KD</div>
                  </div>
                  <div className="receipt-item2">
                    <div className="receipt-label2">1x Milk</div>
                    <div className="receipt-value2">+ 0.990 KD</div>
                  </div>
                  <div className="receipt-item" style={{ paddingTop: "10px" }}>
                    <div className="receipt-label">2x Eggs</div>
                    <div className="receipt-value">0.990 KD</div>
                  </div>
                  <div className="receipt-item2">
                    <div className="receipt-label2">1x Milk</div>
                    <div className="receipt-value2">+ 0.990 KD</div>
                  </div>
                  <div className="receipt-item2">
                    <div className="receipt-label2">1x Milk</div>
                    <div className="receipt-value2">+ 0.990 KD</div>
                  </div>
                  <div className="receipt-item2">
                    <div className="receipt-label2">1x Milk</div>
                    <div className="receipt-value2">+ 0.990 KD</div>
                  </div>
                  <div className="receipt-item" style={{ paddingTop: "10px" }}>
                    <div className="receipt-label">1x Bread</div>
                    <div className="receipt-value">0.490 KD</div>
                  </div>
                  <div className="receipt-item" style={{ paddingTop: "10px" }}>
                    <div className="receipt-label">12x Water</div>
                    <div className="receipt-value">0.490 KD</div>
                  </div>
                  <div className="receipt-item" style={{ paddingTop: "10px" }}>
                    <div className="receipt-label">4x Cereal</div>
                    <div className="receipt-value">0.990 KD</div>
                  </div>
                  <div className="receipt-item" style={{ paddingTop: "10px" }}>
                    <div className="receipt-label">4x Milk</div>
                    <div className="receipt-value">0.990 KD</div>
                  </div>
                  <div className="receipt-item" style={{ paddingTop: "10px" }}>
                    <div className="receipt-label">7x Eggs</div>
                    <div className="receipt-value">0.990 KD</div>
                  </div>
                  <div className="receipt-item2">
                    <div className="receipt-label2">1x Milk</div>
                    <div className="receipt-value2">+ 0.990 KD</div>
                  </div>
                  <div className="receipt-item" style={{ paddingTop: "10px" }}>
                    <div className="receipt-label">2x Bread</div>
                    <div className="receipt-value">0.490 KD</div>
                  </div>

                  <div className="receipt-item" style={{ paddingTop: "10px" }}>
                    <div className="receipt-label">1x Water</div>
                    <div className="receipt-value">0.490 KD</div>
                  </div>
                  <div className="receipt-item" style={{ paddingTop: "10px" }}>
                    <div className="receipt-label">12x Cereal</div>
                    <div className="receipt-value">0.990 KD</div>
                  </div>
                  <br></br>
                  <div className="dashed"></div>
                  <div className="dashed"></div>
                  <div className="receipt-item">
                    <div className="receipt-label">Delivery</div>
                    <div className="receipt-value">2.000 KD</div>
                  </div>
                  <div className="receipt-item">
                    <div className="receipt-label">Total</div>
                    <div className="receipt-value">19.560 KD</div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/disconfirm">
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
export default Confirm;
