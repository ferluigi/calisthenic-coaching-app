import { Reducer } from "redux";
import { CustomerPaymentState, ModalViewState } from '../types/storeType';
import {
  modalViewAction,
  openModalAction
} from "../types/actionsType";

type actions = modalViewAction | openModalAction;

const intitialState: ModalViewState = {
    open: false,
    view: 0,
};

const modalViewReducer: Reducer<ModalViewState, actions> = (
  state = intitialState,
  action
) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, open: action.open };
    case "VIEW_MODAL":
      return { ...state, view: action.view };
    default:
      return { ...state };
  }
};
export default modalViewReducer;
