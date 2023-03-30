import React from "react";
import { dataCompanies } from "../../data/dataConfig";

const LogoCompanies = ({ amount = 6, brightness = false, between = false }) => {
  return (
    <div
      className={`flex items-center gap-5 ${between ? "justify-between" : ""}`}
    >
      {dataCompanies &&
        dataCompanies
          .slice(0, amount)
          .map((items) => (
            <img
              src={items.img_companies}
              alt=""
              className={`${brightness ? "filter brightness-200" : ""}`}
            />
          ))}
    </div>
  );
};

export default LogoCompanies;
