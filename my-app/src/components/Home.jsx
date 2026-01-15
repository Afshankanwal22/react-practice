import React from "react";
import Button from "./Button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      
      {/* Rotating Image */}
      <img
        src="/logo_dark.svg"
        alt="React Logo"
        className="w-32 h-32 rotate-logo mb-4"
      />

      {/* Text below image */}
      <h1 className="text-4xl font-bold text-gray-800">
        React
      </h1>
      {/* Description */}
        <h2 className="mt-2 text-gray-600 text-center max-w-md font-bold">
            The library for web and native user interfaces
            </h2>
          {/* Reusable Buttons side by side */}
<div className="flex space-x-4 mt-4">
  <Button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full px-6 py-2 transition duration-300">
    Learn React
  </Button>
  <Button className="bg-white text-black border border-gray-400 hover:bg-gray-200 font-semibold rounded-full px-6 py-2 transition duration-300">
    API Reference
  </Button>
</div>
    </div>
    
  );
}
