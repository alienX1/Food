import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-image-lightbox/style.css";
import "react-lightbox-pack/dist/index.css";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

class CarouselImages extends Component {
  render() {
    let renderRevel = true;
    let image = null;

    if (renderRevel) {
      image =
        "https://images-gmi-pmc.edge-generalmills.com/b57ee35f-bce2-4229-8bf5-19b97876a4cb.jpg";
    } else {
      image = "";
    }

    return (
      /* ............ Start body................  */
      <div>
        <div className="positionRelative">
          <div className="container container-center-horizontal px-2">
            {/* ............top header................  */}
            <div className="row">
              {/* ......... Start Back button ...... */}
              <div className="col-6 py-0 textAlignStart">
                <Link to="/menu/">
                  <button className="btn btn-light py-0 btn-circle ">
                    <AiIcons.AiOutlineArrowLeft style={{ color: "black" }} />
                  </button>
                </Link>
              </div>
              {/* ......... End Back button ...... */}

              {/* ............ Start Share button ............ */}
              <div className="col-6 py-0 textAlignEnd">
                <button className="btn btn-light py-0 btn-circle ">
                  <AiIcons.AiOutlineShareAlt />
                </button>
              </div>
              {/* ............ End Share button ............ */}
            </div>
          </div>
        </div>
        {/* ............ Start Product name ............ */}
        <div className="row productName">
          <div className="col-12">
            <h3 className="productNamecolumn">Legend 1</h3>
          </div>
        </div>
        {/* ............ End Product name ............ */}

        {/* ............ Start Carousel ............ */}
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={4500}
        >
          <div>
            <img
              className="imageSize"
              src="https://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3-500x500.jpg"
              alt=""
            />
          </div>

          <div>
            <img
              className="imageSize"
              src="https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/5:4/w_4165,h_3332,c_limit/basically-burger-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img className="imageSize" src={image} alt="" />
          </div>
        </Carousel>
        {/* ............ End Carousel ............ */}
      </div>
      /* ............End body................  */
    );
  }
}

export default CarouselImages;
