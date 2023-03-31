import React from "react";
import NavigateCourse from "./NavigateCourse";
import Button from "../button/Button";

const MainInforDetails = () => {
  return (
    <section className="bg-darkudemy text-white py-8">
      <div className="page-container-fluid">
        <div className="w-[690px]">
          <NavigateCourse
            active="Development"
            array={["Programming Languages", "Data Analysis"]}
            textSize="text-[13px]"
            textColor="text-partner"
            hoverNone
            gap
            borderNone
            paddingNone
            arrow
          ></NavigateCourse>
          <h1 className="text-3xl font-bold">
            Learning Python for Data Analysis and Visualization Ver 1
          </h1>
          <p className="my-4">
            Learn python and how to use it to analyze,visualize and present
            data. Includes tons of sample code and hours of video!
          </p>
          <div className="flex items-center gap-2">
            <Button
              className="bg-btnsell text-xs font-bold text-slate-800"
              borderNone
              square="py-1 px-2"
            >
              Bestseller
            </Button>
            <div className="rate flex items-center gap-1 cursor-pointer">
              <span className="text-btnsell font-bold text-sm">4.3</span>
              {Array(4)
                .fill(null)
                .map((index) => (
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                    className="w-[11px] h-[11px]"
                    key={index}
                  />
                ))}
              <img
                src="https://cdn-icons-png.flaticon.com/128/2107/2107737.png"
                alt=""
                className="w-[11px] h-[11px]"
              />
              <span className="text-xs text-partner underline">
                (18,934 ratings)
              </span>
            </div>
            <p>197,152 students</p>
          </div>
          <div className="my-2">
            <p>
              Created by{" "}
              <span className="text-partner underline cursor-pointer">
                Jose Portilla
              </span>
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <p className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
              Last updated 9/2019
            </p>
            <p className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              English
            </p>
            <p className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>
              English [Auto], Indonesian [Auto] ,
              <p className="text-partner underline">5 more</p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainInforDetails;
