import React, { useState } from "react";

const Search = () => {
  const [filter, setFilter] = useState("");
  const handleChangeInput = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="flex items-center w-[560px] h-[50px] border border-slate-900 rounded-full bg-slate-50 px-4 py-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`w-6 h-6 ${
          filter !== "" ? "text-slate-900" : "text-slate-400"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search for anything"
        className={`w-full h-full px-2 bg-slate-50 outline-none`}
        onChange={handleChangeInput}
      />
    </div>
  );
};

export default Search;
