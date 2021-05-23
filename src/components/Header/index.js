import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import Categorias from "../Categorias/index";

import "./style.scss";

function Header() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const result = await fetch("http://remote.fizzmod.com/menu.json");
    const resultJson = await result.json();
    setMenu(resultJson.menu.categories);
  }

  return (
    <header className="headerContainer">
      <div className="header">
        <div className="challenge">
          <img alt="header" src={logo} />
        </div>
        <div className="three">
          <div className="account">
            <ul>
              <li>Ayuda</li>
              <li>Mis pedidos</li>
              <li>Mi cuenta</li>
            </ul>
          </div>
          <div className="division">
            <div className="handleSearch">
              <input
                className="inputHeader"
                placeholder="Buscar un producto..."
              />
            </div>
            <div className="ship">
              <p> MI CARRITO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="headerCategorias">
        <Categorias menu={menu} />
      </div>
    </header>
  );
}

export default Header;
