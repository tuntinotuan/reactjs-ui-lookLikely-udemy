import React from "react";

const NavigateCourse = () => {
  return (
    <nav className="border border-transparent border-b-slate-200 mb-4">
      <ul className="flex items-center text-slate-600 font-bold gap-6">
        <li className="border-2 border-transparent text-darkudemy border-b-darkudemy cursor-pointer pb-4">
          Most popular
        </li>
        <li className="pb-4 cursor-pointer hover:text-darkudemy">New</li>
        <li className="pb-4 cursor-pointer hover:text-darkudemy">Trending</li>
      </ul>
    </nav>
  );
};

export default NavigateCourse;
