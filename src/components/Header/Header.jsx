import React from "react";
import stylesHeader from "./Header.module.scss";
function Header(props) {
  return (
    <header>
      <div className={stylesHeader.headerLeft}>
        <img width={40} height={40} src="/img/logo.png" />
        <div className={stylesHeader.headerInfo}>
          <h3 className={stylesHeader.headerInfoTitle}>React Sneakers</h3>
          <p>Магазин лучших кросовок</p>
        </div>
      </div>

      <ul className={stylesHeader.headerRight}>
        <li onClick={props.onClickCart}>
          {" "}
          <img width={18} height={18} src="/img/cart.svg" />
          <span>1205руб.</span>
        </li>
        <li>
          {" "}
          <img width={18} height={18} src="/img/user.svg" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
