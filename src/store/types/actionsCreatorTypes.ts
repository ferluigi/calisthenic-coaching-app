import { ICustomer, CustomerPayment, PaymentStatus } from './storeType';


import {
  createCustomerAction,
  subscriptionPriceAction,
  paymentIntentAction,
  successCreationAction,
  errorCreationAction,
  openModalAction,
  modalViewAction,
} from "./actionsType";


// customer reducer

export type createCustomerActionCreator = (customer: ICustomer  ) => createCustomerAction;

///customerPayment reducer


export type subscriptionPriceActionCreator = (price: number) => subscriptionPriceAction;


export type paymentIntentActionCreator = (id: string) => paymentIntentAction;



export type successCreationActionCreator = (success: PaymentStatus) => successCreationAction;


export type errorCreationActionCreator = (error: any) => errorCreationAction;  

//modal view reducer

export type openModalActionCreator = (open: boolean) => openModalAction;

export type modalViewActionCreator = (view: number) => modalViewAction;