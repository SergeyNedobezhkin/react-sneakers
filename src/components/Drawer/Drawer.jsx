import React from "react";
import stylesDrawer from "./Drawer.module.scss";
function Drawer(props) {
  return (
    <div className={stylesDrawer.overlay}>
      <div className={stylesDrawer.drawer}>
        <div className={stylesDrawer.drawerHeader}>
          {" "}
          <h2>Корзина</h2>
          <div className={stylesDrawer.exit}>
            {" "}
            <img
              onClick={props.onClickCloseCart}
              className={stylesDrawer.btnRemove}
              src="/img/btn_exit.svg"
              alt="Exit"
            />
          </div>
        </div>
        <div className={stylesDrawer.cartItemContainer}>
          <div className={stylesDrawer.cartItem}>
            <img
              width={70}
              height={70}
              src="/img/sneakers/sneakers_2.jpg"
              alt="Sneakers"
            />
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p> <b>12 999 руб.</b>
            </div>
            <img
              className={stylesDrawer.btnRemove}
              src="/img/btn_remove.svg"
              alt="Remove"
            />
          </div>
          <div className={stylesDrawer.cartItem}>
            <img
              width={70}
              height={70}
              src="/img/sneakers/sneakers_2.jpg"
              alt="Sneakers"
            />
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p> <b>12 999 руб.</b>
            </div>
            <img
              className={stylesDrawer.btnRemove}
              src="/img/btn_remove.svg"
              alt="Remove"
            />
          </div>{" "}
        </div>
        <div className={stylesDrawer.cartTotalBlock}>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
