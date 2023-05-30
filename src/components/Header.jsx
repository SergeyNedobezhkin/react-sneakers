import React from "react";

function Header() {
  return (
    <header>
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png" />
        <div className="headerInfo">
          <h3 className="headerInfoTitle">React Sneakers</h3>
          <p>Магазин лучших кросовок</p>
        </div>
      </div>

      <ul className="headerRight">
        <li>
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
