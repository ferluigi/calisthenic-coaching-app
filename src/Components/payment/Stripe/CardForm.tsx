import React, { useState } from "react";
import { Button } from "primereact/button";

//stripe call
import { PaymentMethodCreateParams } from "@stripe/stripe-js";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

//redux saga
import { useDispatch, useSelector } from "react-redux";
import { paymentIntent, openModal } from '../../../store/action/index';
import { CustomerState, PaymentStatus } from '../../../store/types/storeType';
import { getCustomerSelector, getSuccessSelector } from '../../../store/selectors';


const CardForm: React.FC = () => {

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const [loading, setloading] = useState<boolean>();
  const [err, setErr] = useState();
  
const [inputCardEvent, setInputCardEvent] = useState({
  cardNumber: false,
  expiry: false,
  cvc: false,

});

const successPayment: PaymentStatus = useSelector(getSuccessSelector);
  const customer: CustomerState = useSelector(getCustomerSelector);
  
  
  const billing_detail = customer.customer;


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      
     setloading(true)
    /// Stripe: create a payment method with card, sent data form the redux to the api
  
    if (!elements) {
      return;
    }
      

    const { error, paymentMethod }: any = await stripe?.createPaymentMethod({
      type: "card",
      card: elements?.getElement(CardNumberElement)!,
      billing_details:
        billing_detail as unknown as PaymentMethodCreateParams.BillingDetails,
    });
     
    setErr(error);
    

    if (!error) {
      dispatch(paymentIntent(paymentMethod.id));
       }
    
    

  };


  ///stripe input styling

  const cardElementOptions = {
    style: {
    
      base: {
        fontSize: "1.5rem",
       
      },
    },
  };

  return (
    <div className=" pt-6 p-14 mx-auto  border-0 rounded-lg shadow-lg relative  w-full bg-white outline-none focus:outline-none ">
      {successPayment.success === true ? (
        <div className="flex flex-row ">
          <h1 className="text-xl font-bold text-lightLimeColor mt-8">
            Payment successfuly done in 24 hours we will contact you by email
          </h1>
          <Button
            className="p-button-rounded flex items-stretch p-button-danger p-button-text "
            icon="pi pi-times"
            onClick={() => dispatch(openModal(false))}
            iconPos="right"
          />
        </div>
      ) : (
        <>
          <div className="flex  items-center pb-4 justify-center  border-b border-solid border-blueGray-200 rounded-t">
            <h1 className=" text-2x1 text-limeColor font-black">
              You will pay 20€
            </h1>
          </div>

          <div className="flex flex-col w-full  pt-10   ">
            <form onSubmit={handleSubmit}>
              <div className="  justify-center pb-10  border-b border-solid border-blueGray-200 rounded-t">
                <div className="grid  gap-5">
                  <CardNumberElement
                    onChange={(e) =>
                      setInputCardEvent({
                        ...inputCardEvent,
                        cardNumber: e.complete,
                      })
                    }
                    className="p-3  rounded-xl border-2   border-gray-400  w-full  "
                    options={cardElementOptions}
                  />
                  <i className="fas fa-camera"></i>
                  <div className="grid grid-cols-2  gap-5">
                    <CardExpiryElement
                      onChange={(e) =>
                        setInputCardEvent({
                          ...inputCardEvent,
                          expiry: e.complete,
                        })
                      }
                      className="p-3   rounded-xl border-2  border-gray-400  w-full  "
                      options={cardElementOptions}
                    />
                    <CardCvcElement
                      onChange={(e) =>
                        setInputCardEvent({
                          ...inputCardEvent,
                          cvc: e.complete,
                        })
                      }
                      className="p-3 rounded-xl  border-2  border-gray-400  w-full  "
                      options={cardElementOptions}
                    />
                  </div>
                </div>
                {err ? (
                  <small className="text-xl   p-error p-d-block ">
                    Something is missing
                  </small>
                ) : null}
              </div>
              <div className="flex flex-row  gap-10 pt-10  ">
                <Button
                  onClick={() => dispatch(openModal(false))}
                  label="cancel"
                  className="p-button-outlined md:!text-xl lg:!text-2x1 p-button-danger text-center  text-red-500  !transition  !duration-1000 !ease-in-out "
                  type="button"
                />

                <Button
                  type="submit"
                  disabled={
                    !inputCardEvent.cardNumber ||
                    !inputCardEvent.expiry ||
                    !inputCardEvent.cvc
                  }
                  className=" p-button-success sm:!text-sm md:!text-xl lg:!text-2x1 xl:!text-2x1 !transition  !duration-1000 !ease-in-out "
                  label="pay subscription"
                  icon="pi pi-check"
                  iconPos="right"
                  loading={loading}
                />
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default CardForm;

