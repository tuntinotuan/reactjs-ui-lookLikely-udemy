import React, { Fragment } from "react";
import BannerTeaching from "../components/banner/BannerTeaching";
import ChooseCompanies from "../components/layout/ChooseCompanies";
import TeacherHistory from "../components/layout/TeacherHistory";
import Alone from "../components/others/Alone";
import BecomeAnInstructor from "../components/others/BecomeAnInstructor";
import HowToBegin from "../components/others/HowToBegin";
import ReasonsStart from "../components/others/ReasonsStart";
import ContributeTo from "./ContributeTo";

const TeachingOnUdemyPage = () => {
  return (
    <Fragment>
      <BannerTeaching></BannerTeaching>
      <ReasonsStart></ReasonsStart>
      <ContributeTo></ContributeTo>
      <HowToBegin></HowToBegin>
      <TeacherHistory></TeacherHistory>
      <Alone></Alone>
      <BecomeAnInstructor></BecomeAnInstructor>
      <ChooseCompanies></ChooseCompanies>
    </Fragment>
  );
};

export default TeachingOnUdemyPage;
