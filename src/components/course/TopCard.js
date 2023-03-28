import React from "react";

const TopCard = ({ img, title }) => {
  return (
    <div className="top-card overflow-hidden">
      <div className="h-[300px] overflow-hidden mb-2">
        <img src={img} alt="" className="top-categories-img w-full h-full" />
      </div>
      <h2 className="text-[16px] font-bold mb-5">{title}</h2>
    </div>
  );
};

export default TopCard;
