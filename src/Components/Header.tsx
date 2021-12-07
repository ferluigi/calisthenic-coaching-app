import React from "react";

//redux saga
import { useDispatch } from "react-redux";
import { openModal } from "../store/action/index";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="pt-24 z-0 image">
      <div className="container header relative  px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* <!--Left Col--> */}
        <div className=" my-5 flex  flex-col w-full md:w-3/6 justify-center items-start text-center md:text-left">
          <p className="uppercase  font-bold text-xl tracking-loose w-full">
            CALISTHENIC COACHING AND TRAINING
          </p>
          <h1 className="my-4 text-5xl sm:text-4xl md:text-4xl lg:text-5xl  xl:text-6xl  font-bold leading-tight">
            Become the strongest of your calisthenic group
          </h1>
          <p className="leading-normal text-xl mb-8">
            Subscribe with me and learn the best way to be more stronger
          </p>
          <button
            onClick={() => dispatch(openModal(true))}
            className="mx-auto lg:mx-0  bg-white text-gray-900 text-xl font-bold rounded-full my-3 py-4 px-12 shadow-lg focus:outline-none  hover:bg-gray-100 focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </div>
        {/* <!--Right Col--> */}
        <div className=" sm:w-4/6 md:w-2/4 lg:w-5/12 py-0  text-center">
          <img
            className="w-3/6 md:w-4/5 z-50"
            src="https://www.frankmedrano.com/wp-content/uploads/2015/12/homepage-banner-new.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
