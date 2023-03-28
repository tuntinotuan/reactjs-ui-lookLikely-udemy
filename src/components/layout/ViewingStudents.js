import React from "react";
import ListCourse from "../course/ListCourse";

const ViewingStudents = () => {
  return (
    <section className="page-container mb-10">
      <h1 className="text-2xl font-bold">Students are viewing</h1>
      <ListCourse></ListCourse>
    </section>
  );
};

export default ViewingStudents;
