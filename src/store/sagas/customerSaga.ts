import { takeEvery, put, call, StrictEffect, select } from "redux-saga/effects";
import { actionIds, successCreationAction, errorCreationAction, paymentIntentAction } from '../types/actionsType';
import { AxiosResponse } from "axios";
import paymentApi from '../api/api';

import { CustomerState, CustomerPaymentState } from '../types/storeType';

import { getCustomerSelector, getPriceSelector } from '../selectors';
import DataService from '../../firebase/FirebaseService';


/// watcherss

function* customerSaga(): Generator<StrictEffect> {
//     yield takeEvery(actionIds.CREATE_CUSTOMER, createCustomerWorker);
//     yield takeEvery(actionIds.SUBSCRIPTION_PRICE, subscriptionPriceWorker);
//     yield takeEvery(actionIds.EXECUTE_PAYMENT, executePaymentWorker);
      yield takeEvery(actionIds.PAYMENT_INTENT, paymentIntentWorker);
    
}



// /// workers


function* paymentIntentWorker(payment: paymentIntentAction) {

    const customer: CustomerState = yield select(getCustomerSelector);
//
const price: CustomerPaymentState = yield select(getPriceSelector);


  // execute payment intent on the server
  try {
    const response: AxiosResponse = yield call(paymentApi.post, "/payment", {
      price: price.price,
      id: payment.id,
    });

    

    switch (response.status) {
      case 200:
          /// send data to firebase store
        DataService.create({
          customer: customer.customer,
          paymentID: payment.id,
          status: response.data
        });
        const data: successCreationAction = {
          type: "SUCCESS_CREATION",
          success: response.data,
        };
         
        yield put(data);
    }
  } catch (err) {
    const data: errorCreationAction = {
      type: "ERROR_CREATION",
      error: err,
    };
    yield put(data);
  }
}    

  
 

export default customerSaga;
// function* createCustomer
