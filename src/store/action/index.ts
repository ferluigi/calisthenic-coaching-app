import { ICustomer, CustomerPayment } from '../types/storeType';
import { openModalActionCreator, modalViewActionCreator } from '../types/actionsCreatorTypes';
import {
  createCustomerActionCreator,
  subscriptionPriceActionCreator,
  paymentIntentActionCreator,
  successCreationActionCreator,
  errorCreationActionCreator} from "../types/actionsCreatorTypes";

  //Customer reducer

export const createCustomer: createCustomerActionCreator = (customer) => {
    return {
        type: "CREATE_CUSTOMER",
        customer: customer,
    }
}

/// customer payment Reducer

export const subscriptionPrice: subscriptionPriceActionCreator = (price) => {
    return {
        type: "SUBSCRIPTION_PRICE",
        price,
    }


}

export const paymentIntent: paymentIntentActionCreator = (id) => {
  return {
    type: "PAYMENT_INTENT",
    id,
  };
};



export const successCreating: successCreationActionCreator = (success) => {
    return {
        type: "SUCCESS_CREATION",
        success,
    }
}

export const errorCreating: errorCreationActionCreator = (error) => {
    return {
        type: "ERROR_CREATION",
        error
    }
}

///modal view reducer

export const openModal: openModalActionCreator = (open) => {
    return {
        type: "OPEN_MODAL",
        open,
    }
}

export const modalView: modalViewActionCreator = (view) => {
  return {
    type: "VIEW_MODAL",
    view,
  };
};