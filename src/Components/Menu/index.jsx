import React from "react";
import MenuItem from "../menuItem";
import "./style.css";
const Menu = () => {
  return (
    <ul>
      {/* <div className="Color">Menugas</div> */}
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <MenuItem text="Home" />
      <MenuItem text="About" />
      <MenuItem text="Contact" />
    </ul>
  );
};

export default Menu;
