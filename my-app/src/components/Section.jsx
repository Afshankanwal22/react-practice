import React from "react";
import {
  FaCode,
  FaDatabase,
  FaShareAlt,
  FaSyncAlt,
  FaLaptopCode,
} from "react-icons/fa";

export default function Section() {
  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-7xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Create user interfaces <br /> from components
        </h1>

        <p className="text-gray-600 text-2xl md:text-xl max-w-3xl">
          React lets you build user interfaces out of individual pieces called components.
          Create your own components and combine them into complete applications.
        </p>
      </section>

      {/* TOPICS SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Core React Concepts
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Everything you need to understand to build scalable and performant React applications.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Card */}
            <div className="group p-10 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-xl transition">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-blue-100 text-blue-600 text-3xl">
                  <FaCode />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">JSX</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    JSX lets you write HTML like syntax inside JavaScript,
                    making your UI code easier to read, write, and maintain.
                  </p>
                </div>
              </div>
            </div>

            {/* Card */}
            <div className="group p-10 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-xl transition">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-green-100 text-green-600 text-3xl">
                  <FaDatabase />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">State</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    State stores dynamic data inside a component.
                    When state changes, React automatically updates the UI.
                  </p>
                </div>
              </div>
            </div>

            {/* Card */}
            <div className="group p-10 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-xl transition">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-purple-100 text-purple-600 text-3xl">
                  <FaShareAlt />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Props</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Props allow data to flow from parent to child components,
                    enabling reusability and flexible component design.
                  </p>
                </div>
              </div>
            </div>

            {/* Card */}
            <div className="group p-10 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-xl transition">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-orange-100 text-orange-600 text-3xl">
                  <FaSyncAlt />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Reconciliation</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    React efficiently updates the DOM using the Virtual DOM,
                    applying only the necessary changes for better performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Card */}
            <div className="group p-10 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-xl transition md:col-span-2">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-red-100 text-red-600 text-3xl">
                  <FaLaptopCode />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Single Page Application
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                    A Single Page Application loads one HTML page and dynamically
                    updates content without refreshing, resulting in a smooth
                    and fast user experience.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
