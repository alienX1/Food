import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import "../menu/menuStyle.css";
import * as FiIcons from "react-icons/fi";

const siteColor = { "--color": `#dc3545` };
const HomePage = (props) => {
  const { headerTitle, subTitle, buttonStart } = props;
  const homepageImage = {
    "--homepageImage": `url("https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb")`
  };
  return (
    /* ............ Start body................  */

    <div className="App home your " style={homepageImage}>
      <div className=" container-fluid transbox ">
        <div className="row py-0">
          <div className="col-12 powerButton">
            <button className="btn  py-0 " style={{ color: "white" }}>
              <FiIcons.FiPower fontSize="large" />
            </button>

            <div id="loginStyel">Login</div>
          </div>
        </div>

        <div className="row" id="titleRow">
          <div className="col-12 col-sm-12 col-md-12">
            <FadeIn delay="650">
              <div id="mainTitle">{headerTitle}</div>
            </FadeIn>
            <br></br>
            <FadeIn delay="800">
              <div>{subTitle}</div>
            </FadeIn>
            <br></br>
            <div>
              <Link to="/menu">
                <button
                  className="btn btn-danger buttonStart"
                  style={siteColor}
                >
                  <div className="row">
                    <div className="col-12 start">{buttonStart}</div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    /* ............ End body................  */
  );
};
export default HomePage;
