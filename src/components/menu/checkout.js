import React, { Component } from "react";
import Navbar from "./Navbar";
import "./menuStyle.css";
import DiningModal from "./dining";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
class Checkout extends Component {
  state = {
    selectedDate: new Date(),
    minDate: new Date(),
    dateFormat: "",
    selectedTime: "",
    maxSelectedTime: "",
    minTime: "",
    maxTime: "",
    timeOptionsComponent: null,

    timePickerComponent: true,
    otherTimePickerComponent: false,

    paymentMethod: "",
    diningOption: this.props.diningOption,
    editAddress: false,
    deliveryView: false,
    pickupView: false,
    message: "",
    selectedAddressMessage: "",
    style: "",
    renderFutureOrders: this.props.selectedEstablishment
      ? this.props.selectedEstablishment.render_future_orders
      : false,
    renderFutureOrdersForDays: this.props.selectedEstablishment
      ? this.props.selectedEstablishment.render_future_orders_for_days
      : false,
    notes: "",

    selectedAddress: this.props.selectedAddress,
    pickupDining: false,
    deliveryDining: true
  };

  render() {
    const ExampleCustomInput = ({ value, onClick }) => (
      <button
        className="btn btn-primary future-order-date-input"
        style={{
          backgroundColor: "white",
          // padding: "1px",
          color: "black",
          fontSize: "14px",
          borderColor: "Lightgray"
        }}
        onClick={onClick}
      >
        {value}
      </button>
    );

    return (
      <div className="App" style={{ height: "100%" }}>
        <div className="row" style={{ backgroundColor: "white" }}>
          <div className="col-md-12 col-lg-12 col-12">
            <div className="col-12 col-md-12 col-lg-12" id="hideNav">
              <div className="col-md-12 col-12 px-1">
                <div className="row cartBackColorCard py-2">
                  <div className="col-2 cartIconDesktop ">
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
            <div className="row py-4">
              <div className="cartTitle px-4">
                <h6>Checkout</h6>
              </div>
            </div>
            <div
              className="container py-0"
              style={{ height: "calc(95vh - 10rem)", overflowY: "scroll" }}
            >
              {/* -------- start sara code------- */}
              <div className="col-12 text-start ">
                <div className="row pt-4 checkoutBackColorCard py-2">
                  <div className="col-6 text-start">
                    <h6>Name: sara</h6>
                  </div>
                  <div className="col-6 text-end">
                    <p>Tel: +965 7777777</p>
                  </div>

                  <div className="col-10 pt-4">
                    <p>
                      Deliver to:
                      <div>
                        Hawally - Block: 1 - Street: 1- Building: 1 - Floor: 1
                      </div>
                    </p>
                  </div>
                  <div className="col-2 pt-4 text-end">
                    <MdIcons.MdOutlinePlace />
                  </div>

                  <div className="col-10 pt-4">
                    <p>Estimated Delivery Time: 60 mins</p>
                  </div>
                  <div className="col-2 text-end pt-4">
                    <MdIcons.MdSchedule />
                  </div>
                </div>

                <br></br>
                <div className="row pt-4 checkoutBackColorCard ">
                  <div className="row">
                    <p className="text-center" style={{ color: "red" }}>
                      Cannot delivery
                    </p>
                  </div>
                  <div className="row text-center">
                    <div className="col-6 text-end">
                      <input
                        type="radio"
                        name="Pickup"
                        id="exampleRadiosPickup1"
                        value="Pickup"
                      ></input>{" "}
                      <label
                        htmlFor="exampleRadiosPickup1"
                        className="tab-label"
                      >
                        Pickup
                      </label>
                    </div>

                    <div className="col-6 text-center">
                      <input
                        type="radio"
                        name="Delivery"
                        id="exampleRadiosDelivery1"
                        value="Delivery"
                      ></input>{" "}
                      <label
                        htmlFor="exampleRadiosDelivery1"
                        className="tab-label"
                      >
                        Delivery
                      </label>
                    </div>
                  </div>
                  <br></br> <br></br>
                  <div className="col-12">
                    <div className="row">
                      <div className="col text-center">
                        <select
                          className="selectStyle"
                          id="address"
                          name="address"
                          placeholder="choose.."
                        >
                          <option defaultValue>Choose address</option>
                          <option defaultValue>Rawda</option>
                          <option defaultValue>Adailiya</option>
                        </select>
                      </div>
                      <div className="col text-center">
                        <Link
                          to=""
                          className=""
                          style={{ textDecoration: "none" }}
                        >
                          <BsIcons.BsPlus style={{ color: "red" }} />
                          New Address
                        </Link>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <div className="col-12 text-center ">
                    {" "}
                    <hr></hr>
                    <h6 className="title1">Pick date/time</h6>
                    <br></br>
                    <div className="row pb-4">
                      <div className="col text-center">
                        <DatePicker
                          dateFormat={"EE, dd-MM-yyyy"}
                          selected={this.state.selectedDate}
                          minDate={this.state.selectedDate}
                          customInput={<ExampleCustomInput />}
                          // className="future-order-date-input"
                          disabledKeyboardNavigation
                          onChangeRaw={(e) => e.preventDefault()}
                          // readOnly={true}
                        />
                      </div>

                      <div className="col text-center">
                        <select
                          className="future-order-time-input"
                          id="timeOptions"
                          name="timeOptions"
                        >
                          <option>09:00 AM to 10:00AM</option>
                          <option>10:00 AM to 11:00AM</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="row pt-4 pb-4 checkoutBackColorCard">
                <div className="col-12   ">
                  <div>
                    <h4 className="py-3">Items</h4>
                    <div className="row pt-2">
                      <div className="col text-start">1x Egg</div>
                      <div className="col text-end">56.000 KD</div>
                    </div>
                    <div className="row text-muted small">
                      <div className="col-2 small" style={{ textAlign: "end" }}>
                        12x
                      </div>
                      <div
                        className="col-6  small"
                        style={{ textAlign: "start" }}
                      >
                        Cheese
                      </div>

                      <div className="col-4 text-end">
                        <div className="small">+ 0.500 KD</div>

                        {/* <p className=" mt-4 text-success medium">22.000 KD</p> */}
                      </div>
                    </div>{" "}
                    <div className="row text-muted small">
                      <div className="col-2 small" style={{ textAlign: "end" }}>
                        12x
                      </div>
                      <div
                        className="col-6  small"
                        style={{ textAlign: "start" }}
                      >
                        Cheese
                      </div>

                      <div className="col-4 text-end">
                        <div className="small">+ 0.500 KD</div>

                        {/* <p className=" mt-4 text-success medium">22.000 KD</p> */}
                      </div>
                    </div>
                    <div className="row pt-4">
                      <div className="col text-start">1x Egg</div>
                      <div className="col text-end">56.000 KD</div>
                    </div>
                    <div className="row text-muted small">
                      <div className="col-2 small" style={{ textAlign: "end" }}>
                        12x
                      </div>
                      <div
                        className="col-6  small"
                        style={{ textAlign: "start" }}
                      >
                        Cheese
                      </div>

                      <div className="col-4 text-end">
                        <div className="small">+ 0.500 KD</div>

                        {/* <p className=" mt-4 text-success medium">22.000 KD</p> */}
                      </div>
                    </div>{" "}
                    <div className="row text-muted small">
                      <div className="col-2 small" style={{ textAlign: "end" }}>
                        12x
                      </div>
                      <div
                        className="col-6  small"
                        style={{ textAlign: "start" }}
                      >
                        Cheese
                      </div>

                      <div className="col-4 text-end">
                        <div className="small">+ 0.500 KD</div>

                        {/* <p className=" mt-4 text-success medium">22.000 KD</p> */}
                      </div>
                    </div>
                  </div>
                  <hr></hr>

                  <div className="row">
                    <ul>
                      <div>
                        <li>
                          <div className="row">
                            <div className="col text-start">Sub Total</div>
                            <div className="col text-end">6KD</div>
                          </div>
                        </li>
                        <li>
                          <div className="row">
                            <div className="col text-start">
                              Delivery Charge
                            </div>
                            <div className="col text-end">2.000 KD</div>
                          </div>
                        </li>
                        <li>
                          <div className="row">
                            <div className="col text-start">Total</div>
                            <div className="col text-end">12.000 KD</div>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </div>

                  <div className="card ">
                    <div className=" ">
                      <textarea
                        className="form-control border-0"
                        rows="3"
                        placeholder="Note.."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="row pt-4 pb-4 checkoutBackColorCard">
                <h4>Payment method</h4>
                <br></br>
                <br></br>
                <div className="">
                  <div className="row ">
                    <div className="col text-start">
                      <input
                        type="radio"
                        name="Cash"
                        id="Cash"
                        value="Cash"
                        checked={true}
                      ></input>{" "}
                      <label htmlFor="Cash">Cash</label>
                    </div>
                    <div
                      className="col-4 text-end"
                      style={{ color: "Green", fontSize: "21px" }}
                    >
                      <BsIcons.BsCash />
                    </div>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col text-start">
                      <input
                        type="radio"
                        name="Card"
                        id="Card"
                        value="Card"
                      ></input>{" "}
                      <label htmlFor="Card">Knet / Credit Card</label>
                    </div>
                    <div className="col-4 text-end">
                      <img
                        src={require("../../assets/images/knet.png")}
                        alt="All"
                        style={{ height: 15 }}
                      ></img>
                    </div>
                  </div>{" "}
                  <br></br>
                  <br></br>
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h6 style={{ color: "red" }}>fill the form </h6>
                </div>

                {this.state.style ? (
                  <div className={this.state.style} style={{ zIndex: "1000" }}>
                    <h4 style={{ color: "white", fontSize: "2rem" }}>
                      PROCESSING . . .
                    </h4>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>{" "}
              <br></br>
              {/* ----------end sara code --------- */}
            </div>
          </div>

          <Link to="/confirm">
            <div className="row py-4 text-center  ">
              <div className="footerColor">
                <button
                  type="button"
                  className="btn btn-danger buttonWidth col-11 col-md-2 col-lg-2"
                >
                  Place an order
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Checkout;
