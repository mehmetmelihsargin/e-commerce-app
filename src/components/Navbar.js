import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return <nav className="
    relative
    w-full
    flex flex-wrap
    items-center
    justify-between
    py-4
    bg-blue-100
    text-gray-500
    hover:text-gray-700
    focus:text-gray-700
    shadow-lg
    navbar navbar-expand-lg navbar-light
    ">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            {/* <button className="
        navbar-toggler
        text-gray-500
        border-0
        hover:shadow-none hover:no-underline
        py-2
        px-2.5
        bg-transparent
        focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
      " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                    className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                    </path>
                </svg>
            </button> */}
            <div className="collapse navbar-collapse flex items-center" id="navbarSupportedContent">
                <Link className="
          flex
          items-center
          text-gray-900
          hover:text-gray-900
          focus:text-gray-900
          mt-2
          lg:mt-0
          mr-1
        " to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                </Link>

                <ul className="navbar-nav flex pl-0 list-style-none mr-auto">
                    <li className="nav-item p-2">
                        <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/">Home</Link>
                    </li>
                    <li className="nav-item p-2">
                        <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/category">Contact</Link>
                    </li>
                    <li className="nav-item p-2">
                        <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/category">Login</Link>
                    </li>
                    
                    <li className="nav-item p-2">
                        <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/signin">Sign In</Link>
                    </li>
                </ul>

            </div>



            {/* <div className="flex items-center relative">

                <Link className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4" to="/cart">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
                        className="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512">
                        <path fill="currentColor"
                            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
                        </path>
                    </svg>
                </Link>

                <div className="dropdown relative">
                    <Link className="dropdown-toggle flex items-center hidden-arrow" to="/cart" id="dropdownMenuButton2" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className=" h-8 w-8 rounded-full"
                            alt="" loading="lazy" />
                    </Link>

                </div>
            </div> */}

        </div>
    </nav>
        ;
};

export default Navbar;
