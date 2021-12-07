import React from 'react';
import SubscriptionsButtons from './SubscriptionButtons';
import CustomerForm from './CustomerForm';
import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/action/index';



const Subscription: React.FC = () => {

  const dispatch = useDispatch();

  return (
    <>
      <div className="grid first-letter:justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
        <div className="grid grid-cols-3 ">
          <h1 className="grid col-end-3 justify-end text-4xl text-lightLimeColor font-black ">
            Subcriptions
          </h1>
          <Button
            className="grid col-end-5 p-button-rounded p-button-danger p-button-text "
            icon="pi pi-times"
            onClick={() => dispatch(openModal(false))}
            iconPos="right"
          />
        </div>

        <SubscriptionsButtons />
      </div>
      <CustomerForm />
    </>
  );
};

export default Subscription;