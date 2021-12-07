import React from "react";
import Subscription from "../Components/payment/Susbscription";
import StripeCall from "../Components/payment/Stripe/StripeCall";

//redux saga
import { useSelector } from "react-redux";
import {  getModalSelector } from '../store/selectors';
import {  ModalViewState } from '../store/types/storeType';



const SubscribeModalButton: React.FC = () => {


  const modal: ModalViewState  = useSelector(getModalSelector);
  
  return (
    <div className="!transition w-auto  !duration-1000 !ease-in-out">
      {modal.open ? (
        <div className="!transition w-auto  !duration-1000 !ease-in-out">
          <div className="justify-center ms:w-2/5 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-5/6 my-6 sm:w-2/4 md:w-2/4 lg:w-7/12  xl:w-auto 2xl:w-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                {modal.view === 0 ? <Subscription /> : <StripeCall />}
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>
  );
};

export default SubscribeModalButton;
