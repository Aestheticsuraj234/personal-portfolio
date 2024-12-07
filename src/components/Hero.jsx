import { ArrowRight, Sparkle, Sparkles } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-full mx-auto">
        <div className="relative z-10 pb-8 sm:pb-6 md:pb-20 lg:max-w-full lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-full px-4 sm:mt-12 smpx-6 md:mt=16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Build Faster with</span>
                <span className="block text-indigo-600">Modern Tools</span>
              </h1>

              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Create beautiful, responsive web applications with our modern
                development platform. Start building your next big idea today.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow-md">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py=4 md:text-lg md:px-10">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>

                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py=4 md:text-lg md:px-10">
                    Live Demo
                    <Sparkles className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-10">
  <img 
    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" 
    alt="Hero image" 
    className="h-full w-full object-cover lg:h-auto lg:w-auto"
  />
</div>


    </div>
  );
};

export default Hero;