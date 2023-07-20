import React, { useContext } from "react";
import { StepContext } from "@/app/page";
import { useForm } from "react-hook-form";
import {
  SHIPMENT_INSTANT,
  SHIPMENT_ONE_DAY,
  SHIPMENT_REGULAR,
} from "utils/types/shipment";

export default function StepThree() {
  const { handleNext, formInput, setformInput } = useContext(StepContext);
  const { register, handleSubmit } = useForm({
    mode: "onSubmit",
    defaultValues: {
      shipment: formInput?.shipment?.[0]?.name || SHIPMENT_REGULAR,
    },
  });

  const onSubmit = (data) => {
    const shipmentObject = (chosenShipment) => {
      switch (chosenShipment) {
        case SHIPMENT_REGULAR:
          return {
            name: SHIPMENT_REGULAR,
            price: 15,
          };

        case SHIPMENT_ONE_DAY:
          return {
            name: SHIPMENT_REGULAR,
            price: 25,
          };

        case SHIPMENT_INSTANT:
          return {
            name: SHIPMENT_INSTANT,
            price: 35,
          };

        default:
          break;
      }
    };

    setformInput({ ...formInput, shipment: [shipmentObject(data?.shipment)] });
    handleNext();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form__input form__input--step-3"
      id="form-step-3"
    >
      <div>
        <input
          type="radio"
          id="shipment-regular"
          value={SHIPMENT_REGULAR}
          {...register("shipment", { required: true })}
        />
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
        <input
          type="radio"
          id="shipment-one-day"
          value={SHIPMENT_ONE_DAY}
          {...register("shipment", { required: true })}
        />
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
        <input
          type="radio"
          id="shipment-instant"
          value={SHIPMENT_INSTANT}
          {...register("shipment", { required: true })}
        />
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
