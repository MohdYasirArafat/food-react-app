import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <div>

    <footer className="bg-gray-800 text-white py-6">
  <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-between gap-4">
    
    {/* <!-- Copyright Text --> */}
    <p className="text-center md:text-left text-sm sm:text-base lg:text-base">
      &copy; 2025 Your Company. All rights reserved.
    </p>
    
    {/* <!-- Social Links --> */}
    <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6 text-base sm:text-lg">
      <Link
        href="https://twitter.com"
        target="_blank"
        className="hover:text-blue-400 transition"
      >
        Twitter
      </Link>
      <Link
        href="https://instagram.com"
        target="_blank"
        className="hover:text-pink-500 transition"
      >
        Instagram
      </Link>
      <Link
        href="https://facebook.com"
        target="_blank"
        className="hover:text-blue-600 transition"
      >
        Facebook
      </Link>
    </div>
  </div>
</footer>


    // </div>
  );
};

export default Footer;
