import React, { useContext } from "react";
import { StepContext } from "@/app/page";
import chosenItem from "json/chosenItem.json";

const SummaryItem = ({ title, data }) => {
  let subtotal = 0;
  const itemDetails = data.map((item) => {
    subtotal += parseInt(item.price);
    return (
      <div key={item.name} className="item__details">
        <div className="details__title">{item.name}</div>
        <div className="details__price">${item.price}</div>
      </div>
    );
  });

  return (
    <div className="summary__item">
      <div className="item__title">{title} Details</div>
      {itemDetails}
      <hr className="item__divider"></hr>
      <div className="item__subtotal">
        <div className="subtotal__title">Subtotal</div>
        <div className="subtotal__price">${subtotal}</div>
      </div>
    </div>
  );
};

export default function StepFour() {
  const { handleNext, formInput } = useContext(StepContext);

  const onSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  const transformKey = (name) => {
    let modName = name;
    modName = modName.replace("addon", "");
    modName = modName.replaceAll("-", " ");
    modName = modName.trim();
    return modName;
  };

  const createGroup = (initialObject) => {
    const mapFn = (key, value) => ({ name: transformKey(key), price: value });
    const listObj = (obj, mapFn) =>
      Object.entries(obj).reduce((acc, [key, value]) => {
        acc.push(mapFn(key, value));
        return acc;
      }, []);

    return {
      data: listObj(initialObject, mapFn).filter((item) => item.price > 0),
    };
  };

  const giftMessage = formInput.addOn["gift-card"];
  delete formInput.addOn["gift-card"];

  const groupAddon = createGroup(formInput?.addOn)?.data;
  const groupShipment = formInput?.shipment;
  return (
    <form
      onSubmit={onSubmit}
      className="form__input form__input--step-4"
      id="form-step-4"
    >
      <div className="summary__container">
        <div>
          <SummaryItem title="Item" data={chosenItem?.data} />
          <SummaryItem title="Add On" data={groupAddon} />
          <SummaryItem title="Delivery" data={groupShipment} />
        </div>
        <div className="summary__total">
          <div className="total__title">Total</div>
          <div className="total__price">$500</div>
        </div>
      </div>
    </form>
  );
}
