import React, { Component } from "react";
import DiningModal from "./dining";
import { Link } from "react-router-dom";
import "./confirm.scss";
import * as MdIcons from "react-icons/md";
import Navbar from "./Navbar";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";

class Contact extends Component {
  render() {
    // const establishment = this.props.establishment;
    // const workingHoursLines = this.props.workingHours.map((workingHour) => (

    <div className="row">
      <div className="col">
        <a href="#"></a>

        <a href="#"></a>
      </div>

      <div className="col">
        <a href="#">Closed</a>
      </div>

      <div className="col">
        <a href="#"></a>
      </div>
    </div>;

    return (
      <div className="App" style={{ height: "100%" }}>
        <div className="row" style={{ backgroundColor: "white" }}>
          <div className="col-md-4 col-lg-4 col-12">
            <div className="col-12 col-md-12 col-lg-12">
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
            <div className="row py-4">
              <div className="cartTitle px-4">
                <h6>Contact</h6>
              </div>
            </div>
            {/* ------ Start ------    */}
            <div
              className=" "
              id="reservation"
              style={{ height: "calc(90vh - 10rem)", overflowY: "scroll" }}
              // style={{
              //   backgroundImage: `url(${establishment.brand.image_uploaded})`,
              // }}
            >
              <div className="row mt-4" id="contactCard">
                <div className="col-lg-12 ">
                  <div id="contactBtn">
                    <i id="contactIconAlign">
                      <AiIcons.AiOutlineProfile />
                    </i>
                  </div>
                  <h6 style={{ fontWeight: "bold", color: "black" }}>
                    Edartee
                  </h6>

                  <p style={{ color: "black" }}>
                    The perfect solution for all over the world, nothing can
                    compete with our solution and no on ever can figure out what
                    we are doing
                  </p>
                </div>
              </div>
              <div className="row" id="contactCard">
                <div className="col-lg-12">
                  <div id="contactBtn">
                    <i id="contactIconAlign">
                      <BsIcons.BsFillClockFill />
                    </i>
                  </div>
                  <h4>Working Hours</h4>
                  <span>Sataurday - friday</span>
                </div>
              </div>
              <div className="row" id="contactCard">
                <div className="col-lg-12">
                  <div id="contactBtn">
                    <i id="contactIconAlign">
                      <FaIcons.FaPhoneAlt />
                    </i>
                  </div>
                  <h4>Phone Numbers & Email</h4>
                  <span>
                    <a href="tel:+965 9723 96774">+965 0000 0000</a>
                  </span>
                  <br></br>{" "}
                  <span>
                    <a href="tel:+965 9723 9677">+965 0000 0000</a>
                    <br></br>
                    <a href="mailto:edartee@edartee.com">edartee@edartee.com</a>
                  </span>
                </div>
              </div>
              <div className="row" id="contactCard">
                <div className="col-lg-12">
                  <div className="contact-form">
                    <div id="contact">
                      <div className="row">
                        <div className="col-lg-12">
                          <div id="contactBtn">
                            <i id="contactIconAlign">
                              <HiIcons.HiOutlineLocationMarker />
                            </i>
                          </div>
                          <h4>Location</h4>
                        </div>

                        <div className="location-row col-lg-12 ">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.555812540872!2d48.01547081536151!3d29.324702582149765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9d8f994df045%3A0xf5b9af19443e5cb2!2sThe%20story%20tower%20hawally!5e0!3m2!1sen!2skw!4v1634727176887!5m2!1sen!2skw"
                            id="google-maps"
                            loading="lazy"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                          ></iframe>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>{" "}
            </div>
            {/* -------End------- */}
            <div className="col-lg-12 ">
              <Link to="/menu">
                <div className="row py-4 text-center buttonPosition ">
                  <div className="footerColor">
                    <button
                      type="button"
                      className="btn btn-danger buttonWidth col-11"
                    >
                      Back to menu
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  establishment: state.productReducer.establishment,
  workingHours: state.adminReducer.workingHours
});

export default Contact;
