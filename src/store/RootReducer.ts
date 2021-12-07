import { combineReducers } from "redux";

import customerPaymentReducer from "./reducers/customerPaymentReducer";
import customerReducer from "./reducers/customerReducer";
import modalViewReducer from "./reducers/modalViewReducer";



const rootReducer = combineReducers({
  customer: customerReducer,
  CustomerPayment: customerPaymentReducer,
  modal: modalViewReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
