import React from "react";
import LogoCompanies from "../others/LogoCompanies";

const ChooseCompanies = () => {
  return (
    <section className="flex items-center justify-between gap-12 bg-darkudemy w-full border border-transparent border-b-gray-500 px-12 py-6">
      <h1 className="text-lg font-bold text-white">
        Top companies choose{" "}
        <span className="text-[#CEC0FC] hover:underline cursor-pointer">
          Udemy Business
        </span>{" "}
        to build in-demand career skills.
      </h1>
      <div className="flex-1">
        <LogoCompanies amount={5} brightness></LogoCompanies>
      </div>
    </section>
  );
};

export default ChooseCompanies;
