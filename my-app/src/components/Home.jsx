import React from "react";
import Button from "./Button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">

      {/* Rotating Logo */}
      <img
        src="/logo_dark.svg"
        alt="React Logo"
        className="w-36 h-36 rotate-logo mb-8"
      />

      {/* Title */}
      <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
        React
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-gray-600 max-w-xl text-xl font-medium">
        The library for building modern web and native user interfaces
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mt-10">

        {/* Primary */}
        <Button className="
          bg-gradient-to-r from-sky-500 to-blue-600
          hover:from-sky-600 hover:to-blue-700
          text-white text-lg font-semibold
          px-12 py-4 rounded-full
          shadow-lg hover:shadow-xl
          transform hover:-translate-y-0.5
          transition-all duration-300
          focus:outline-none focus:ring-4 focus:ring-blue-300
        ">
          Learn React
        </Button>

        {/* Secondary */}
        <Button className="
          bg-white text-gray-900
          border border-gray-300
          hover:bg-gray-100
          text-lg font-semibold
          px-12 py-4 rounded-full
          shadow-md hover:shadow-lg
          transform hover:-translate-y-0.5
          transition-all duration-300
          focus:outline-none focus:ring-4 focus:ring-gray-200
        ">
          API Reference
        </Button>

      </div>
    </div>
  );
}
