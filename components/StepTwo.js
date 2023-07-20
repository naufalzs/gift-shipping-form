import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { StepContext } from "@/app/page";
import { useForm } from "react-hook-form";

export default function StepTwo() {
  const { handleNext, formInput, setformInput } = useContext(StepContext);
  const { register, handleSubmit, watch, setValue } = useForm({
    mode: "onSubmit",
    defaultValues: {
      "addon-special-box": formInput?.addOn?.["addon-special-box"] || false,
      "addon-ribbon": formInput?.addOn?.["addon-ribbon"] || false,
      "addon-bubble-wrap": formInput?.addOn?.["addon-bubble-wrap"] || false,
      "addon-gift-card": formInput?.addOn?.["addon-gift-card"] || false,
      "gift-card": formInput?.addOn?.["gift-card"] || "",
    },
  });

  const isGiftCard = watch("addon-gift-card");
  useEffect(() => {
    if (!isGiftCard) setValue("gift-card", "");
  }, [isGiftCard]);

  const onSubmit = (data) => {
    setformInput({ ...formInput, ...data });
    handleNext();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form__input form__input--step-2"
      id="form-step-2"
    >
      <label htmlFor="addon-special-box">
        <input
          type="checkbox"
          id="addon-special-box"
          defaultChecked={formInput?.["addon-special-box"]}
          value={10}
          {...register("addon-special-box")}
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
        <input
          type="checkbox"
          id="addon-ribbon"
          defaultChecked={formInput?.["addon-ribbon"]}
          value={2}
          {...register("addon-ribbon")}
        />
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
          id="addon-bubble-wrap"
          defaultChecked={formInput?.["addon-bubble-wrap"]}
          value={1}
          {...register("addon-bubble-wrap")}
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
        <input
          type="checkbox"
          id="addon-gift-card"
          defaultChecked={formInput?.["addon-gift-card"]}
          value={3}
          {...register("addon-gift-card")}
        />
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
        <div className="input__label">Gift Card Message</div>
        <textarea
          type="text"
          id="gift-card"
          placeholder="e.g. Happy New Year!!!"
          className="input__textarea"
          rows={3}
          disabled={!isGiftCard}
          {...register("gift-card")}
        />
      </label>
    </form>
  );
}
