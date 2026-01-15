import React from "react";

export default function UISection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      
      {/* Heading */}
      <h1 className="text-6xl md:text-5xl font-bold text-gray-900 mb-4">
        Create user interfaces <br />from components
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
        React lets you build user interfaces out of individual pieces called components. 
        Create your own React components like Thumbnail, LikeButton, and Video. 
        Then combine them into entire screens, pages, and apps.
      </p>
      
    </div>
  );
}
