import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Item(props) {
  const { data } = props;
  const { price, image, title, href } = data;
  const { sellingPrice, listPrice } = price;

  let count = ((price.listPrice - price.sellingPrice) * 100) / price.listPrice;
  return (
    <React.Fragment>
      <Link style={{ textDecoration: "none" }} to={`/${href}`}>
        <div className="itemContainer">
          <div className="porcentaje">
            <p className="cuenta">{Math.ceil(count)}%</p>
          </div>
          <div className="imgContainer">
            <img
              alt="Item"
              src={`http://remote.fizzmod.com/T7k15Pp693gLnT2x/frontend/assets/images/${image}`}
            />
          </div>
          <div className="titleContainer">
            <p>{title}</p>
          </div>
          <div className="priceContainer">
            {listPrice !== sellingPrice && (
              <p className="list">
                <strike>$ {listPrice}</strike>
              </p>
            )}
            {listPrice === sellingPrice && (
              <p className="list">$ {listPrice}</p>
            )}
            <p className="selling">$ {sellingPrice}</p>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}
export default Item;
