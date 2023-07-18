import React from "react";
import Image from "next/image";

export default function StepTwo() {
  return (
    <form className="form__input form__input--step-2" id="form-step-2">
      <label htmlFor="addon-special-box">
        <input
          type="checkbox"
          name="addon-special-box"
          id="addon-special-box"
        />
        <div className="input__checkbox input__checkbox--special-box">
          <Image
            src="/images/addon-box.svg"
            width={100}
            height={100}
            alt="add on special box"
          />
        </div>
        <div className="input__label input__label--center">Special Box</div>
      </label>
      <label htmlFor="addon-ribbon">
        <input type="checkbox" name="addon-ribbon" id="addon-ribbon" />
        <div className="input__checkbox input__checkbox--ribbon">
          <Image
            src="/images/addon-ribbon.svg"
            width={100}
            height={100}
            alt="add on ribbon"
          />
        </div>
        <div className="input__label input__label--center">Ribbon</div>
      </label>
      <label htmlFor="addon-bubble-wrap">
        <input
          type="checkbox"
          name="addon-bubble-wrap"
          id="addon-bubble-wrap"
        />
        <div className="input__checkbox input__checkbox--bubble-wrap">
          <Image
            src="/images/addon-bubble-wrap.svg"
            width={100}
            height={100}
            alt="add on bubble wrap"
          />
        </div>
        <div className="input__label input__label--center">Bubble Wrap</div>
      </label>
      <label htmlFor="addon-gift-card">
        <input type="checkbox" name="addon-gift-card" id="addon-gift-card" />
        <div className="input__checkbox input__checkbox--gift-card">
          <Image
            src="/images/addon-gift-card.svg"
            width={100}
            height={100}
            alt="add on gift card"
          />
        </div>
        <div className="input__label input__label--center">Gift Card</div>
      </label>
      <label htmlFor="gift-card" className="gift-card__wrapper">
        <div className="input__label">Delivery Address</div>
        <textarea
          type="text"
          name="gift-card"
          id="gift-card"
          placeholder="e.g. Happy New Year!!!"
          className="input__textarea"
          rows={3}
        />
      </label>
    </form>
  );
}
