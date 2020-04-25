import { ProductConsumer } from "../context";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, img, title, price } = value.modalProduct;
          const { show, size, milk, sweet } = value;

          if (!show) {
            return null;
          } else {
            return (
              <div className="modal-box">
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 items-center text-capitalize"
                    >
                      <h5 className="text-center mt-2">customize your drink</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5 className="form-title pb-3 text-center">{title}</h5>
                      <form action="#">
                        <fieldset className="form-group">
                          <div className="row">
                            <div className="col-sm-2 pt-0">
                              <h5 className="title">size</h5>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id="size_1"
                                    name="size"
                                    checked={size === "small"}
                                    /*  onChange={() => value.handleChangeSize()}*/
                                  />
                                  Small
                                </label>
                                <legend className="col-form-label col-sm-10 pt-0">
                                  {price * 0.8}
                                </legend>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id="size_2"
                                    name="size"
                                    checked={size === "medium"}
                                    /*  onChange={() => value.handleChangeSize()}
                                    value="medium"*/
                                  />
                                  Medium
                                </label>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id="size_3"
                                    name="size"
                                    value="large"
                                    checked={size === "large"}
                                    /*  onChange={() => value.handleChangeSize()}*/
                                  />
                                  Large
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset className="form-group">
                          <div className="row">
                            <div className="col-sm-10">
                              <h5 className="title pt-4">milk</h5>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id="milk_1"
                                    name="milk"
                                    value="no milk"
                                    checked={milk === "no milk"}
                                    /*   onChange={() => value.handleChangeMilk()}*/
                                  />
                                  No Milk
                                </label>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id="milk_2"
                                    name="milk"
                                    value="whole milk"
                                    checked={milk === "whole milk"}
                                    /*    onChange={() => value.handleChangeMilk()}*/
                                  />
                                  Whole Milk
                                </label>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id="milk_3"
                                    name="milk"
                                    value="soy milk"
                                    checked={milk === "soy milk"}
                                    /*      onChange={() => value.handleChangeMilk()}*/
                                  />
                                  Soy Milk
                                </label>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id="milk_4"
                                    name="milk"
                                    value="almond milk"
                                    checked={milk === "almond milk"}
                                    /*     onChange={() => value.handleChangeMilk()}*/
                                  />
                                  Almond Milk
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset className="form-group">
                          <div className="row">
                            <div className="col-sm-10">
                              <h5 className="title pt-4">Sweetner</h5>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id="sweet_1"
                                    name="sweet"
                                    value="no suger"
                                    checked={sweet === "no suger"}
                                    /*    onChange={() => value.handleChangeSweet()}*/
                                  />
                                  No Suger
                                </label>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id="sweet_2"
                                    name="sweet"
                                    value="one spoon"
                                    checked={sweet === "one spoon"}
                                    /*   onChange={() => value.handleChangeSweet()}*/
                                  />
                                  One Spoon
                                </label>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id="sweet_3"
                                    name="sweet"
                                    value="double double"
                                    checked={sweet === "double double"}
                                    //onChange helps me to put what the client chose in the state
                                    /*     onChange={() => value.handleChangeSweet()}*/
                                  />
                                  Double-Double
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <div className="d-flex justify-content-center py-3">
                          <h4 className="px-2">Price {price} $</h4>
                          <button
                            className="btn btn-outline-info text-capitalize"
                            //{inCart ? true : false}
                            onClick={() => {
                              value.addToCart(id);
                            }}
                          >
                            add to cart
                          </button>
                        </div>
                      </form>
                      <div className="buttons text-center">
                        <Link to="/">
                          <button
                            className="btn btn-warning mx-2 px-4 text-capitalize"
                            onClick={() => value.closeModal()}
                          >
                            back to the store
                          </button>
                        </Link>
                        <Link to="/cart">
                          <button
                            className="btn btn-info my-2 text-capitalize"
                            // disabled={inCart ? true : false}
                            onClick={() => value.closeModal()}
                          >
                            go to cart
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
