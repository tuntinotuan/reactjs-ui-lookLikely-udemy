import React from "react";
import { dataTopCategories } from "../../data/dataConfig";
import TopCard from "../course/TopCard";

const TopCategories = () => {
  return (
    <section className="page-container mb-10">
      <h1 className="text-2xl font-bold mb-5">Top categories</h1>
      <div className="grid grid-cols-4 gap-7">
        {dataTopCategories &&
          dataTopCategories.map((item) => (
            <TopCard img={item.img_top} title={item.title_top}></TopCard>
          ))}
      </div>
    </section>
  );
};

export default TopCategories;
