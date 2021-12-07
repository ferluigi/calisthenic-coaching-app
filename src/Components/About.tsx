import React from "react";


const About = () => {
    return (
      <section className="bg-white  relative z-10 h-auto border-b py-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Training
        </h1>
        <div className=" mb-20">
          <div className="h-1  mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="grid grid-rows-2 mx-auto container  xl:gap-20  sm:gap-0 items-center">
          <div className="grid mx-auto   w-11/12 justify-items-end justify-self-end lg:grid-cols-2 xl:grid-cols-2  md:grid-cols-2 sm:grid-cols-1">
            <div className="xl:w-8/12 md:w-5-12">
              <h3 className=" text-gray-800 font-bold mb-3   text-3x1 xl:text-3x1 md:text-2x1 sm:text-3x1">
                By zoom calls
              </h3>
              <p className="text-gray-600 mb-8    text-2x1 xl:text-2x1 md:text-2x1 sm:text-2x1">
                Lessons and coaching by zoom calls helpping with each
                progressions.
              </p>
            </div>
            <img
              className="xl:w-3/6 md:w-10/12  justify-self-start rounded-xl"
              src="https://blog.zoom.us/wp-content/uploads/2020/05/workout-main-792x418.png"
            ></img>
          </div>

          <div className=" grid mx-auto  w-11/12 justify-items-start gap-20  lg:grid-cols-2 xl:grid-cols-2  md:grid-cols-2 sm:grid-cols-1 ">
            <img
              className="xl:w-2/5 md:w-10/12  grid justify-self-end rounded-xl"
              src="https://cdn.shopify.com/s/files/1/0809/4135/products/Strong_Advice_-_paperback_-_square.jpg?v=1597264657"
              alt=""
            />
            <div className="xl:w-8/12 md:w-5-12">
              <h3 className=" text-gray-800 font-bold  mb-3   text-3x1 xl:text-3x1 md:text-2x1 sm:text-3x1">
                Guides and Book
              </h3>
              <p className="text-gray-600 mb-8   text-2x1 xl:text-2x1 md:text-2x1 sm:text-2x1">
                Online books and guides to progress on your way.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;