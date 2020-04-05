import React from "react";
import { coffeeList, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  state = {
    products: coffeeList,
    modalOpen: false,
    modalProduct: detailProduct,
    cart: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  handleDetail = () => {
    console.log("hello");
  };

  addToCart = () => {
    console.log("hello");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
