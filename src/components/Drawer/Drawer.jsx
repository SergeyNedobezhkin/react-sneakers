import React, { useState } from "react";

import stylesDrawer from "./Drawer.module.scss";
import Info from "../Info";
import { useContext } from "react";
import AppContext from "../../context";
import axios from "axios";
function Drawer({ onRemove, items = [] }) {
  const { cartItems, setCartOpened, cartOpened, setCartItems } =
    useContext(AppContext);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const onClickOrder = () => {
    try {
      sessionStorage.setItem(
        items.map((item) => "id: " + item.id),
        JSON.stringify({ items: cartItems })
      );
      // axios.put(`https://64774eb29233e82dd53b6aad.mockapi.io/cart`, []);
      setIsOrderCompleted(true);
      setCartItems([]);
      cartItems.forEach((item) => {
        axios.delete(
          `https://64774eb29233e82dd53b6aad.mockapi.io/cart/` + item.id
        );
      });
    } catch (error) {
      alert("Ошибка оформления заказа!!!");
    }
  };
  return (
    <div className={stylesDrawer.overlay}>
      <div className={stylesDrawer.drawer}>
        <div className={stylesDrawer.drawerHeader}>
          {" "}
          <h2>Корзина</h2>
          <div className={stylesDrawer.exit}>
            {" "}
            <img
              onClick={() => setCartOpened(!cartOpened)}
              className={stylesDrawer.btnRemove}
              src="/img/btn_exit.svg"
              alt="Exit"
            />
          </div>
        </div>{" "}
        {items.length > 0 ? (
          <>
            <div className={stylesDrawer.cartItemContainer}>
              {items.map((obj) => (
                <div key={obj.id} className={stylesDrawer.cartItem}>
                  <div
                    className={stylesDrawer.cartItemImg}
                    style={{
                      backgroundImage: `url(${obj.imageURL})`,
                    }}
                    alt="Sneakers"
                  />

                  <div>
                    <p>{obj.name}</p> <b>{obj.price} руб.</b>
                  </div>
                  <img
                    className={stylesDrawer.btnRemove}
                    onClick={() => onRemove(obj.id)}
                    src="/img/btn_remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
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
              <button onClick={onClickOrder}>Оформить заказ</button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderCompleted
                ? "Ваш заказ скоро будет передан курьерской доставке"
                : "Добавьте товар в корзину."
            }
            image={
              isOrderCompleted ? "/img/completeOrder.svg" : "/img/cartEmpty.svg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
