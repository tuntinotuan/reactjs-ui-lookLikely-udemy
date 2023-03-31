import React from "react";
import Button from "../button/Button";

const CourseAttention = ({ scroll }) => {
  return (
    <section
      className={`bg-darkudemy text-white py-4 shadow-lg fixed top-0 left-0 right-0 ${
        scroll !== 0 ? "block" : "hidden"
      }`}
    >
      <div className="page-container">
        <h1 className="text-sm font-bold mb-2">
          Learning Python for Data Analysis and Visualization Ver 1
        </h1>
        <div className="flex items-center gap-2">
          <Button
            className="bg-btnsell text-xs font-bold text-slate-800"
            borderNone
            square="py-1 px-2"
          >
            Bestseller
          </Button>
          <div className="rate flex items-center gap-1 cursor-pointer">
            <span className="text-btnsell font-bold text-sm">4.3</span>
            {Array(4)
              .fill(null)
              .map((index) => (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  alt=""
                  className="w-[11px] h-[11px]"
                  key={index}
                />
              ))}
            <img
              src="https://cdn-icons-png.flaticon.com/128/2107/2107737.png"
              alt=""
              className="w-[11px] h-[11px]"
            />
            <span className="text-xs text-partner underline">
              (18,934 ratings)
            </span>
          </div>
          <p>197,152 students</p>
        </div>
      </div>
    </section>
  );
};

export default CourseAttention;
