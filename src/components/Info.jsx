import React, { useContext } from "react";
import stylesDrawer from "./Drawer/Drawer.module.scss";
import AppContext from "../context";
function Info({ image, title, description }) {
  const { setCartOpened } = useContext(AppContext);
  return (
    <div>
      <div className={stylesDrawer.cartEmpty}>
        <div className={stylesDrawer.cartEmptyContainer}>
          <img src={image} alt="Empty" />
          <h3>
            <b>{title}</b>
          </h3>
          <h5>{description}</h5>
          <button onClick={() => setCartOpened(false)}>Вернуться назад!</button>
        </div>
      </div>
    </div>
  );
}

export default Info;
