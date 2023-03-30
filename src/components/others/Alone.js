import React from "react";

const Alone = ({ translate = "translate-x-1/3" }) => {
  return (
    <section className="flex w-full items-center justify-between text-center my-32">
      <div className="h-full">
        <img
          src="https://s.udemycdn.com/teaching/support-1-v3.jpg"
          alt=""
          className={`-${translate}`}
        />
      </div>
      <div className="w-full max-w-[700px] h-auto">
        <h1 className="text-4xl font-bold">You won't have to do it alone</h1>
        <p className="text-xl my-5">
          <span className="font-bold"></span>
          Our <span className="font-bold">Instructor Support Team</span> is here
          to answer your questions and review your test video, while our{" "}
          <span className="font-bold">Teaching Center</span> gives you plenty of
          resources to help you through the process. Plus, get the support of
          experienced instructors in our{" "}
          <span className="font-bold">online community.</span>
        </p>
        <a
          href="https://teach.udemy.com/teaching-on-udemy/"
          target="_blank"
          className="text-lg text-purple-700 hover:text-purple-800 underline"
        >
          Need more details before your start? Learn more.
        </a>
      </div>
      <div className="h-full">
        <img
          src="https://s.udemycdn.com/teaching/support-2-v3.jpg"
          alt=""
          className={`${translate}`}
        />
      </div>
    </section>
  );
};

export default Alone;