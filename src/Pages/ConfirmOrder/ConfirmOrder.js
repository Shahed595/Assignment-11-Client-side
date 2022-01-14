import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Login/useAuth";
import "./ConfirmOrder.css";

const ConfirmOrder = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://mighty-reaches-53782.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Ordered Successfully");
        }
        data.reset();
      });
  };

  return (
    <form className="shipping-form " onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} {...register("name")} />

      <input
        defaultValue={user.email}
        {...register("email", { required: true })}
      />
      <input placeholder="Address" defaultValue="" {...register("address")} />

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default ConfirmOrder;
