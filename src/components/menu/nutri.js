import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "./navbarData";
import "../../../src/styles.css";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const siteColor = { "--color": `#dc3545` };

function Nutribar() {
  const [nutribar, setNutribar] = useState(false);

  const showNutribar = () => setNutribar(!nutribar);
  const cal = 300;
  const carb = 80;
  const sugar = 2000;
  const protein = 500;
  return (
    <>
      {/* <div>
        <Link to="#" className="nutri-bars">
          <FaIcons.FaBars onClick={showNutribar} id="nutriBar" />
        </Link>
      </div> */}
      <div onClick={showNutribar} />
      <div className={nutribar ? "nutri-menu active" : "nutri-menu "}>
        <div className="" onClick={showNutribar}>
          <div className="">
            <div className="row" id="buck">
              <div className="col-2">
                <Example label="Calorie">
                  <CircularProgressbar
                    value={cal}
                    maxValue={2000}
                    text={`${cal}`}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      // rotation: 0.25,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "butt",

                      // Text size
                      textSize: "24px",

                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 0.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgb(220, 55, 55, ${cal / 100})`,
                      textColor: "#dc3737",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7"
                    })}
                  />
                </Example>
              </div>
              <div className="col-2">
                <Example label="Carb.">
                  <CircularProgressbar
                    value={carb}
                    maxValue={300}
                    text={`${carb}`}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      // rotation: 0.25,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "butt",

                      // Text size
                      textSize: "24px",

                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 0.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgb(230, 154, 2, ${carb / 100})`,
                      textColor: "#e69a02",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7"
                    })}
                  />
                </Example>
              </div>
              <div className="col-2">
                <Example label="Sugar">
                  <CircularProgressbar
                    value={sugar}
                    maxValue={4000}
                    text={`${sugar}`}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      // rotation: 0.25,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "butt",

                      // Text size
                      textSize: "24px",

                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 0.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgb(232, 213, 123, ${sugar / 100})`,
                      textColor: "#e8d57b",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7"
                    })}
                  />
                </Example>
              </div>
              <div className="col-2">
                <Example label="Protein">
                  <CircularProgressbar
                    value={protein}
                    maxValue={600}
                    text={`${protein}`}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      // rotation: 0.25,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "butt",

                      // Text size
                      textSize: "24px",

                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 0.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgb(174, 175, 122, ${protein / 100})`,
                      textColor: "#aeaf7a",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7"
                    })}
                  />
                </Example>
              </div>
              <div className="col-4" id="rotateText">
                <Example>Nutritional</Example>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Example(props) {
  return (
    <div
      style={{ marginBottom: 0, marginLeft: 10 }}
      className="justify-content-start"
    >
      <div style={{ marginTop: 10 }}>
        <div style={{ width: "40px" }}>
          <h6 className="" style={{ textAlign: "center", fontSize: "12px" }}>
            {props.label}
          </h6>
          {props.children}
        </div>
        {/* <div style={{ width: "20%" }}><p>{props.description}</p></div> */}
      </div>
    </div>
  );
}
export default Nutribar;
