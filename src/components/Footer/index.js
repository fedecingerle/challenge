import React from "react";
import "./style.scss";

function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footer">
        <div className="box">
          <div className="titleFoot">PRODUCTOS</div>
          <ul className="listFooter">
            <li>Compre Junto</li>
            <li>Kit Look</li>
            <li>Completá tu compra</li>
            <li>Shop the look</li>
            <li>Sin Stock</li>
          </ul>
        </div>
        <div className="box">
          <div className="titleFoot">MI CUENTA</div>
          <ul className="listFooter">
            <li>Mis pedidos</li>
            <li> wishlist</li>
            <li>Productos frecuentes</li>
            <li>Mis listas</li>
            <li>Mis recetas</li>
          </ul>
        </div>
        <div className="box">
          <div className="titleFoot">CONTACTANOS</div>
          <ul className="listFooter">
            <li>Nuestras sucursales </li>
            <li>Horarios y Teléfonos</li>
          </ul>
        </div>
        <div className="socialMedia">
          <p>F</p>
          <p>I</p>
          <p>T</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
