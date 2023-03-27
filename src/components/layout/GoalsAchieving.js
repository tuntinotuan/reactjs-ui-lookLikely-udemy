import React from "react";
import ListCourse from "../course/ListCourse";

const GoalsAchieving = () => {
  return (
    <div className="bg-slate-100 h-[500px] py-10 mb-10">
      <section className="page-container">
        <h1>How learners like you are achieving their goals</h1>
        <ListCourse></ListCourse>
      </section>
    </div>
  );
};

export default GoalsAchieving;
