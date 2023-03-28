import React from "react";

const TopCard = ({ img, title }) => {
  return (
    <div className="top-card">
      <img src={img} alt="" className="mb-2" />
      <h2 className="text-[16px] font-bold mb-5">{title}</h2>
    </div>
  );
};

export default TopCard;
