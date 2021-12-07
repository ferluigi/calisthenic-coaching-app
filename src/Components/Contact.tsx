import React from "react";

const Contact = () => {
    return (
      <section id="contact" className="container mx-auto text-center py-6 mb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Contact Me
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <h3 className="my-4 text-xl leading-tight">
          Ask your calisthenic question
        </h3>
        <button className="text-lg mx-auto lg:mx-0 hover:none-underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Contact me
        </button>
      </section>
    );
};

export default Contact;