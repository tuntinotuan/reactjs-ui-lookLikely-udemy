import React from "react";

const TopCategories = () => {
  return (
    <section className="page-container">
      <h1>Top categories</h1>
      <div className="grid">
        <div className="">
          <img
            src={`https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg`}
            alt=""
          />
          <h2>Design</h2>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
