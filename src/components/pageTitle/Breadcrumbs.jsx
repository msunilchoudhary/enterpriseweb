import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function Breadcrumbs({ title, catName }) {
  return (
    <ul className="breadcrumbs">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <MdOutlineKeyboardDoubleArrowRight />
      </li>
      {catName && (
        <>
          <li>
            <Link to="/">{catName}</Link>
          </li>
          <li>
            <MdOutlineKeyboardDoubleArrowRight />
          </li>
        </>
      )}
      <li>
        <strong>{title}</strong>
      </li>
    </ul>
  );
}

export default Breadcrumbs;
