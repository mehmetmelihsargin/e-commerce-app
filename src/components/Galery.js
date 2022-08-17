import React from "react";

const Galery = () => {
  return <section class="overflow  text-gray-700">
    <div class="px-5 py-2 mx-auto lg:pt-24 lg:px-32">
      <div class="flex flex-wrap -m-1 md:-m-2">
        <div class="flex flex-wrap w-1/2">
          <div class="w-1/2 p-1 md:p-2 text-5xl cursor-pointer flex items-center justify-center text-black hover:text-5xl">
          <div className=" bg-white h-1/6 w-2/12 rounded-full z-10 opacity-70 absolute">
            
            </div>
            <h1 className="p-24 cursor-pointer bg-opacity-30 bg-white  text-black absolute z-20">Kitchen</h1>
            <img alt="gallery" class="block opacity-80 object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp">

            </img>

          </div>
          <div class="w-1/2 p-1 md:p-2 text-5xl justify-center items-center cursor-pointer text-black flex">
            <div className="bg-white h-1/6 w-2/12 rounded-full z-10 opacity-50 absolute">
            
            </div>
            <h1 className="p-5 rounded-xl cursor-pointer text-black absolute z-20">Clothes</h1>       
            <img alt="gallery" class="block opacity-80 object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
          </div>
          <div class="w-full p-1 md:p-2 text-3xl cursor-pointer text-black hover:text-5xl flex items-center justify-center">
            <h1 className=" p-10  rounded-xl absolute hover:hidden cursor-pointer">Electronics</h1>
            <img alt="gallery" class="block opacity-80  object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="w-full p-1 md:p-2 text-3xl cursor-pointer text-black hover:text-5xl flex items-center justify-center">
            <h1 className=" p-10  rounded-xl absolute hover:hidden cursor-pointer">Garden</h1>
            <img alt="gallery" class="block opacity-80 object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
          </div>
          <div class="w-1/2 p-1 md:p-2 text-3xl cursor-pointer text-black hover:text-5xl flex items-center justify-center">
            <h1 className=" p-10   rounded-xl absolute  hover:hidden cursor-pointer">School</h1>
            <img alt="gallery" class="block opacity-80 object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
          </div>
          <div class="w-1/2 p-1 md:p-2 text-3xl cursor-pointer text-black hover:text-5xl flex items-center justify-center">
            <h1 className=" p-10   rounded-xl absolute hover:hidden cursor-pointer">Jewelry</h1>
            <img alt="gallery" class="block opacity-80 object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
          </div>
        </div>
      </div>
    </div>
  </section>
    ;
};

export default Galery;
