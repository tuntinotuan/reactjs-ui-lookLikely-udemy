import React from "react";

const NavigateCourse = ({
  active = "Most popular",
  array = ["New", "Trending"],
  textSize = "text-sm",
  gap = "gap-6",
}) => {
  return (
    <nav className="border border-transparent border-b-slate-200 mb-4">
      <ul
        className={`flex items-center text-slate-600 font-bold ${gap} ${textSize}`}
      >
        <li className="border-2 border-transparent text-darkudemy border-b-darkudemy cursor-pointer pb-4">
          {active}
        </li>
        {array.map((items) => (
          <li className="pb-4 cursor-pointer hover:text-darkudemy">{items}</li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigateCourse;
