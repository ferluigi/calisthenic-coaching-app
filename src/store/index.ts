import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import customerReducer from "./reducers/customerReducer";
import  customerSaga  from "./sagas/customerSaga";
import rootReducer from './RootReducer';




// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();


// Mount it on the Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

// Run the saga
sagaMiddleware.run(customerSaga);

export default store;
