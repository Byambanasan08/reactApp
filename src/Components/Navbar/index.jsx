import React from "react";

const Navbar = ({ text, b, c }) => {
  const x = c.reduce((age, d) => d + age);
  return (
    <>
      <div>{text}</div>
      <div>{b()}</div>
      <div>Niit hereglegchdiin nas:{x}</div>
    </>
  );
};

export default Navbar;
