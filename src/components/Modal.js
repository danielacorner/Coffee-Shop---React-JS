import { ProductConsumer } from "../context";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, img, title, price, inCart } = value.modalProduct;
          const { show, closeModal, addToCart } = value;

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
                      <h5>customize your drink</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5 className="form-title pb-4 ">{title}</h5>
                      <form action="#">
                        <fieldset className="form-group">
                          <div className="row">
                            <div className="col-sm-10">
                              <h5 className="title">size</h5>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="size_1"
                                  name="size"
                                />
                                <label className="form-check-label">
                                  Small
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="size_2"
                                  name="size"
                                />
                                <label className="form-check-label">
                                  Medium
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="size_3"
                                  name="size"
                                />
                                <label className="form-check-label">
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
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="milk_1"
                                  name="milk"
                                />
                                <label className="form-check-label">
                                  No Milk
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="milk_2"
                                  name="milk"
                                />
                                <label className="form-check-label">
                                  Whole Milk
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="milk_3"
                                  name="milk"
                                />
                                <label className="form-check-label">
                                  Soy Milk
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="milk_4"
                                  name="milk"
                                />
                                <label className="form-check-label">
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
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="sweet_1"
                                  name="sweet"
                                />
                                <label className="form-check-label">
                                  No Suger
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="sweet_2"
                                  name="sweet"
                                />
                                <label className="form-check-label">
                                  One Spoon
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="sweet_3"
                                  name="sweet"
                                />
                                <label className="form-check-label">
                                  Double-Double
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                      <h4>Price{price}</h4>
                      <Link to="/">
                        <button onClick={() => closeModal()}>store</button>
                      </Link>
                      <Link to="/cart">
                        <button
                          disabled={inCart ? true : false}
                          onClick={() => {
                            value.addToCart(id);
                            value.closeModal();
                          }}
                        >
                          {inCart ? "inCart" : "addToCart"}
                        </button>
                      </Link>
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
