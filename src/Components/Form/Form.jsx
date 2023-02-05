import React from "react";
import { useForm } from "react-hook-form";
//import Swal from "sweetalert2";

const FormComp = ({confirmPurchase}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
      } = useForm();
    
      const onSubmit = (formData) => {
        confirmPurchase(formData)
      }; 


      return (
       // Swal.fire({
       //   title: "Form",
       //   html:
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
          <input type="email" name="email1"{...register("email1", { minLength: 10, required: true})} />
          {errors?.email1?.type === "minLength" && (
            <p>Email must exceed 10 characters</p>
          )}
          {errors?.email?.type === "required" && <p>This field is required</p>}

          <label>Email Again</label>
          <input type="email" name="email2"{...register("email2", { minLength: 10, required: true, 
            validate: {equalMails: email2 => email2 === getValues().email1}})} />
          
          {errors?.email2?.type === "equalMails" && (
            <p>You must enter the same email</p>
          )}
          {errors?.email?.type === "required" && <p>This field is required</p>}

          <label>Phone</label>
          <input type="number" {...register("phone", { minLength: 10, maxLength: 10, required: true })} />
          {errors?.phone?.type === "minLength" && (
            <p>The phone must have 10 digits</p>
          )}
          {errors?.phone?.type === "required" && <p>This field is required</p>}
          <input type="submit" value="Send" />
        </form>
        //})
      );
}

export default FormComp;

