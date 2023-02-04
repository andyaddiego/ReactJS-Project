import React from "react";
import { useForm } from "react-hook-form";

const FormComp = ({confirmPurchase}) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (formData) => {
        confirmPurchase(formData)
      }; 


      return (

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input
            {...register("name", {
              required: true,
              minLength: 2,
            })}
          />
          {errors?.name?.type === "required" && <p>This field is required</p>}
          {errors?.name?.type === "minLength" && (
            <p>Name must exceed 2 characters</p>
          )}
          
          <label>Email</label>
          <input type="email"{...register("email", { minLength: 10, required: true})} />
          {errors?.email?.type === "minLength" && (
            <p>Email must exceed 10 characters</p>
          )}
          {errors?.email?.type === "required" && <p>This field is required</p>}

          <label>Phone</label>
          <input type="number" {...register("phone", { minLength: 10, maxLength: 10, required: true })} />
          {errors?.phone?.type === "minLength" && (
            <p>The phone must have 10 digits</p>
          )}
          {errors?.phone?.type === "required" && <p>This field is required</p>}
          <input type="submit" />
        </form>
      );
}

export default FormComp;

//https://react-hook-form.com/