import React from "react";
import { Link } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-xl text-center bg-white p-8 rounded-2xl shadow-md">
        <div className="flex justify-center mb-4 text-red-600">
        
          <FiAlertTriangle className="w-16 h-16" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Oops!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Something went wrong. The page you're looking for doesn't exist or an error occurred.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm md:text-base hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;

