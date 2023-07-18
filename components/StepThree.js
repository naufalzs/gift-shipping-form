import React from "react";

export default function StepThree() {
  return (
    <form className="form__input form__input--step-3" id="form-step-3">
      <div>
        <input type="radio" name="shipment" id="shipment-regular" />
        <label
          htmlFor="shipment-regular"
          className="radio-shipment__container radio-shipment__container--regular"
        >
          <div className="input__radio input__radio--regular"></div>
          <div className="radio-shipment__info">
            <div className="shipment-info__title">
              Regular Shipment (ETA 2 - 3 days)
            </div>
            <div className="shipment-info__price">$15</div>
          </div>
        </label>
      </div>
      <div>
        <input type="radio" name="shipment" id="shipment-one-day" />
        <label
          htmlFor="shipment-one-day"
          className="radio-shipment__container radio-shipment__container--one-day"
        >
          <div className="input__radio input__radio--one-day"></div>
          <div className="radio-shipment__info">
            <div className="shipment-info__title">
              One Day Service (ETA 1 days)
            </div>
            <div className="shipment-info__price">$25</div>
          </div>
        </label>
      </div>
      <div>
        <input type="radio" name="shipment" id="shipment-instant" />
        <label
          htmlFor="shipment-instant"
          className="radio-shipment__container radio-shipment__container--instant"
        >
          <div className="input__radio input__radio--instant"></div>
          <div className="radio-shipment__info">
            <div className="shipment-info__title">
              Instant Courier (ETA 4 - 8 hours)
            </div>
            <div className="shipment-info__price">$35</div>
          </div>
        </label>
      </div>
    </form>
  );
}
