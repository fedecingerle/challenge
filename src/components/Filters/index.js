import React from "react";
import Checkbox from "../Checkbox/index";

function Filters(props) {
  const { filters, applyFilter } = props;

  function handleFilter(status, value, key) {
    applyFilter(status, value, key);
  }

  return (
    <div className="filterContainer">
      {filters.map((item, key) => {
        return <Checkbox data={item} key={key} handleFilter={handleFilter} />;
      })}
    </div>
  );
}

export default Filters;
