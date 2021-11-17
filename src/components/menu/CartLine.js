import React, { Component } from "react";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as TiIcons from "react-icons/ti";
class CartLine extends Component {
  render() {
    // console.log("CartLine");
    return (
      <div>
        <div className="row pt-4" id="cartCards">
          <div className="col-3 col-md-4">
            <div className="row">
              <img
                className="img-fluid w-100 imageSizeCart"
                src="https://lh3.googleusercontent.com/proxy/dgg4PwJLX86RRryTnGx0XsIw0lfju0zVd5shgYfARpxQbhqyjvJm6REq_HI0n4rLOzLUYxklbEsYruZvc3G3leGy3Tqa11cY5Xc2f5_VqhuB9o9XNQ1_YzTPi2wO9Onr653cIl-bZcGMKw"
                alt="product"
              ></img>
            </div>
          </div>

          <div className="col-9 col-md-12 ">
            <div className="row">
              <div className="col-8 col-md-8">
                <h6
                  className=""
                  style={{
                    color: "black",
                    fontWeight: 550,
                    textAlign: "start"
                  }}
                >
                  12x Peporroni pizza
                </h6>
              </div>
              <div className="col-4 col-md-4">
                {/* <button
                  className="btn btn-sm btn-link p-0"
                  style={{ color: "red" }}
                >
                  <BsIcons.BsTrash />
                </button> */}

                <p className="small text-success" style={{ fontSize: "14px" }}>
                  22.000 KD
                </p>
              </div>
              <div className="">
                <button
                  className="btn btn-lg btn-link shadow-none"
                  style={{ color: "red", fontSize: "26px" }}
                  id="cartTrash"
                >
                  <TiIcons.TiDeleteOutline />
                </button>
              </div>
            </div>

            <div className="row text-muted small">
              <div
                className="col-2 col-md-2 px-0 small"
                style={{ textAlign: "end" }}
              >
                12x
              </div>
              <div
                className="col-6 col-md-6 small"
                style={{ textAlign: "start" }}
              >
                Cheese
              </div>

              <div className="col-4 col-md-4 px-0">
                <div className="small">+ 0.500 KD</div>

                {/* <p className=" mt-4 text-success medium">22.000 KD</p> */}
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-8 col-md-12">
                <div className="input-group">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-number btn-md"
                      data-type="minus"
                      data-field="quant[2]"
                      id="minusBtn"
                      // style={{height:"30px"}}
                    >
                      -
                    </button>
                  </span>
                  <input
                    id="cartQty"
                    type="text"
                    name="quant[2]"
                    className="form-control input-number cartQty"
                    value="10"
                    min="1"
                    max="100"
                    readOnly
                    style={{
                      fontSize: "14px",
                      border: "none",
                      outline: "none",
                      backgroundColor: "white",
                      display: "block"
                    }}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-number btn-md"
                      data-type="plus"
                      data-field="quant[2]"
                      id="addBtn"
                    >
                      +
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" pt-2">
            <p
              className="text-muted "
              style={{
                fontSize: "12px",
                textAlign: "start"
              }}
            >
              * Extra sauce
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CartLine;
