import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="col-8 mx-auto col-lg-4 col-md-4">
        <div className="card mt-3">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-4"
                onClick={() => {
                  value.handleDetail(id);
                  value.openModal(id);
                }}
              >
                <div className="coffeType">
                  <Link to="/modal">
                    <img src={img} alt="product_img" className="card-img-top" />
                  </Link>

                  <div className="d-flex justify-content-between pb-3">
                    <h5 className="title">{title}</h5>
                    <h5 className="price">{price}$</h5>
                  </div>
                </div>

                {/* <div className="card-footer px-0 pt-3">
                  <button
                    className="btn-cart btn-warning btn-block"
                    onClick={() => value.hadToCart(id)}
                  >
                    add to cart
                  </button>
            </div>*/}
              </div>
            )}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}
