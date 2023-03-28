import React, { Fragment } from "react";
import CoursesStarted from "../components/layout/CoursesStarted";
import MenuCourses from "../components/layout/MenuCourses";
import Facts from "../components/others/Facts";

const CoursesPage = () => {
  return (
    <Fragment>
      <MenuCourses></MenuCourses>
      <CoursesStarted></CoursesStarted>
      <Facts></Facts>
    </Fragment>
  );
};

export default CoursesPage;
