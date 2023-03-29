import React, { Fragment } from "react";
import AllCourses from "../components/layout/AllCourses";
import ChooseCompanies from "../components/layout/ChooseCompanies";
import CoursesStarted from "../components/layout/CoursesStarted";
import FeaturedCourses from "../components/layout/FeaturedCourses";
import MenuCourses from "../components/layout/MenuCourses";
import Facts from "../components/others/Facts";

const CoursesPage = () => {
  return (
    <Fragment>
      <MenuCourses></MenuCourses>
      <CoursesStarted></CoursesStarted>
      <Facts></Facts>
      <FeaturedCourses></FeaturedCourses>
      <AllCourses></AllCourses>
      <ChooseCompanies></ChooseCompanies>
    </Fragment>
  );
};

export default CoursesPage;
