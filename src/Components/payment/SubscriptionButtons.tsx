import React, { useState } from "react";
import { Button } from "primereact/button";

//redux-saga
import { useDispatch } from "react-redux";
import { subscriptionPrice } from "../../store/action/index";

const SubscriptionsButtons: React.FC = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState<number>();

  function setValue(value: number) {
    setPrice(value);
    dispatch(subscriptionPrice(value));
  }

  return (
    <div className="">
      <div className="pt-5 flex flex-col sm:flex-col xm:flex-col  md:flex-row  lg:flex-row  xl:flex-row  gap-6 items-center justify-center ">
        <Button
          disabled={price === 30 ? true : false}
          onClick={() => setValue(30)}
          className="!transition     !duration-1000 !ease-in-out md:w-5/12 lg:w-3/12 lg:!text-lg md:!text-sm xl:!text-xl !text-xl "
        >
          Pro version 30€
        </Button>
        <Button
          disabled={price === 15 ? true : false}
          onClick={() => setValue(15)}
          className="!transition  !duration-1000 !p-2  !ease-in-out md:w-5/12 lg:w-3/12  md:!text-sm lg:!text-lg xl:!text-xl !text-xl "
        >
          Basic version 15€
        </Button>
        <Button
          disabled={price === 0 ? true : false}
          onClick={() => setValue(0)}
          className="!transition  !duration-1000 !ease-in-out md:w-5/12 lg:w-3/12 md:!text-sm lg:!text-lg xl:!text-xl !text-xl  "
        >
          Free version 0€
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionsButtons;
