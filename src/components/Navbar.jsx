import { Combine, DollarSign, Ghost, Github, Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* logo */}
          <div className="flex items-center">
            <Github className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-600">
              DevSpace
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-7">
              <li className=" cursor-pointer hover:text-indigo-500 list-none text-base font-semibold text-gray-600 flex items-center gap-2 justify-center ">
                <Combine size={18} className="hover:text-indigo-500" />
                Features
              </li>

              <li className="list-none text-base cursor-pointer hover:text-indigo-500 font-semibold text-gray-600 flex items-center gap-2 justify-center">
                <Ghost size={18} className="hover:text-indigo-500" />
                Testimonials
              </li>

              <li className="list-none text-base cursor-pointer hover:text-indigo-500 font-semibold text-gray-600 flex items-center gap-1">
                <DollarSign size={18} className="hover:text-indigo-500" />
                Pricing
              </li>

              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors ">
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

   {  isOpen && <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 spcae-y-1 sm:px-3 shadow-md border flex flex-col justify-center items-start">
          <li className="py-4 cursor-pointer hover:text-indigo-500 list-none text-lg font-semibold text-gray-600 flex items-center gap-2 justify-start hover:bg-indigo-50 w-full px-2 rounded-md">
            <Combine size={24} className="hover:text-indigo-500" />
            Features
          </li>

          <li className="py-4 cursor-pointer hover:text-indigo-500 list-none text-lg font-semibold text-gray-600 flex items-center gap-2 justify-start hover:bg-indigo-50 w-full px-2 rounded-md">
            <Ghost size={24} className="hover:text-indigo-500" />
            Testimonials
          </li>

          <li className=" py-4 cursor-pointer hover:text-indigo-500 list-none text-lg font-semibold text-gray-600 flex items-center gap-2 justify-start hover:bg-indigo-50 w-full px-2 rounded-md">
            <DollarSign size={24} className="hover:text-indigo-500" />
            Pricing
          </li>
          <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors mb-2 ">
                Get Started
              </button>
        </div>
      </div>}
    </nav>
  );
};

export default Navbar;
