import React from "react";
import "./style.scss";

function Checkbox(props) {
  const { data, handleFilter } = props;
  const { values, field, title } = data;

  function handleChange(e, key, value) {
    //KEY: marca o categoría
    //VALUE valor clickeado
    //STATUS: TRUe or FALSE
    const status = e.target.checked;
    handleFilter(status, value, key);
  }

  return (
    <div className="checkboxContainer">
      <div className="titleContainer">
        <p className="title">{title}</p>
      </div>
      <div className="inputContainer">
        <div className="input">
          {values.map((value, key) => {
            return (
              <div key={key}>
                <input
                  key={key}
                  type="checkbox"
                  onChange={e => handleChange(e, field, value)}
                />
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Checkbox;
