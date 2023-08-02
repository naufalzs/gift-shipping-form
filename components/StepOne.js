import React, { useContext } from "react";
import { StepContext } from "@/app/page";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().label("Name").required(),
  number: yup
    .string()
    .label("Phone Number")
    .required()
    .matches(
      /^\+\d{3,15}$/g,
      "Invalid phone number input"
    ),
  email: yup
    .string()
    .label("Email Address")
    .required()
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})$/,
      "Invalid email input"
    ),
  address: yup.string().label("Address").required(),
});

export default function StepOne() {
  const { handleNext, formInput, setformInput } = useContext(StepContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      name: formInput?.bio?.name || "",
      number: formInput?.bio?.number || "",
      email: formInput?.bio?.email || "",
      address: formInput?.bio?.address || "",
    },
  });

  const onSubmit = (data) => {
    setformInput({ ...formInput, bio: data });
    handleNext();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form__input form__input--step-1"
      id="form-step-1"
    >
      <label htmlFor="name">
        <div className="input__label">Name*</div>
        <input
          type="text"
          id="name"
          placeholder="e.g. Naufal Zufar"
          className="input__text"
          {...register("name")}
        />
        <div className="input__error">{errors.name?.message}</div>
      </label>
      <label htmlFor="number">
        <div className="input__label">Phone Number*</div>
        <input
          type="tel"
          id="number"
          placeholder="e.g. +6281372961321"
          className="input__text"
          {...register("number")}
        />
        <div className="input__error">{errors.number?.message}</div>
      </label>
      <label htmlFor="email">
        <div className="input__label">Email Address*</div>
        <input
          type="text"
          id="email"
          placeholder="e.g. hansolo@mail.com"
          className="input__text"
          {...register("email")}
        />
        <div className="input__error">{errors.email?.message}</div>
      </label>
      <label htmlFor="address">
        <div className="input__label">Delivery Address*</div>
        <textarea
          type="text"
          name="address"
          id="address"
          placeholder="e.g. Gangnam street, Busan, 14020"
          className="input__textarea"
          rows={4}
          {...register("address")}
        />
        <div className="input__error">{errors.address?.message}</div>
      </label>
    </form>
  );
}
