import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold mb-4">MyApp</h2>
          <p className="text-gray-400">
            MyApp is a modern React app with Tailwind CSS, designed to be responsive, fast, and beautiful.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" className="hover:text-white">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.596 0 0 .596 0 1.325v21.351C0 23.404.596 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.596 1.324-1.324V1.325C24 .596 23.404 0 22.675 0z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-white">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .39.045.765.127 1.124C7.69 8.094 4.066 6.13 1.64 3.161c-.427.734-.666 1.584-.666 2.492 0 1.72.875 3.234 2.203 4.123-.813-.026-1.577-.249-2.243-.621v.062c0 2.404 1.71 4.405 3.977 4.858-.417.114-.855.175-1.307.175-.32 0-.631-.03-.935-.086.631 1.953 2.445 3.376 4.6 3.414-1.68 1.318-3.809 2.104-6.115 2.104-.397 0-.788-.023-1.175-.068 2.179 1.396 4.768 2.212 7.548 2.212 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634.961-.695 1.8-1.562 2.46-2.549l-.047-.02z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-white">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.403a4.92 4.92 0 011.675 1.095 4.92 4.92 0 011.096 1.675c.163.457.35 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.427a4.902 4.902 0 01-1.096 1.675 4.902 4.902 0 01-1.675 1.096c-.457.163-1.257.35-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.403a4.902 4.902 0 01-1.675-1.096 4.902 4.902 0 01-1.096-1.675c-.163-.457-.35-1.257-.403-2.427-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.427a4.902 4.902 0 011.096-1.675 4.902 4.902 0 011.675-1.096c.457-.163 1.257-.35 2.427-.403 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.741 0 8.332.012 7.052.07 5.775.128 4.868.317 4.07.606a7.075 7.075 0 00-2.548 1.638A7.075 7.075 0 00.606 4.792c-.29.798-.478 1.705-.536 2.982C.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.058 1.277.247 2.184.536 2.982a7.075 7.075 0 001.638 2.548 7.075 7.075 0 002.548 1.638c.798.29 1.705.478 2.982.536C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.277-.058 2.184-.247 2.982-.536a7.075 7.075 0 002.548-1.638 7.075 7.075 0 001.638-2.548c.29-.798.478-1.705.536-2.982C23.988 15.668 24 15.259 24 12s-.012-3.668-.07-4.948c-.058-1.277-.247-2.184-.536-2.982a7.075 7.075 0 00-1.638-2.548 7.075 7.075 0 00-2.548-1.638c-.798-.29-1.705-.478-2.982-.536C15.668.012 15.259 0 12 0z"/></svg>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">123 Main Street</p>
          <p className="text-gray-400">City, Country</p>
          <p className="text-gray-400">email@example.com</p>
          <p className="text-gray-400">+123 456 7890</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-500">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
