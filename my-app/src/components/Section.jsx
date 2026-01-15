import React from "react";

export default function Section() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      
      {/* Heading */}
      <h1 className="text-7xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        Create user interfaces <br />from components
      </h1>

      {/* Description */}
      <p className="text-gray-700 text-2xl md:text-xl font-semibold max-w-3xl">
        React lets you build user interfaces out of individual pieces called components. 
        Create your own React components like <span className="font-bold">Thumbnail</span>, <span className="font-bold">LikeButton</span>, and <span className="font-bold">Video</span>. 
        Then combine them into entire screens, pages, and apps.
      </p>
      
    </div>
  );
}
