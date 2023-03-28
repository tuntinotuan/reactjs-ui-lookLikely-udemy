import React, { Fragment } from "react";
import Button from "../button/Button";
import CourseCard from "../course/CourseCard";
import ListCourse from "../course/ListCourse";
import Menu from "./Menu";

const CoursesSelection = () => {
  return (
    <section className="page-container mb-10">
      <h1 className="text-3xl font-bold mb-4">A broad selection of courses</h1>
      <p className="text-lg">
        Choose from 213,000 online video courses with new additions published
        every month
      </p>
      <Menu></Menu>
      <div className="p-8 border border-slate-300">
        <h1 className="text-3xl font-bold mb-4">
          Expand your career opportunities with Python
        </h1>
        <p className="preview-text text-[16px] mb-4 w-[850px]">
          Take one of Udemy's range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You'll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi error
          perferendis quas odit voluptas saepe consectetur, corporis laudantium
          animi accusantium.
        </p>
        <Button className="font-bold mb-8">Explore Python</Button>
        <ListCourse></ListCourse>
      </div>
    </section>
  );
};

export default CoursesSelection;
