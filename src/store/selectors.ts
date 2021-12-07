
import { createSelector } from 'reselect';
import { AppState } from './RootReducer';


 const getCustomer = (state: AppState) => state.customer;

 const getPrice = (state: AppState) => state.CustomerPayment;

 const getModal = (state: AppState) => state.modal;

 const getSuccess = (state:AppState)  => state.CustomerPayment.success;


export const getCustomerSelector  = createSelector(getCustomer, (customer) => customer);

export const getPriceSelector = createSelector(getPrice, price => price);

export const getModalSelector = createSelector(getModal, modal => modal);

export const getSuccessSelector = createSelector(getSuccess, success => success);
