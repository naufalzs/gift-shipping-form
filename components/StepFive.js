import React, { useContext } from "react";
import Image from "next/image";
import { StepContext } from "@/app/page";

export default function StepFive() {
  const { formInput } = useContext(StepContext);

  return (
    <form className="form__input form__input--step-5" id="form-step-5">
      <div className="finished">
        <div className="finished__title">Thank you,</div>
        <div className="finished__customer-name">{formInput?.bio?.name}</div>
        <div className="finished__image"></div>
        <Image
          src="/images/thumbs-up.svg"
          className="finished__image"
          width={100}
          height={100}
        />
        <div className="finished__message">
          Your order has been successfully completed. Please kindly wait, as we
          are going to send your receipt and order tracking link via email.
          Thanks for becoming our gift partner. If you need additional support,
          please kindly email us at support@giftwrapper.com.
        </div>
      </div>
    </form>
  );
}
