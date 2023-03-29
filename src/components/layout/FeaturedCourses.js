import React from "react";
import { dataCourses } from "../../data/dataConfig";
import ListCourse from "../course/ListCourse";

const FeaturedCourses = () => {
  return (
    <section className="page-container mb-12 max-h-[350px]">
      <h1 className="text-2xl font-bold mb-6">Featured courses</h1>
      <ListCourse data={dataCourses} top="top-1/3" convertCard></ListCourse>
    </section>
  );
};

export default FeaturedCourses;
