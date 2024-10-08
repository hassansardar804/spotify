"use client";
import React from "react";
import "./Navbar.css";
import Link from "next/link";

import { FaSearch, FaSpotify, GrHomeRounded, PiBrowsersLight } from "react-icons/fa";





const Navbar = () => {
  return (
    <div className="main-nav">
      <section>
        <nav className="py-4 px-3 complete-nav flex  ">
          <div className=" left-nav">
            <Link href="/">
              <FaSpotify className="text-lg text-lime-400" />
            </Link>
          </div>
          <div className=" center-nav flex ">
            <Link href="/" className="size-10 bg-gray-600 home-btn">
              <GrHomeRounded />
            </Link>

            <div className="relative">
              <input
                className="w-96  bg-[#1F1F1F] mt-1 ms-3 py-2 px-12 rounded-full search-input  "
                placeholder="What do You want to Play?"
              />

              <FaSearch  class="ri-search-2-line absolute left-5 top-2 text-white h-3 text-3xl "/>

              <div>
                <PiBrowsersLight  className=" absolute ri-pages-line text-3xl right-4 top-3" />
              </div>
            </div>
          </div>
          <div className=" right-nav pt-3 ">
            <Link
              href="SignUp"
              className="font-bold text-[#c6c4c4] px-3  hover:text-white  transition-colors duration-1000 ease-in-out transform hover:scale-105"
            >
              SignUp
            </Link>
            <Link
              href="/Login"
              className="mx-3 px-5 py-2 bg-white font-bold text-black rounded-full"
            >
              Login
            </Link>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
