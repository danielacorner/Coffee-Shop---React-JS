import { ProductConsumer } from "../context";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, img, title, price } = value.modalProduct;
          const { show, handleChange, handleSubmit } = value;

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
                      <form action="#" onSubmit={handleSubmit}>
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
                                    value="small"
                                    checked={value.size === "small"}
                                    onChange={(event) => handleChange(event)}
                                  />
                                  Small
                                </label>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id="size_2"
                                    name="size"
                                    value="medium"
                                    checked={value.size === "medium"}
                                    onChange={(event) => handleChange(event)}
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
                                    checked={value.size === "large"}
                                    onChange={(event) => handleChange(event)}
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
                                    checked={value.milk === "no milk"}
                                    onChange={(event) => handleChange(event)}
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
                                    checked={value.milk === "whole milk"}
                                    onChange={(event) => handleChange(event)}
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
                                    checked={value.milk === "soy milk"}
                                    onChange={(event) => handleChange(event)}
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
                                    checked={value.milk === "almond milk"}
                                    onChange={(event) => handleChange(event)}
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
                                    checked={value.sweet === "no suger"}
                                    onChange={(event) => handleChange(event)}
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
                                    checked={value.sweet === "one spoon"}
                                    onChange={(event) => handleChange(event)}
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
                                    checked={value.sweet === "double double"}
                                    //onChange helps me to put what the client chose in the state
                                    onChange={(event) => handleChange(event)}
                                  />
                                  Double-Double
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <button
                          className="btn btn-outline-info text-capitalize"
                          type="submit"
                        >
                          submit
                        </button>
                      </form>
                      <div className="d-flex justify-content-center py-3">
                        <h4 className="px-2">Price {price} $</h4>
                        <button
                          className="btn btn-outline-info text-capitalize"
                          type="submit"
                          //{inCart ? true : false }
                          onClick={() => {
                            value.addToCart(id);
                          }}
                        >
                          add to cart
                        </button>
                      </div>
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
