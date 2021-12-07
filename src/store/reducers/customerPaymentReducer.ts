import { Reducer } from "redux";
import { CustomerPaymentState, PaymentStatus } from '../types/storeType';
import {
  subscriptionPriceAction,
  paymentIntentAction,
  successCreationAction,
  errorCreationAction,
} from "../types/actionsType";

type actions =
 
  | subscriptionPriceAction
  | paymentIntentAction
  | successCreationAction
  | errorCreationAction;

const intitialState: CustomerPaymentState = {
  price: undefined,
  id: "",
  success: {message: "", success: undefined},
  error: "",
};

const customerPaymentReducer: Reducer<CustomerPaymentState, actions> = (
  state = intitialState,
  action
) => {
  switch (action.type) {
    case "SUBSCRIPTION_PRICE":
      return { ...state, price: action.price };
    case "PAYMENT_INTENT":
      return { ...state, id: action.id };
    case "SUCCESS_CREATION":
      return {
        ...state,
        success: action.success,
      };
    case "ERROR_CREATION":
      return {
        ...state,
        error: action.error,
      };
    default:
      return { ...state };
  }
};
export default customerPaymentReducer;
