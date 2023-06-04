import React from "react";
import { Link } from "react-router-dom";
import stylesHeader from "./Header.module.scss";
function Header(props) {
  return (
    <header>
      <Link to="http://localhost:3000/">
        <div className={stylesHeader.headerLeft}>
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />

          <div className={stylesHeader.headerInfo}>
            <h3 className={stylesHeader.headerInfoTitle}>React Sneakers</h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>
      </Link>
      <ul className={stylesHeader.headerRight}>
        <li onClick={props.onClickCart}>
          {" "}
          <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
          <span>1205руб.</span>
        </li>
        <li className={stylesHeader.favoriteHeader}>
          {" "}
          <Link to="/favorites">
            {" "}
            <img src="/img/favoriteHeader.svg" alt="Heart" />
          </Link>
        </li>
        <li>
          {" "}
          <img width={18} height={18} src="/img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
{
  /* <img src={isFavorite ? "/img/heart_on.svg" : "/img/heart_off.svg"} /> */
}
