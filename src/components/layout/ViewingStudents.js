import React from "react";
import { dataViewingStudents } from "../../data/dataConfig";
import ListCourse from "../course/ListCourse";

const ViewingStudents = () => {
  return (
    <section className="page-container mb-20">
      <h1 className="text-2xl font-bold mb-5">Students are viewing</h1>
      <ListCourse data={dataViewingStudents}></ListCourse>
    </section>
  );
};

export default ViewingStudents;
