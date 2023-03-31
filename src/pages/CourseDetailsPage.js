import React from "react";
import { Fragment } from "react";
import MainInforDetails from "../components/layout/MainInforDetails";
import CourseAttention from "../components/others/CourseAttention";

const CourseDetailsPage = () => {
  return (
    <Fragment>
      <MainInforDetails></MainInforDetails>
      <CourseAttention></CourseAttention>
    </Fragment>
  );
};

export default CourseDetailsPage;
