import React from "react";
import Item from "../Item/index";
import "./style.scss";
function Products(props) {
  const { products } = props;

  return (
    <div className="productsContainer">
      {products.map((item, key) => {
        return <Item data={item} key={key} />;
      })}
    </div>
  );
}

export default Products;
