import React from "react";
import { Link } from "react-router-dom";

const SlopPage = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Slop Version
        </h1>
        <p className="text-gray-400 text-sm mb-8">
          This is a placeholder page. Content will be added here later.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/og"
            className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition"
          >
            Go to OG Version →
          </Link>
          <Link
            to="/"
            className="px-5 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-medium transition"
          >
            ← Back to Options
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlopPage;
