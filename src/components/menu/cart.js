import React, { Component } from "react";
import Navbar from "./Navbar";
import "./menuStyle.css";
import DiningModal from "./dining";
import { Link, useHistory } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import CartLine from "./CartLine";

class Cart extends Component {
  render() {
    let cart = [1, 3, 4, 56];
    const cartBox = cart.map((i) => <CartLine key={i} />);
    let diningOption = "Pickup";

    return (
      <div className="App" style={{ height: "100%" }}>
        <div className="row" style={{ backgroundColor: "white" }}>
          <div className="col-md-12 col-lg-12 col-12">
            <div className="col-12 col-md-12 col-lg-12" id="hideNav">
              <div className="col-md-12 col-12 px-1">
                <div className="row cartBackColorCard py-2">
                  <div className="col-2 cartIconDesktop">
                    <Navbar />
                  </div>

                  <div className="col-8">
                    <DiningModal />
                  </div>
                  <div className="col-2  ">
                    <Link to="/menu">
                      <RiIcons.RiFileListLine
                        style={{ color: "black", fontSize: "24px" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row pt-4 pb-2">
              <div className="col-12 cartTitle px-4">
                <h6>Cart</h6>
              </div>
            </div>
            <div
              className="row py-0"
              style={{ height: "calc(95vh - 10rem)", overflowY: "scroll" }}
            >
              {/* ---- height: "calc(87vh - 10rem)"------ */}
              <div id="cartEmtpy" className="col-12 text-center">
                <div>
                  <main className="flex-shrink-0 main-container  ">
                    <div className="container">{cartBox}</div>

                    <div className="container px-0">
                      <div className=" shadow-light ">
                        <div className="card-body">
                          <ul className="list-group list-group-flush">
                            {diningOption === "Pickup" ? (
                              <div></div>
                            ) : (
                              <li className="list-group-item">
                                <span>Delivery Charge</span>{" "}
                                {this.props.cart.length ? (
                                  <span className="float-right font-weight-bold">
                                    {this.props.serviceFee}KD
                                  </span>
                                ) : (
                                  <span className="float-right font-weight-bold">
                                    0KD
                                  </span>
                                )}
                              </li>
                            )}

                            <li className="list-group-item">
                              <span style={{ float: "left" }}>Discount</span>{" "}
                              <span
                                className="float-right font-weight-bold text-success"
                                style={{ float: "right" }}
                              >
                                0KD
                              </span>
                            </li>
                            <li className="list-group-item">
                              <span
                                className=" font-weight-bold"
                                style={{ float: "left" }}
                              >
                                Items Total
                              </span>{" "}
                              <span
                                className="float-right font-weight-bold"
                                style={{ float: "right" }}
                              >
                                13.000 KD
                              </span>
                            </li>
                            <li className="list-group-item">
                              <span
                                className=" font-weight-bold"
                                style={{ float: "left" }}
                              >
                                Total
                              </span>{" "}
                              <span
                                className="float-right font-weight-bold"
                                style={{ float: "right" }}
                              >
                                25.000 KD
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {this.props.profile ? (
                        <div>
                          {this.props.profile.is_agent ? (
                            // <button
                            //   data-toggle="modal"
                            //   data-target="#select-login"
                            //   className=" btn btn-lg btn-default default-shadow btn-block"
                            //   onClick={() => this.handleAgentClick()}
                            // >
                            //   Checkout{" "}
                            //   <span className="ml-2 icon arrow_right"></span>
                            // </button>
                            <div></div>
                          ) : (
                            // <button
                            //   data-toggle="modal"
                            //   data-target="#select-login"
                            //   className=" btn btn-lg btn-default default-shadow btn-block"
                            //   onClick={() => this.handleClick()}
                            // >
                            //   Checkout{" "}
                            //   <span className="ml-2 icon arrow_right"></span>
                            // </button>
                            <div></div>
                          )}
                        </div>
                      ) : (
                        // <button
                        //   data-toggle="modal"
                        //   data-target="#select-login"
                        //   className=" btn btn-lg btn-default default-shadow btn-block"
                        //   onClick={() => this.handleClick()}
                        // >
                        //   Checkout{" "}
                        //   <span className="ml-2 icon arrow_right"></span>
                        // </button>
                        <div></div>
                      )}
                      <br></br>
                    </div>
                  </main>
                </div>
              </div>
              <div>
                <Link to="/checkout">
                  <div className="row py-4 ">
                    <div className="footerColor">
                      <button
                        type="button"
                        className="btn btn-danger btn-large btn-block col-11 col-md-2 col-lg-2 buttonWidth"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function Use(props) {
  const history = useHistory();

  const handleRoute = () => {
    history.push("/checkout");
  };
  return <button onClick={handleRoute}>about</button>;
}
export default Cart;
