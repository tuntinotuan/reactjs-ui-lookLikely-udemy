import React from "react";
import Button from "../button/Button";

const CourseCard = ({
  img,
  title,
  instructer,
  rate,
  reviewing,
  currentPrice,
  oldPrice,
  bestSeller = false,
  hotNew = false,
  styleBanner = false,
}) => {
  return (
    <div
      className={`${
        styleBanner ? "flex items-start gap-7" : ""
      } course-card h-full select-none`}
    >
      <img
        src={img}
        alt=""
        className={`${
          styleBanner ? "flex-1 h-[260px]" : ""
        } w-full object-cover mb-2`}
      />
      <div className={`${styleBanner ? "flex-auto h-full" : ""}`}>
        <h3
          className={`${
            styleBanner ? "text-2xl max-w-[450px]" : "text-sm"
          } course-title font-bold mb-2`}
        >
          {title}
        </h3>
        <span className="text-xs opacity-50 mb-2">
          <p className="course-instructer">{instructer}</p>
        </span>
        <div className="rate flex items-center gap-1">
          <span className="text-textstart font-bold text-[16px]">{rate}</span>
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
          <span className="text-xs opacity-50">{reviewing}</span>
        </div>
        {/* <div className="flex flex-col flex-1"> */}
        <div
          className={`${
            styleBanner ? "text-xl mt-auto absolute bottom-0" : ""
          } flex items-center text-[16px] gap-2 mb-2`}
        >
          <span className="font-bold">
            <span className="underline">đ</span>
            {currentPrice}
          </span>
          <span className="line-through opacity-50">
            <span className="underline">đ</span>
            {oldPrice}
          </span>
        </div>
        {bestSeller ? (
          <Button
            className="bg-btnsell text-xs font-bold text-slate-800"
            borderNone
            square="py-1 px-2"
          >
            Bestseller
          </Button>
        ) : null}
        {hotNew ? (
          <Button
            className="bg-hotnew text-xs font-bold text-slate-800"
            borderNone
            square="py-1 px-2"
          >
            Hot & New
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default CourseCard;
