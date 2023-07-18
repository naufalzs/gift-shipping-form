import React from "react";

export default function StepOne() {
  return (
    <form className="form__input form__input--step-1" id="form-step-1">
      <label htmlFor="name">
        <div className="input__label">Name</div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Naufal Zufar"
          className="input__text"
        />
      </label>
      <label htmlFor="number">
        <div className="input__label">Phone Number</div>
        <input
          type="tel"
          name="number"
          id="number"
          placeholder="e.g. +6281372961321"
          className="input__text"
        />
      </label>
      <label htmlFor="email">
        <div className="input__label">Email Adress</div>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="e.g. hansolo@mail.com"
          className="input__text"
        />
      </label>
      <label htmlFor="address">
        <div className="input__label">Delivery Adress</div>
        <textarea
          type="text"
          name="address"
          id="address"
          placeholder="e.g. Gangnam street, Busan, 14020"
          className="input__textarea"
          rows={5}
        />
      </label>
    </form>
  );
}
