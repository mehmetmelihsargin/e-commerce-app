import React from "react";

const Galery = () => {
  return <section class="overflow text-gray-700">
    <div class="px-5 py-2 mx-auto lg:pt-24 lg:px-32">
      <div class="flex flex-wrap -m-1 md:-m-2">
        <div class="flex flex-wrap w-1/2">
          <div class="w-1/2 p-1 md:p-2  flex items-center justify-center">

            <h1 className="text-3xl  bg-opacity-30 font-semibold rounded-xl absolute cursor-pointer">Kitchen</h1>
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp">

            </img>

          </div>
          <div class="w-1/2 p-1 md:p-2 flex items-center justify-center ">
            <h1 className="bg-white p-10 bg-opacity-60 rounded-xl absolute text-gray-700 text-2xl hover:hidden cursor-pointer">Clothes</h1>
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
          </div>
          <div class="w-full p-1 md:p-2 flex items-center justify-center">
            <h1 className="bg-white p-10 bg-opacity-60 rounded-xl absolute text-gray-700 text-2xl hover:hidden cursor-pointer">Electronics</h1>
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="w-full p-1 md:p-2 flex items-center justify-center">
            <h1 className="bg-white p-10 bg-opacity-60 rounded-xl absolute text-gray-700 text-2xl hover:hidden cursor-pointer">Garden</h1>
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
          </div>
          <div class="w-1/2 p-1 md:p-2 flex items-center justify-center">
            <h1 className="bg-white p-10 bg-opacity-60  rounded-xl absolute text-gray-700 text-2xl  hover:hidden cursor-pointer">School</h1>
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
          </div>
          <div class="w-1/2 p-1 md:p-2 flex items-center justify-center">
            <h1 className="bg-white p-10 bg-opacity-60  rounded-xl absolute text-gray-700 text-2xl hover:hidden cursor-pointer">Jewelry</h1>
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
          </div>
        </div>
      </div>
    </div>
  </section>
    ;
};

export default Galery;
