import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-image-lightbox/style.css";
import "react-lightbox-pack/dist/index.css";
import Items from "../menu/items";

class ProductTemplate extends Component {
  render() {
    return (
      /* ............ Start body................  */
      <div className="App">
        <Items />
      </div>

      /* ............ End body................  */
    );
  }
}
export default ProductTemplate;
