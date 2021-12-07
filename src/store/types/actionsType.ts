import { ICustomer, CustomerPayment, PaymentStatus } from './storeType';

//For Action Creator

//customer reducer

export interface createCustomerAction {
    type: "CREATE_CUSTOMER";
    customer: ICustomer;
}



///customer payment reducer 

export interface subscriptionPriceAction {
  type: "SUBSCRIPTION_PRICE";
  price: number;
}

export interface paymentIntentAction {
  type: "PAYMENT_INTENT";
  id: string;
}

export interface successCreationAction {
  type: "SUCCESS_CREATION";
  success: PaymentStatus;
}

export interface errorCreationAction {
  type: "ERROR_CREATION";
  error: any;
}

///modal view reducer


export interface openModalAction{
  type: "OPEN_MODAL"
  open: boolean;
}

export interface modalViewAction {
  type: "VIEW_MODAL";
  view: number;
}



export const actionIds = {
  CREATE_CUSTOMER: "CREATE_CUSTOMER",
  SUBSCRIPTION_PRICE: "SUBSCRIPTION_PRICE",
  PAYMENT_INTENT: "PAYMENT_INTENT",
  SUCCESS_CREATION: "SUCCESS_CREATION",
  ERROR_CREATION: "ERROR_CREATION",
  OPEN_MODAL: "OPEN_MODAL",
  VIEW_MODAL: "VIEW_MODAL",
};