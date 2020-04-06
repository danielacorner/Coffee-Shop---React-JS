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

  handleDetail = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  addToCart = () => {
    console.log("hello from cart");
  };

  openModal = id => {
    const product = this.handleDetail(id);
    return { modalProduct: product, openModal: true };
  };

  closeModal = () => {
    return { openModal: false };
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
