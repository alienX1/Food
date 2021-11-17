import React from "react";

import { ItemsData } from "./itemsData";

import * as ImIcons from "react-icons/im";
import * as FaIcons from "react-icons/fa";

import { Carousel } from "react-responsive-carousel";
import Ingred from "../product/ingred";
import "../../colorData";

import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";

const product = {
  price: "23.500",
  qty: "3",
  total: "49.000",
  note: "3 days",
  description: "delecious"
};
const siteColor = { "--color": `#dc3545` };

class Test extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  // state = { ProductModal: false, name: "" };
  // showProductModal = () => {
  //   this.setState({ ProductModal: !this.state.ProductModal });
  // };

  state = { ProductModal: false, name: "", productClass: "dining-modal" };
  showProductModal = () => {
    this.setState({ ProductModal: !this.state.ProductModal });
  };

  render() {
    let Prod = [];
    for (let i = 0; i < ItemsData.length; i++) {
      let prod2 = ItemsData[i].subCategory;
      for (let j = 0; j < prod2.length; j++) {
        Prod.push(prod2[j]);
      }
    }
    let renderRevel = true;
    let image = null;

    if (renderRevel) {
      image =
        "https://images-gmi-pmc.edge-generalmills.com/b57ee35f-bce2-4229-8bf5-19b97876a4cb.jpg";
    } else {
      image = "";
    }

    return (
      <>
        <div className="" ontouchstart="">
          <div className="row serachContainer " style={siteColor}>
            <div className="col-lg-2 col-md-2 desktopMenu"></div>
            <div className="col-12 col-md-10 col-lg-10 searchRow py-1">
              {/* <div id="seconddiv2">
                <Autocomplete
                  disablePortal
                  id="free-solo-with-text-demo"
                  freeSolo
                  options={Prod}
                  // sx={{ height: 50 }}

                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Search ....."
                      variant="standard"
                      size="small"

                      // color="red"
                    />
                  )}
                />
              </div> */}
              <div className="py-2">
                <input
                  placeholder="Search ....."
                  style={{
                    width: "100%",
                    outline: "none",
                    borderBottom: "1px solid #dc3545",
                    borderTop: "0px",
                    borderLeft: "0px",
                    borderRight: "0px"
                  }}
                ></input>
                <AiIcons.AiOutlineSearch id="icon" alt="" />
              </div>
            </div>
          </div>

          <div className="row px-0  ">
            {" "}
            <div
              className="col-md-2 col-12 col-lg-2 px-0 backColorCard4 menuScroll"
              ontouchstart=""
            >
              <div className="rowScroll ">
                <ul id="ul_top_hypers2">
                  {ItemsData.map((item, index) => {
                    return (
                      <li key={item.id} style={{ color: "black" }}>
                        <a
                          href="#"
                          className="menuActive"
                          ontouchstart=""
                          style={siteColor}
                        >
                          {item.subCategory}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-10 col-lg-10 proScroll">
              <div className="proScroll">
                {ItemsData.map((item, index) => {
                  return (
                    <div className=" bo ">
                      <div className="row subPadding">
                        <h6
                          style={{ textAlign: "initial", fontSize: "21px" }}
                          // key={index}
                        >
                          {item.subCategory}
                        </h6>
                      </div>

                      {/* ----------------------------Start pro ------------------------------ */}
                      <div className="row">
                        {item.products.map((product, index) => {
                          return (
                            <div
                              className="col-4 py-4 colCenter"
                              key={product.id}
                              onClick={() => this.showProductModal()}
                              // ref={ref}
                              style={{ cursor: "pointer" }}
                            >
                              {/* <Link to="/product/"> */}
                              <div
                                className=" col-12 px-2 proImage4"
                                style={{
                                  "--img4": `url(${product.img})`
                                }}
                              >
                                {/* {console.log({ mac }, "mac")} */}
                                <div className="row px-1 rowJustify">
                                  <div className="col-12 priceTag4">
                                    {" "}
                                    {product.price}{" "}
                                  </div>
                                </div>

                                <div
                                  className=""
                                  style={{
                                    height: "25px"
                                  }}
                                ></div>
                                <div
                                  className="row "
                                  style={{ height: "83px" }}
                                ></div>
                                <div className="col-12 px-1">
                                  <div className="row backColorCard2">
                                    <div
                                      className=" col-6 "
                                      style={{
                                        textAlign: "center"
                                        // paddingLeft: "10px"
                                      }}
                                    >
                                      <AiIcons.AiOutlineFire
                                        style={{
                                          color: "red",
                                          fontSize: "12px"
                                          // textAlign: "center"
                                          // boxShadow: "0px 0px 30px rgba(255, 255, 255, 1.71)"
                                        }}
                                      />{" "}
                                      <i
                                        style={{
                                          color: "white",
                                          fontSize: "12px"
                                        }}
                                      >
                                        {product.cal}
                                      </i>
                                    </div>
                                    <div className=" col-6 ">
                                      <GiIcons.GiLindenLeaf
                                        style={{
                                          color: "yellow",
                                          fontSize: "12px"
                                          // textAlign: "center"
                                          // boxShadow: "0px 0px 30px rgba(255, 255, 255, 1.71)"
                                        }}
                                      />
                                      <i
                                        style={{
                                          color: "white",
                                          fontSize: "12px"
                                        }}
                                      >
                                        {product.carb}
                                      </i>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-12">{product.title}</div>
                              </div>
                              {/* </Link> */}
                            </div>
                          );
                        })}
                      </div>

                      <div
                        className={`row productBodyOverflow ${
                          this.state.ProductModal
                            ? "product-modal active"
                            : "product-modal"
                        }`}
                      >
                        <div className="row productName plainWhite ">
                          <div className="col-12 col-md-6 col-lg-6 px-0 ">
                            {/* ............ Start carousel................   */}

                            {/* ............top header................  */}
                            <div className="row productName">
                              {/* ......... Start Back button ...... */}
                              <div classNAme="col-12">
                                <div className="row px-0 container-center-horizontal">
                                  <div className="col-6 textAlignStart">
                                    <button
                                      className="btn btn-light btn-circle "
                                      onClick={() => this.showProductModal()}
                                    >
                                      <FaIcons.FaArrowLeft />
                                    </button>
                                  </div>
                                  {/* ......... End Back button ...... */}

                                  {/* ............ Start Share button ............ */}
                                  <div className="col-6  textAlignEnd">
                                    <button className="btn btn-light btn-circle ">
                                      <ImIcons.ImShare2 />
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
                                {/* <a href="https://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3-500x500.jpg"> */}
                                <img
                                  className="imageSize"
                                  src="https://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3-500x500.jpg"
                                  alt=""
                                />
                              </div>
                              {/* </div> */}
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

                            {/* ............ End carousel................   */}
                            {/* ............ Start product description................   */}

                            <div className="col-12">
                              <div className="productDescription ">
                                <p
                                  className=" montserrat-medium-ebony-clay-16px2 "
                                  data-id="Label_1a0c878d-4fcd-4349-9370-01adbb0378d6"
                                >
                                  {product.description
                                    ? product.description
                                    : ""}
                                </p>
                              </div>
                            </div>

                            {/* ............ End product description................   */}
                            {/* ............ Start price, qty and add item button................   */}

                            <div className=" stickScroll backcolor ">
                              <div className="row px-4 ">
                                {/* ............ Start product price................   */}
                                <div className="col-6  number">
                                  {product.price ? product.price : ""} KD
                                </div>
                                {/* ............ End product price................   */}
                                {/* ............ Start product qty................   */}
                                <div className="col-6  productQty">
                                  {/* ............ Start minus sign................   */}

                                  <span>
                                    <button className="btn btn-secondary btn-sm py-0 productButton">
                                      -
                                    </button>
                                  </span>
                                  {/* ............ End minus sign................   */}

                                  {/* ............ Start product qty................   */}

                                  <span
                                    className="number2"
                                    data-id="Label_4b80cc63-9c2e-44ec-91a6-8eb3ba30967e"
                                  >
                                    {product.qty ? product.qty : ""}
                                  </span>
                                  {/* ............ Start product qty................   */}
                                  {/* ............ Start plus sign................   */}
                                  <span>
                                    <button className="btn btn-danger btn-sm  productButton">
                                      +
                                    </button>
                                  </span>
                                  {/* ............ End plus sign................   */}
                                </div>
                                {/* ............ End product price................   */}
                              </div>

                              {/* ............ Start product add item button................   */}

                              <div className=" row px-4 addItemContainer">
                                <button className="btn btn-danger py-2  ">
                                  <div className="row">
                                    <div className="col-8 addItem">
                                      Add Item
                                    </div>
                                    <div className="col-4 total">
                                      {product.total ? product.total : "0"} KD
                                    </div>
                                  </div>
                                </button>
                                {/* ............ End product add item button................   */}
                              </div>

                              <br></br>
                            </div>

                            {/* ............ End price, qty and add item button................   */}
                            {/* ............ Start nutritional information................   */}

                            <div className="col-12">
                              <div className=" backcolor  ">
                                <div className="row px-4">
                                  <div className="col-12  ">
                                    <div
                                      className="nutritionalinfo2-1 "
                                      data-id="View_537cf12f-29bf-40bc-9c01-82ca6392f0fd"
                                    >
                                      {/* ............ Start nutritional title................   */}

                                      <div
                                        className="nutritional-informat lato-normal-ebony-clay-18px col-12 py-2 "
                                        data-id="Label_3a620803-3b63-43f6-9ea0-0ac6b8cbaeab"
                                      >
                                        Nutritional information
                                      </div>
                                      {/* ............ End nutritional title................   */}
                                    </div>

                                    <div
                                      className="row py-4"
                                      data-id="an|W4MBqWCx"
                                    >
                                      <div
                                        className="col-3 "
                                        data-id="an|vZpVvJiD"
                                      >
                                        <div className="numbers lato-normal-ebony-clay-18px">
                                          243,8
                                        </div>
                                        <div className="carbohid lato-normal-star-dust-14px ">
                                          carbohid.
                                        </div>
                                      </div>
                                      <div
                                        className="col-3 "
                                        data-id="an|OBoH3Zug"
                                      >
                                        <div className="x28g lato-normal-ebony-clay-18px">
                                          45
                                        </div>
                                        <div className="calorias lato-normal-star-dust-14px ">
                                          calorias
                                        </div>
                                      </div>
                                      <div
                                        className="col-3 "
                                        data-id="an|IxKPmaEy"
                                      >
                                        <div className="x457g lato-normal-ebony-clay-18px">
                                          45,7g
                                        </div>
                                        <div className="proteinas valign-text-middle lato-normal-star-dust-14px">
                                          proteinas
                                        </div>
                                      </div>
                                      <div
                                        className="col-3 "
                                        data-id="an|0xCxDl4L"
                                      >
                                        <div className="x98g lato-normal-ebony-clay-18px">
                                          9,8g
                                        </div>
                                        <div className="grasas lato-normal-star-dust-14px ">
                                          grasas
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <br></br>
                            </div>

                            {/* ............ End nutritional information................   */}
                            {/* ............ Start ingredient................   */}

                            <div className="col-12  ">
                              <Ingred
                                ingredients="Ingredients"
                                ingredient_Image4="product-model-2-ingredientimage4.png"
                                kiwi="Kiwi"
                                yogurt="Yogurt"
                                surname="Cherry"
                                blueberry="Blueberry"
                                ingredient_Image32="product-model-2-ingredientimage32.png"
                                ingredient_Image22="product-model-2-ingredientimage22.png"
                                ingredient_Image12="product-model-2-ingredientimage12.png"
                              />
                            </div>
                            <br></br>
                          </div>

                          {/* ............ End ingredient................   */}
                          {/* ............ Start modifiers................   */}
                          <div className="col-12 col-md-6 col-lg-6 productOverflow px-0  ">
                            <div className=" backcolor ">
                              ingredients
                              <ul>
                                <li>tomato</li>
                                <li>tomato</li>
                                <li>tomato</li>
                                <li>tomato</li>
                                <li>tomato</li>
                              </ul>
                              <div
                                style={{
                                  // width: "100%",

                                  paddingLeft: "5%",
                                  paddingRight: "5%"
                                }}
                              >
                                <textarea
                                  style={{
                                    width: "100%"
                                  }}
                                  name="w3review"
                                >
                                  At w3schools.com you will learn how to make a
                                  website. They offer free tutorials in all web
                                  development technologies.
                                </textarea>
                              </div>
                              <ul>
                                <li>tomato</li>
                                <li>tomato</li>
                                <li>tomato</li>
                                <li>tomato</li>
                                <li>tomato</li>
                              </ul>
                              <ul>
                                <li>tomato</li>
                                <li>tomato</li>
                                <li>tomato</li>
                                <li>tomato</li>
                                <li>tomato</li>
                              </ul>
                              <ul>
                                <li>tomato</li>
                                <li>tomato</li>
                                <li>tomato</li>
                                <li>tomato</li>
                                <li>tomato</li>
                              </ul>
                              <ul>
                                <li>tomato</li>
                                <li>tomato</li>
                                <li>tomato</li>
                                <li>tomato</li>
                                <li>tomato</li>
                              </ul>
                              <br></br>
                            </div>

                            {/* ............ End modifiers................   */}
                          </div>
                        </div>
                      </div>
                      {/* -----------------------End pro ------------------------------- */}
                      <br></br>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Test;
