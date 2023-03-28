import React from "react";
import { dataCompanies } from "../../data/dataConfig";

const LeadingCompanies = () => {
  return (
    <section className="page-container text-center py-20 px-1">
      <h1 className="text-2xl font-bold mb-2">
        Trusted by over 13,400 great teams
      </h1>
      <p className="text-[16px] mb-5">
        Leading companies use the same courses to help employees keep their
        skills fresh.
      </p>
      <div className="flex items-center justify-between">
        {dataCompanies &&
          dataCompanies.map((items) => (
            <img src={items.img_companies} alt="" />
          ))}
      </div>
    </section>
  );
};

export default LeadingCompanies;
