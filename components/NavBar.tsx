import React from "react";
import UserBox from "./UserBox";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-between py-7 px-40">
      <a href="/">
        <h1 className="text-2xl font-bold">ProjectLogo</h1>
      </a>
      <ul className="flex items-center gap-5">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <UserBox />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
