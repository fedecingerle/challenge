import React from "react";
import Category from "../Category/index";
import "./style.scss";

function Categorias(props) {
  const { menu } = props;
  return (
    <div className="categoriasContainer">
      {menu.map((item, key) => {
        return <Category data={item} key={key} />;
      })}
    </div>
  );
}

export default Categorias;
