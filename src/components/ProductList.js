import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product product={product} key={product.id} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>

        <footer className="text-center">
          <p>
            <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is
            licensed by CC BY 3.0
          </p>
          <p>
            created by <span>shani chulin</span> 2020
          </p>
        </footer>
      </React.Fragment>
    );
  }
}
