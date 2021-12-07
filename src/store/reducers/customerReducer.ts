import {Reducer} from "redux";
import { CustomerState, ICustomer,  } from '../types/storeType';
import {
  createCustomerAction,
} from "../types/actionsType";

type actions = createCustomerAction ;

const intitialState: CustomerState  = {
  customer: undefined,
};


const customerReducer: Reducer<CustomerState, actions> = (
  state = intitialState,
  action
) => {
  switch (action.type) {
    case "CREATE_CUSTOMER":
      return { ...state, customer: action.customer };
    default:
      return { ...state };
  }
};
export default customerReducer;