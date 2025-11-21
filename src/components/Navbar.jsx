import React from "react";
import dayjs from "dayjs";
import { navLinks, navIcons } from "#constants/index.js";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="./images/logo.svg" alt="logo" />
        <p className="font-bold">Wahid Husain</p>
        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`${id} icon`} />
            </li>
          ))}
        </ul>
      </div>
      <time>{dayjs().format("ddd MMM D h:mm A")}</time>
    </nav>
  );
};

export default Navbar;
