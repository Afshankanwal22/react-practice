import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-12">
      <div className=" mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-6 gap-8">

        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold mb-4">React</h2>
          <p className="text-gray-400">
          Copyright © Meta Platforms, Inc uwu?
          </p>
        </div>

        {/* Learn React */}
        <div>
          <h2 className="font-semibold mb-4">Learn React</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Quick Start</a></li>
            <li><a href="#" className="hover:text-white">Installation</a></li>
            <li><a href="#" className="hover:text-white">Describing the UI</a></li>
            <li><a href="#" className="hover:text-white">Adding Interactivity</a></li>
            <li><a href="#" className="hover:text-white">Managing State</a></li>
            <li><a href="#" className="hover:text-white">Escape Hatches</a></li>
          </ul>
        </div>
        {/* API Reference */}
        <div>
          <h2 className="font-semibold mb-4">API Reference</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">React APIs</a></li>
            <li><a href="#" className="hover:text-white">React DOM APIs</a></li>
          </ul>
        </div>

         {/* Community */}
        <div>
          <h2 className="font-semibold mb-4">Community</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Code of Conduct</a></li>
            <li><a href="#" className="hover:text-white">Meet the Team</a></li>
            <li><a href="#" className="hover:text-white">Docs Contributors</a></li>
            <li><a href="#" className="hover:text-white">Acknowledgements</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="font-semibold mb-4">More</h2>
          <div className="flex space-x-4">

            <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">React Native</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
          </ul>


            
          </div>
        </div>

        
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-500">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
