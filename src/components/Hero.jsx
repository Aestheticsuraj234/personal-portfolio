import React from "react";
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              <span className="block">Build Faster with</span>
              <span className="block text-indigo-600">Modern Tools</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0">
              Create beautiful, responsive web applications with our modern
              development platform. Start building your next big idea today.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition duration-150 ease-in-out">
                Live Demo
                <Sparkles className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl lg:max-w-none">
            <img
              className="w-full h-auto "
              src="./hero2.svg"
              alt="Hero image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

