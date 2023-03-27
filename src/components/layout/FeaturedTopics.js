import React from "react";
import Button from "../button/Button";

const FeaturedTopics = () => {
  return (
    <div className="bg-slate-100">
      <section className="page-container">
        <h1>Featured topics by category</h1>
        <Button className="font-bold">Explore more topics</Button>
      </section>
    </div>
  );
};

export default FeaturedTopics;
