import React, { Component } from "react";

import { Link } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import TextField from "@mui/material/TextField";

import { DiningData } from "./diningData";

class DiningModal extends Component {
  state = { DiningModal: false, name: "" };
  showDiningModal = () => {
    this.setState({ DiningModal: !this.state.DiningModal });
  };

  render() {
    let USERS = [];
    for (let i = 0; i < DiningData.length; i++) {
      let areas = DiningData[i].areas;
      for (let j = 0; j < areas.length; j++) {
        USERS.push(areas[j].city);
      }
    }

    let setFoundUsers = [];
    let setName = [];
    let foundUsers = [];

    const filter = (e) => {
      const keyword = e.target.value;

      if (keyword !== "") {
        const results = USERS.filter((user) => {
          return USERS.city.toLowerCase().startsWith(keyword.toLowerCase());
        });
        setFoundUsers(results);
      } else {
        setFoundUsers(USERS);
      }

      setName(keyword);
    };

    const handleOnSearch = (string, results) => {};

    const handleOnHover = (result) => {};

    const handleOnSelect = (item) => {};

    const handleOnFocus = () => {};

    const formatResult = (item) => {
      return item;
    };
    const handleOnClickPickup = () => {
      document.getElementById("high").className =
        "btn btn-block btn-primary test";
      document.getElementById("high2").className = "btn btn-block";
    };
    const handleOnClicDelivery = () => {
      document.getElementById("high2").className =
        "btn btn-block btn-primary test";
      document.getElementById("high").className = "btn btn-block";
    };
    return (
      <div className="App" style={{ height: "100%" }}>
        <Link to="#" className="" onClick={() => this.showDiningModal()}>
          <div className="row">
            <div
              className="col-10 "
              style={{
                textAlign: "center",
                fontSize: "16px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden"
              }}
            >
              <i>
                <FaIcons.FaMotorcycle />
              </i>
              <i
                style={{
                  paddingLeft: "10px"
                }}
              >
                45 min to Abdullah Almubarak fxgfxgdvfddfgdsd
              </i>
            </div>
            <div
              className="col-2 cartIconDesktop"
              style={{ textAlign: "right" }}
            >
              <FaIcons.FaChevronDown />
            </div>
          </div>
        </Link>
        <div
          className={
            this.state.DiningModal ? "dining-modal active" : "dining-modal "
          }
        >
          <div className="dining-modal-items ulPadding">
            <div className="">
              <div
                className=" DiningbackColor"
                style={{
                  overflow: "hidden"
                }}
              >
                <div className=" ">
                  <div className="col-2" style={{ textAlign: "left" }}>
                    <AiIcons.AiOutlineClose
                      onClick={() => this.showDiningModal()}
                      className="handCursor"
                      style={{ color: "black", cursor: "pointer" }}
                    />
                  </div>

                  <div className="col-2"></div>
                </div>
                <div className="">
                  <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5 px-1 ">
                      <button
                        id="high"
                        type="button"
                        className="btn btn-block test"
                        data-toggle="tab"
                        style={{
                          width: "100%",
                          border: "0.1px solid transparent",
                          borderColor: "#ccc"
                        }}
                        onClick={handleOnClickPickup}
                      >
                        pickup
                      </button>
                    </div>
                    <div className="col-5 px-1 ">
                      <button
                        id="high2"
                        type="button"
                        className="btn btn-block test "
                        data-toggle="tab "
                        role="tab"
                        style={{
                          width: "100%",
                          border: "0.1px solid transparent",
                          borderColor: "#ccc"
                        }}
                        onClick={handleOnClicDelivery}
                      >
                        Delivery
                      </button>
                    </div>
                    <div className="col-1"></div>
                  </div>
                  {DiningData.map((item, index) => {
                    return (
                      <>
                        <div
                          className="row serachContainer pt-0"
                          style={{ color: "black" }}
                        >
                          <div className="col-1 col-lg-1 col-md-1 "></div>
                          <div className="col-10 col-md-10 col-lg-10 pt-4">
                            <div className="pb-3 pt-0">
                              <input
                                placeholder="Search ....."
                                style={{
                                  width: "100%",
                                  outline: "none",
                                  borderBottom: "1px solid #000000",
                                  borderTop: "0px",
                                  borderLeft: "0px",
                                  borderRight: "0px"
                                }}
                              />
                              <AiIcons.AiOutlineSearch
                                id="diningSearchIcon"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-1 col-lg-1 col-md-1 "></div>
                        </div>
                        <div>
                          <div className="container px-0">
                            <div
                              className="row "
                              style={{
                                overflowY: "scroll",
                                height: "calc(80vh - 10rem)"
                              }}
                            >
                              <div className="col-1 py-0"></div>
                              <div
                                className="col-10 py-0"
                                style={{
                                  textAlign: "initial"
                                }}
                              >
                                {item.areas.map((areas, index) => {
                                  return (
                                    <ul
                                      className="areaActive"
                                      id="ul_top_hypers3"
                                      style={{
                                        paddingTop: "10px",
                                        paddingBottom: "10px"
                                      }}
                                    >
                                      <a href="#" ontouchstart="">
                                        <li key={areas.city.id}>
                                          {areas.city}
                                        </li>
                                      </a>
                                    </ul>
                                  );
                                })}
                              </div>
                              <div className="col-1 py-0"></div>
                            </div>{" "}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="row">
                  <div className="col-12">
                    <button
                      type="button"
                      className="btn btn-primary btn-large btn-block col-11 col-md-5 col-lg-5 diningButtonWidth"
                      onClick={() => this.showDiningModal()}
                      style={{
                        margin: "auto"
                      }}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DiningModal;
