import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import Search from "../search/Search";

const Header = () => {
  return (
    <header className="header flex items-center justify-center gap-x-5 shadow-md">
      <img
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
        alt=""
        className="w-[90px] h-[70px] cursor-pointer"
      />
      <span>Categories</span>
      <Search></Search>
      {/* <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
        Home
        </NavLink>
        <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
        Movies
      </NavLink> */}
      <span>Udemy Business</span>
      <span>Teach on Udemy</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
      <Button className="font-bold">Log in</Button>
      <Button className="bg-black text-white font-bold">Sign up</Button>
      <Button className="" square="py-2 px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      </Button>
    </header>
  );
};

export default Header;