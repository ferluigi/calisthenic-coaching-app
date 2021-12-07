import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../store/action/index';

const Pricing = () => {
  const dispatch = useDispatch();
    return (
      <section id="pricing" className="bg-gray-100 py-8">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Pricing
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-2x1 font-bold text-center border-b-4">
                  Free
                </div>
                <ul className="w-full text-center text-xl">
                  <li className="border-b py-4">----</li>
                  <li className="border-b py-4">----</li>
                  <li className="border-b py-4">----</li>
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-2x1 text-gray-600 font-bold text-center">
                  0€
                  <span className="text-base"></span>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => dispatch(openModal(true))}
                    className="mx-auto lg:mx-0 text-xl  hover:none-underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                  >
                    Contact me
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <div className="w-full p-8 text-2x1 font-bold text-center">
                  Pro
                </div>
                <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                <ul className="w-full text-center text-xl font-bold">
                  <li className="border-b py-4">Zoom Coaching</li>
                  <li className="border-b py-4">Ebooks</li>
                  <li className="border-b py-4">Rutines</li>
                  <li className="border-b py-4">Week Training</li>
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-2x1 font-bold text-center">
                  30€
                  <span className="text-base">/ per month</span>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => dispatch(openModal(true))}
                    className="mx-auto text-xl  lg:mx-0 hover:none-underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-2x1 font-bold text-center border-b-4">
                  Basic
                </div>
                <ul className="w-full text-center text-xl">
                  <li className="border-b py-4">----</li>
                  <li className="border-b py-4">Ebooks</li>
                  <li className="border-b py-4">Rutines</li>
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-2x1 text-gray-600 font-bold text-center">
                  15€
                  <span className="text-base">/ per moth</span>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => dispatch(openModal(true))}
                    className="mx-auto  lg:mx-0  text-xl hover:none-underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                  >
                    Subcribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Pricing;