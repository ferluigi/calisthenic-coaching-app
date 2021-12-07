import React from "react";
import { Button } from "primereact/button";
//data
import { countries } from "../Compt.Content/Countries";

///
import { useForm } from "react-hook-form";

///redux saga
import { useDispatch, useSelector } from "react-redux";
import { ICustomer, CustomerPaymentState } from "../../store/types/storeType";
import { createCustomer, openModal, modalView } from "../../store/action/index";
import { getPriceSelector } from "../../store/selectors";

const CustomerForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICustomer>();

  const dispatch = useDispatch();

  const { price }: CustomerPaymentState = useSelector(getPriceSelector);

  function submitSubscription(data: ICustomer) {
    // DataService.create(data);

    dispatch(createCustomer(data));
    dispatch(modalView(1));
  }

  return (
    <div className="flex justify-center items-center  m-8 transition  !duration-900 !ease-out ">
      <form
        onSubmit={handleSubmit(submitSubscription)}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex-col  md:flex-col lg:flex-row xl:flex-row 2xl:flex-row w-max lg:w-11/12 xl:w-full  flex gap-2  mb-5 rounded-lg">
          <input
            className="p-2 text-xl text-gray-800 rounded-lg border-2 focus:border-lightLimeColor  border-gray-300 w-full focus-visible:lightLimeColor   focus:outline-none focus:bg-white focus:shadow-outline"
            {...register("name")}
            placeholder="Name "
          />

          <input
            {...register("email")}
            className="p-2 text-xl rounded-lg border-2 focus:border-lightLimeColor text-gray-800 border-gray-300 w-full focus-visible:lightLimeColor  focus:outline-none focus:bg-white focus:shadow-outline"
            required
            placeholder="Email"
          />
        </div>
        <div className="flex-col  md:flex-col lg:flex-row xl:flex-row 2xl:flex-row  mb-5 w-max lg:w-11/12  xl:w-full">
          <input
            className="p-2 text-xl rounded-lg border-2 focus:border-lightLimeColor text-gray-800 border-gray-300 w-full focus-visible:lightLimeColor  focus:outline-none focus:bg-white focus:shadow-outline"
            placeholder="Address"
            {...register("address.line1")}
          />
        </div>

        <div className="flex-col sm:flex-col  md:flex-col lg:flex-row xl:flex-row 2xl:flex-row  flex gap-2 mb-5 w-max lg:w-11/12  xl:w-full">
          <input
            className="p-2 text-xl rounded-lg border-2 focus:border-lightLimeColor text-gray-800 border-gray-300 w-full focus-visible:lightLimeColor    focus:outline-none focus:bg-white focus:shadow-outline"
            placeholder="City"
            {...register("address.city", { pattern: /^[A-Za-z]+$/i })}
          />

          <input
            className="p-2 text-xl rounded-lg border-2 focus:border-lightLimeColor text-gray-800 border-gray-300 w-full focus-visible:lightLimeColor    focus:outline-none focus:bg-white focus:shadow-outline"
            placeholder="State"
            {...register("address.state", { pattern: /^[A-Za-z]+$/i })}
          />
        </div>

        <div className="flex flex-col justify-center items-center sm:flex-col  md:flex-col lg:flex-row xl:flex-row 2xl:flex-row  gap-2 mb-10 w-max sm:w-5/6  md:w-8/12  lg:w-11/12  xl:w-full">
          <input
            className="p-2 text-xl rounded-lg border-2 focus:border-lightLimeColor text-gray-800 border-gray-300  focus-visible:lightLimeColor w-8/12  focus:outline-none focus:bg-white focus:shadow-outline"
            type="number"
            placeholder="Postal Code"
            {...register("address.postal_code")}
          />
          <select
            className="p-2 flex text-xl rounded-lg border-2 focus:border-lightLimeColor text-gray-800 border-gray-300 w-8/12 sm:w-full md:w-full lg:w-max xl:w-max focus-visible:lightLimeColor   "
            {...register("address.country")}
            placeholder="Countries"
          >
            <option value="" disabled selected>
              Select your option
            </option>
            {countries.map((country) => (
              <option className="text-xl " value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        {errors.address || errors.email || errors.name ? (
          <small className="text-xl  p-error p-d-block ">
            Something is missing
          </small>
        ) : (
          <div></div>
        )}

        <div className="flex justify-center p-4 border-t border-solid border-blueGray-200 rounded-b">
          <div className=" flex gap-10 xl:gap-96  lg:gap-48 md:gap-36 sm:gap-24">
            <Button
              onClick={() => dispatch(openModal(false))}
              label="cancel"
              className=" p-button-outlined md:!text-xl lg:!text-2x1 p-button-danger text-center  text-red-500  !transition  !duration-1000 !ease-in-out "
              type="button"
            />

            <Button
              disabled={price === undefined}
              type="submit"
              className="p-button-success sm:!text-sm md:!text-xl lg:!text-2x1 xl:!text-2x1 !transition  !duration-1000 !ease-in-out "
              label="go next"
              icon="pi pi-arrow-right"
              iconPos="right"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
