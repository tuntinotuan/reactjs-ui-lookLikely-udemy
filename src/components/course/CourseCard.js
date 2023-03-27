import React from "react";
import Button from "../button/Button";

const CourseCard = () => {
  return (
    <div className="course-card flex flex-col bg-slate-800 text-white h-full select-none">
      <img
        src={`https://img-b.udemycdn.com/course/240x135/394676_ce3d_5.jpg`}
        alt=""
        className="w-full h-[200px] object-cover mb-2"
      />
      <h3 className="course-title text-white font-bold mb-3">
        Learn Python: The Complete Python Programming Course
      </h3>
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>asdfasdfasdf</span>
          <span>asdasda</span>
        </div>
        <Button>Bestseller</Button>
      </div>
    </div>
  );
};

export default CourseCard;
