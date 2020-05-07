import { ProductContext } from "../context";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// * recently we got React "hooks" which let you do all the same things you can do in a class component, in a functional component!
// * it's way easier and much more fun, I recommend looking into React hooks when you get the chance :)
export default function Modal() {
  // * here's a react hook "useContext", it makes using a context super simple
  const productContext = useContext(ProductContext); // * I renamed "value" to the more informative "productContext"
  if (!productContext.show) {
    return null;
  } else {
    // * with code, the bottleneck is always your brain, so we want to make our code easy to think about.
    // * one way to do that for components is to extract them into small, reusable subcomponents.
    // * this common pattern here is XYZ and XYZContent -- the outer component takes care of any rendering logic, the inner component is just the content.
    return <ModalContent />;
  }
}

function ModalContent() {
  const { modalProduct, addToCart, closeModal } = useContext(ProductContext);
  const { id, price } = modalProduct;
  // * in the code below, I looked for and "extracted/abstracted" things that looked like "units"
  // * to make it easier to read & think about
  return (
    <div className="modal-box">
      <div className="container">
        <div className="row">
          <div
            id="modal"
            className="col-8 mx-auto col-md-6 col-lg-4 items-center text-capitalize"
          >
            <ModalTitle />
            <ModalForm />
            <div className="d-flex justify-content-center py-3">
              <h4 className="px-2">Price {price} $</h4>
              <button
                className="btn btn-outline-info text-capitalize"
                type="submit"
                //{inCart ? true : false }
                onClick={() => {
                  addToCart(id);
                }}
              >
                add to cart
              </button>
            </div>
            <Buttons closeModal={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalTitle() {
  const { modalProduct } = useContext(ProductContext);
  const { img, title } = modalProduct;
  return (
    <>
      <h5 className="text-center mt-2">customize your drink</h5>
      <img src={img} className="img-fluid" alt="product" />
      <h5 className="form-title pb-3 text-center">{title}</h5>
    </>
  );
}

function ModalForm() {
  const { handleChange, handleSubmit, size, milk, sweet } = useContext(
    ProductContext
  );
  // * I noticed there wass a lot of repetition in the form-check divs, so I abstracted what was unique, and we can map them out.
  const sizeRadioButtons = [
    { value: "small", displayName: "Small" },
    { value: "medium", displayName: "Medium" },
    { value: "large", displayName: "Large" },
  ];
  // * Try doing the same thing for the next two sets of form-check elements :) less code is better!
  // const milkRadioButtons = [];
  // const sugarRadioButtons = [];
  return (
    <form action="#" onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <div className="row">
          <div className="col-sm-2 pt-0">
            <h5 className="title">size</h5>
            {sizeRadioButtons.map((
              { value, displayName },
              idx /* we can grab the looping index as the second parameter in any array function like map */
            ) => (
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    id={`size_${idx + 1}`}
                    name="size"
                    value={value}
                    checked={size === value}
                    onChange={handleChange}
                  />
                  {displayName}
                </label>
              </div>
            ))}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
                Double-Double
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <button className="btn btn-outline-info text-capitalize" type="submit">
        submit
      </button>
    </form>
  );
}

// * you can pass in what you need as props, or just call useContext to access it directly in the component
const Buttons = ({ closeModal }) => (
  <div className="buttons text-center">
    <Link to="/">
      <button
        className="btn btn-warning mx-2 px-4 text-capitalize"
        onClick={closeModal}
      >
        back to the store
      </button>
    </Link>
    <Link to="/cart">
      <button
        className="btn btn-info my-2 text-capitalize" // disabled={inCart ? true : false}
        onClick={closeModal}
      >
        go to cart
      </button>
    </Link>
  </div>
);
