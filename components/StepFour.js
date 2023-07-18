import React from "react";

export default function StepFour() {
  return (
    <form className="form__input form__input--step-4" id="form-step-4">
      <div className="summary__container">
        <div className="summary__item">
          <div className="item__title">Item Details</div>
          <div className="item__details">
            <div className="details__title">Teddy Bear</div>
            <div className="details__price">$80</div>
          </div>
          <hr className="item__divider"></hr>
          <div className="item__subtotal">
            <div className="subtotal__title">Subtotal</div>
            <div className="subtotal__price">$160</div>
          </div>
        </div>
        <div className="summary__total">
          <div className="total__title">Total</div>
          <div className="total__price">$500</div>
        </div>
      </div>
    </form>
  );
}
