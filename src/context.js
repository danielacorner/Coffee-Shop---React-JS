import React from "react";
import { coffeeList, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  state = {
    products: coffeeList,
    show: false,
    modalProduct: detailProduct,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, show: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { show: false };
    });
  };

  increment = (id) => {
    const product = this.getItem(id);
    this.setState ( ()=> {
      return {count = product.count+1}
    })
  };

  decrement = (id) => {
    const product = this.getItem(id);
    this.setState ( ()=> {
      return (count > 0) ? {count = product.count-1}:"zero";
    })
  };

  removeItem = (id) => {
    console.log("item removed");
  };

  clearCart = (id) => {
    console.log("cart cleared");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
