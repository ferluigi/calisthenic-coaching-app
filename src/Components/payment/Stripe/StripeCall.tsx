import React from "react";
import CardForm from "./CardForm";

// stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

require("dotenv").config();

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);

const StripeCall = () => {
  return (
    <div>
      <div className="justify-center ms:w-2/5 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <Elements stripe={stripePromise}>
            <CardForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default StripeCall;
