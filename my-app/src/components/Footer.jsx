import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10">

        {/* BRAND */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo_dark.svg" alt="React Logo" className="w-10 h-10" />
            <h2 className="text-2xl font-bold text-white">React</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            A JavaScript library for building user interfaces.
            Maintained by Meta and a community of developers.
          </p>
        </div>

        {/* LEARN */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
            Learn React
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Quick Start</a></li>
            <li><a href="#" className="hover:text-white transition">Installation</a></li>
            <li><a href="#" className="hover:text-white transition">Describing the UI</a></li>
            <li><a href="#" className="hover:text-white transition">Adding Interactivity</a></li>
            <li><a href="#" className="hover:text-white transition">Managing State</a></li>
            <li><a href="#" className="hover:text-white transition">Escape Hatches</a></li>
          </ul>
        </div>

        {/* API */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
            API Reference
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">React APIs</a></li>
            <li><a href="#" className="hover:text-white transition">React DOM APIs</a></li>
          </ul>
        </div>

        {/* COMMUNITY */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
            Community
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Code of Conduct</a></li>
            <li><a href="#" className="hover:text-white transition">Meet the Team</a></li>
            <li><a href="#" className="hover:text-white transition">Docs Contributors</a></li>
            <li><a href="#" className="hover:text-white transition">Acknowledgements</a></li>
          </ul>
        </div>

        {/* MORE */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
            More
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">React Native</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms</a></li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} React. All rights reserved.
          </p>
          <p>
            Copyright © Meta Platforms, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
