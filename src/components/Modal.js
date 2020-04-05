import { ProductConsumer } from "../context";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, img, title, info, price } = value.modalProduct;
          const { openModal, closeModal, addToCart } = value;

          if (!openModal) {
            return null;
          } else {
            return (
              <div className="modal" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header text-center">
                      <h4>{title}</h4>
                      <img src={img} />
                      <p className="description">{info}</p>
                    </div>
                    <div className="model-body mx-3">
                      <form action="#">
                        <div className="coffeSize">
                          <h5 className="title">size</h5>
                          <div className="row">
                            <input type="radio" id="size_1" />
                            <label for="Small">Small</label>
                          </div>
                          <div className="row">
                            <input type="radio" id="size_2" />
                            <label for="Medium">Medium</label>
                          </div>
                          <div className="row">
                            <input type="radio" id="size_3" />
                            <label for="Large">Large</label>
                          </div>
                        </div>
                        <div className="Milk">
                          <h5 className="title">milk</h5>
                          <div className="row">
                            <input type="radio" id="milk_1" />
                            <label for="No Milk">No Milk</label>
                          </div>
                          <div className="row">
                            <input type="radio" id="milk_2" />
                            <label for="Whole Milk">Whole Milk</label>
                          </div>
                          <div className="row">
                            <input type="radio" id="milk_3" />
                            <label for="Soy Milk">Soy Milk</label>
                          </div>
                          <div className="row">
                            <input type="radio" id="milk_4" />
                            <label for="Almond Milk">Almond Milk</label>
                          </div>
                        </div>
                        <div className="Sweetner">
                          <h5 className="title">Sweetner</h5>
                          <div className="row">
                            <input type="radio" id="sweet_1" />
                            <label for="No Suger">No Suger</label>
                          </div>
                          <div className="row">
                            <input type="radio" id="sweet_2" />
                            <label for="One Spoon">One Spoon</label>
                          </div>
                          <div className="row">
                            <input type="radio" id="sweet_3" />
                            <label for="Double Double">Double-Double</label>
                          </div>
                        </div>
                      </form>
                      <h4>Price{price}</h4>
                      <Link to="/">
                        <button onClick={() => closeModal()}>store</button>
                      </Link>
                      <Link to="/cart">
                        <button onClick={(() => addToCart(id), closeModal())}>
                          add to cart
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
