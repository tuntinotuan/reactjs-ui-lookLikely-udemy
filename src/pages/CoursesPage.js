import React, { Fragment } from "react";
import AllCourses from "../components/layout/AllCourses";
import ChooseCompanies from "../components/layout/ChooseCompanies";
import CoursesStarted from "../components/layout/CoursesStarted";
import FeaturedCourses from "../components/layout/FeaturedCourses";
import MenuCourses from "../components/layout/MenuCourses";
import Facts from "../components/others/Facts";
import PopularTopics from "../components/layout/PopularTopics";
import PopularInstructors from "../components/layout/PopularInstructors";

const CoursesPage = ({ data }) => {
  return (
    <Fragment>
      <MenuCourses></MenuCourses>
      <CoursesStarted data={data}></CoursesStarted>
      <Facts></Facts>
      <FeaturedCourses></FeaturedCourses>
      {/* <PopularTopics></PopularTopics> */}
      <PopularInstructors></PopularInstructors>
      <AllCourses></AllCourses>
      <ChooseCompanies></ChooseCompanies>
    </Fragment>
  );
};

export default CoursesPage;
