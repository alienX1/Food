import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import Nutribar from "./nutri";
import "./menuStyle.css";
import ProductTemplate from "../product/productTemplate";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as GrIcons from "react-icons/gr";
import DiningModal from "./dining";
import Items from "./items";
import Cart from "./cart";
import Checkout from "./checkout";
import Confirm from "./confirm";
import DisConfirm from "./disconfirm";
import DesktopSide from "./desktopSide";
import ScrollSpy from "react-scrollspy-navigation";
import { Button } from "./Styles";
// import ScrollspyNav from "react-scrollspy-nav";
// Import react-circular-progressbar module and styles
import * as FaIcons from "react-icons/fa";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ScrollButton from "./scrollButton";
// Animation
import { easeQuadInOut } from "d3-ease";

// Radial separators

class MenuPage extends Component {
  state = {
    color: ""
  };
  constructor(props) {
    super(props);
    // this.state = {
    //   message: "Default Content"
    // };
    this.state = {
      is_visible: false
    };
  }

  updateContent = () => {
    this.setState({ message: <Cart /> });
  };

  // listenScrollEvent = (e) => {
  //   if (window.scrollY > 0) {
  //     console.log("ddd", window.scrollY);
  //     this.setState({ color: "black" });
  //   } else {
  //     this.setState({ color: "white" });
  //   }
  // };

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
    // window.addEventListener("scroll", this.listenScrollEvent);
  }
  toggleVisible() {
    console.log("hhhhhh");
    if (window.pageYOffset > 10) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  render() {
    const { is_visible } = this.state;
    let color = "red";
    if (window.scrollY > 10) {
      console.log("ddd", window.scrollY);
      // color = "black";
    } else {
      console.log("hhh", window.scrollY);
      color = "white";
    }
    const cal = 300;
    const carb = 80;
    const sugar = 2000;
    const protein = 500;

    // window.addEventListener("scroll", this.toggleVisible);

    return (
      <div className="App" id="menuDesktop">
        <div className="row">
          <div className="col-12 col-md-9 col-lg-9 px-4 ">
            <div className="row">
              {/* <div className="col-md-2 col-lg-2  desktop-nav-menu">
                <Navbar />
              </div> */}
              <div
                className="col-12 col-md-12 col-lg-12 app-bg2"
                style={{
                  "--img5":
                    "url('https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"
                }}
              >
                <div
                  className="row headerBackground py-2"
                  // style={{ backgroundColor: "white" }}
                >
                  <div className="col-2 cartIconDesktop">
                    <Navbar />
                  </div>

                  <div className="col-7">
                    <DiningModal />
                  </div>

                  <div className="col-3  ">
                    <Link to="/cart">
                      <div className=" start-1 translate-middle badge">10</div>
                      <MdIcons.MdShoppingCart
                        style={{
                          fontSize: "26px",
                          color: "black"
                        }}
                      />{" "}
                    </Link>
                  </div>
                </div>

                <div className="row">
                  <div className="col-8 px-3">
                    {" "}
                    {/* <Nutribar /> */}{" "}
                    {/* <div className="row " style={{ marginTop: "40px" }}>
                      <div className="col-3 ">
                        <Example label="Calorie">
                          <CircularProgressbar
                            value={cal}
                            maxValue={2000}
                            text={`${cal}`}
                            background={true}
                            styles={buildStyles({
                              // Rotation of path and trail, in number of turns (0-1)
                              // rotation: 0.25,

                              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                              strokeLinecap: "butt",

                              // Text size
                              textSize: "32px",

                              // How long animation takes to go from one percentage to another, in seconds
                              pathTransitionDuration: 0.5,

                              // Can specify path transition in more detail, or remove it entirely
                              // pathTransition: 'none',

                              // Colors
                              pathColor: `rgb(220, 55, 55, ${cal / 100})`,
                              textColor: "#dc3737",
                              trailColor: `rgba(153, 153, 153)`,
                              backgroundColor: `rgba(238, 238, 238)`
                            })}
                          />
                        </Example>
                      </div>
                      <div className="col-3">
                        <Example label="Carb.">
                          <CircularProgressbar
                            value={carb}
                            maxValue={300}
                            background={true}
                            text={`${carb}`}
                            styles={buildStyles({
                              // Rotation of path and trail, in number of turns (0-1)
                              // rotation: 0.25,

                              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                              strokeLinecap: "butt",

                              // Text size
                              textSize: "32px",

                              // How long animation takes to go from one percentage to another, in seconds
                              pathTransitionDuration: 0.5,

                              // Can specify path transition in more detail, or remove it entirely
                              // pathTransition: 'none',

                              // Colors
                              pathColor: `rgb(0, 135, 22, ${carb / 100})`,
                              textColor: `rgb(0, 135, 22)`,
                              trailColor: `rgba(153, 153, 153)`,
                              backgroundColor: `rgba(238, 238, 238)`
                            })}
                          />
                        </Example>
                      </div>
                      <div className="col-3">
                        <Example label="Sugar">
                          <CircularProgressbar
                            value={sugar}
                            maxValue={4000}
                            background={true}
                            text={`${sugar}`}
                            styles={buildStyles({
                              // Rotation of path and trail, in number of turns (0-1)
                              // rotation: 0.25,

                              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                              strokeLinecap: "butt",

                              // Text size
                              textSize: "32px",

                              // How long animation takes to go from one percentage to another, in seconds
                              pathTransitionDuration: 0.5,

                              // Can specify path transition in more detail, or remove it entirely
                              // pathTransition: 'none',

                              // Colors
                              pathColor: `rgb(252, 133, 90, ${sugar / 100})`,
                              textColor: `rgb(252, 133,90)`,
                              trailColor: `rgba(153, 153, 153)`,
                              backgroundColor: `rgba(238, 238, 238)`
                            })}
                          />
                        </Example>
                      </div>
                      <div className="col-3">
                        <Example label="Protein">
                          <CircularProgressbar
                            value={protein}
                            maxValue={600}
                            background={true}
                            text={`${protein}`}
                            styles={buildStyles({
                              // Rotation of path and trail, in number of turns (0-1)
                              // rotation: 0.25,

                              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                              strokeLinecap: "butt",

                              // Text size
                              textSize: "32px",

                              // How long animation takes to go from one percentage to another, in seconds
                              pathTransitionDuration: 0.5,

                              // Can specify path transition in more detail, or remove it entirely
                              // pathTransition: 'none',

                              // Colors
                              pathColor: `rgb(4, 5, 222, ${protein / 100})`,
                              textColor: `rgb(4, 5, 222)`,
                              trailColor: `rgba(153, 153, 153)`,
                              backgroundColor: `rgba(238, 238, 238)`
                            })}
                          />
                        </Example>
                      </div>
                    </div> */}
                  </div>

                  <div className="col-4 ">
                    <div
                      className="text-end "
                      id="maxSlogenLines"
                      style={{
                        position: "relative",
                        top: 40,
                        right: 5,
                        color: "white",
                        // color: "yellow",
                        textShadow: "1.5px 1.5px 1.5px black",
                        fontSize: "14px"
                      }}
                    >
                      The ultimate food in town that you cannot find anywhere
                      76868686876kjhjkhjkhjkk
                    </div>
                    <div
                      className="text-end"
                      style={{
                        position: "relative",
                        top: 45,
                        right: 5,
                        color: "yellow",
                        fontSize: "18px"
                      }}
                    >
                      <GrIcons.GrStar />
                      <span
                        style={{
                          fontSize: "14px",
                          marginLeft: "5px",
                          textShadow: "2px 2px 2px black"
                        }}
                      >
                        4.5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div id="moneyBag">
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    marginTop: "3px",
                    marginLeft: "0px"
                  }}
                >
                  20.000 kd
                </div>
              </div> */}
            </div>
            <div>
              {/* <div className="scroll-to-top">
        {is_visible && (
          
      <FaIcons.FaArrowAltCircleUp
        onClick={() => this.scrollToTop()}
        
      />  )}
      </div> */}
            </div>
            {/* -------------------dddddddddddd------- */}

            {/* ------------hhhhhhhhhh------ */}
            {/* <div
              style={{ width: "70%" }}
              data-value="0"
              data-percentage-value="0"
            >
              <span className="progress_number" style={{fontSize:"12px"}}>
                50%
                
              </span>
              <div style={{padding:"0px",marginTop:"-10px",marginLeft:"10px"}}>
                  <BiIcons.BiDownArrow style={{width:"10px"}}/>
                </div>
            </div>

            <div id="grad1"></div> */}

            {/* <div className="container pt-4 ">
              <div className="row">
                
                <div className="col-12 px-0 text-start">
                  <div className="progress_bar">
                    <div className="pro-bar">
                      <span>
                        <div
                          className="progress-bar-inner2"
                          style={{ backgroundColor: "lightgray", width: "10%" }}
                          data-value="0"
                          data-percentage-value="0"
                        >
                          <span className="progress_number"></span>
                        </div>
                      </span>
                      <span>
                        <div
                          className="progress-bar-inner6"
                          style={{ width: "0%" }}
                          data-value="0"
                          data-percentage-value="0"
                        >
                          <div className="progress_number">2000</div>
                        </div>
                      </span>
                      <span>
                        <div
                          className="progress-bar-inner5"
                          style={{ width: "25%" }}
                          data-value="0"
                          data-percentage-value="0"
                        >
                          <div className="progress_number">1500</div>
                        </div>
                      </span>
                      <span>
                        <div
                          className="progress-bar-inner4"
                          style={{ width: "50%" }}
                          data-value="0"
                          data-percentage-value="0"
                        >
                          <div className="progress_number">1000</div>
                        </div>
                      </span>
                      <span>
                        <div
                          className="progress-bar-inner3"
                          style={{ width: "75%" }}
                          data-value="0"
                          data-percentage-value="0"
                        >
                          <div className="progress_number">500</div>
                        </div>
                      </span>
                    </div>
                    <div className="progress_bar_title">Carb</div>
                  </div>
                </div>
              </div>
            </div> */}
            <div style={{ position: "sticky", top: "10px" }}>
              {/* <ProductTemplate /> */}
              <Items />
            </div>
          </div>
          <div
            className="col-md-3 col-lg-3 backColorCard4 cartDesktop"
            style={{
              color: "black",
              paddingRight: "40px",
              paddingLeft: "20px",
              height: "calc(110vh - 10rem)"
            }}
          >
            <div
              className="row"
              style={{ height: "calc(100vh - 10rem)", overflowY: "scroll" }}
            >
              <div className="col-md-12 col-lg-12">
                {/* <div id="cartEmtpy">{this.state.message}</div> */}
              </div>
              <Confirm />
            </div>

            {/* <div className="row">
              <button
                classsName="btn btn-danger buttonPosition"
                onClick={this.updateContent}
              >
                <div className="row">
                  <div className="col-md-6 col-lg-6 addItem">Checkout</div>
                  <div className="col-md-6 col-lg-6  ">40.500 KD</div>
                </div>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
// function Example(props) {
//   return (
//     <div style={{ marginBottom: 2 }} className="d-flex justify-content-center">
//       <div style={{ marginTop: 0 }}>
//         <div style={{ width: "50px" }}>
//           <h6 className="" style={{ textAlign: "center", fontSize: "12px" }}>
//             {props.label}
//           </h6>
//           {props.children}
//         </div>
//       </div>
//     </div>
//   );
// }
function Use(props) {
  const history = useHistory();

  const handleRoute = () => {
    history.push("/checkout");
  };
  return <button onClick={handleRoute}>about</button>;
}
function Example(props) {
  return (
    <div style={{ marginBottom: 0 }} className="d-flex justify-content-center">
      <div style={{ marginTop: 0 }}>
        <div style={{ width: "45px" }}>
          <h6
            className=""
            style={{
              textAlign: "center",
              fontSize: "12px",
              color: "white",
              textShadow: "2px 2px black",
              fontWeight: "bolder"
            }}
          >
            {props.label}
          </h6>
          {props.children}
        </div>
        {/* <div style={{ width: "20%" }}><p>{props.description}</p></div> */}
      </div>
    </div>
  );
}
export default MenuPage;
