// import { Globe, Library, Link, Plus,    } from "lucide-react";
import React from "react";
import { FaPlus, IoIosGlobe, BiLibrary, FaGlobe   } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="main-side  text-white sticky ">
      <div className="sidebar bg-[#121212] h-full  rounded-md w-72 pb-10   mx-2    ">
        <div className="side-header">
          <div className=" pt-4 ps-6 flex gap-3">
            < BiLibrary className="text-3xl font-bold" />
            <span className="font-bold">Your Library</span>

            <FaPlus className="ms-14" />
          </div>

          <div className="playlists mt-9 rounded-lg ms-3 me-3  bg-[#1F1F1F]">
            <h3 className="ms-5 pt-3 font-serif ">
              Create your first playlists
            </h3>
            <p className="font-serif ms-5  mt-1">it's easy we will help you</p>
            <button className="bg-white px-3 py-1 my-3 font-semibold rounded-full text-black ms-5">
              Create playlist{" "}
            </button>
          </div>
        </div>

        <div className="social  ms-5 mt-11 flex">
          <p className=" me-9 cursor-pointer ">Legal</p>
          <p className=" cursor-pointer">Safty&PrivacyCenter</p>
        </div>
        <div className="line2 ms-5 mt-2 flex gap-5">
          <p className="cursor-pointer">PrivacyPolicy</p>
          <p className="cursor-pointer">Cookies</p>
          <p className="cursor-pointer">AboutAds</p>
        </div>
        <p className="ms-5  cursor-pointer my-2">Accessibility</p>
        <p className="ms-5  cursor-pointer">Cookies</p>

        <button className="ms-5  flex gap-4 px-3 font-bold py-1 mt-5 border rounded-full">
        <FaGlobe />
          English
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
