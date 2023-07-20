import React, { useContext } from "react";
import { StepContext } from "@/app/page";
import chosenItem from "json/chosenItem.json";

const SummaryItem = ({ title, data, subtotal }) => {
  const itemDetails = data.map((item) => {
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

  const sumSubtotal = (itemsData) => {
    return itemsData.reduce((total, item) => {
      return total + parseInt(item.price);
    }, 0);
  };

  const giftMessage = formInput.addOn["gift-card"];
  delete formInput.addOn["gift-card"];

  const groupAddon = createGroup(formInput?.addOn)?.data;
  const groupShipment = formInput?.shipment;

  const subtotalItem = sumSubtotal(chosenItem?.data);
  const subtotalAddon = sumSubtotal(groupAddon);
  const subtotalShipment = sumSubtotal(groupShipment);
  const totalPrice = subtotalItem + subtotalAddon + subtotalShipment;
  return (
    <form
      onSubmit={onSubmit}
      className="form__input form__input--step-4"
      id="form-step-4"
    >
      <div className="summary__container">
        <div>
          <SummaryItem
            title="Item"
            data={chosenItem?.data}
            subtotal={subtotalItem}
          />
          <SummaryItem
            title="Add On"
            data={groupAddon}
            subtotal={subtotalAddon}
          />
          <SummaryItem
            title="Delivery"
            data={groupShipment}
            subtotal={subtotalShipment}
          />
        </div>
        <div className="summary__total">
          <div className="total__title">Total</div>
          <div className="total__price">${totalPrice}</div>
        </div>
      </div>
    </form>
  );
}
