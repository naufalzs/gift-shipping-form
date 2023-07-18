import React from "react";
import Image from "next/image";

export default function StepFive() {
  return (
    <form className="form__input form__input--step-5" id="form-step-5">
      <div className="finished">
        <div className="finished__title">Thank you,</div>
        <div className="finished__customer-name">Naufal Zufar</div>
        <div className="finished__image"></div>
        <Image
          src="/images/thumbs-up.svg"
          className="finished__image"
          width={100}
          height={100}
        />
        <div className="finished__message">
          Your order has been successfully completed. Throughout the process you
          can check your order shipment step on your email. Thanks to trusted us
          as your gift partner. If you need additional support, please kindly
          email us at support@giftwrapper.com
        </div>
      </div>
    </form>
  );
}
