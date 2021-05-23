import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Category(props) {
  const { data } = props;
  const { href, title } = data;
  return (
    <Link style={{ textDecoration: "none" }} to={`/${href}`}>
      <div className="categoryContainer">
        <p>{title}</p>
      </div>
    </Link>
  );
}

export default Category;
