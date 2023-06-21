import React, { useState } from "react";
import stylesDrawer from "./Drawer.module.scss";
import Info from "../Info";
import { useContext } from "react";
import AppContext from "../../context";
import axios from "axios";

function Drawer({ onRemove, items = [] }) {
  const { cartItems, setCartOpened, cartOpened, setCartItems, totalPrice } =
    useContext(AppContext);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const onClickOrder = async () => {
    try {
      const { data } = await axios.post(
        "https://26610614212e314e.mokky.ru/orders",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete("https://26610614212e314e.mokky.ru/cart/" + item.id);
      }
    } catch (error) {
      alert("Ошибка при создании заказа :(");
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
              src="/react-sneakers/img/btn_exit.svg"
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
                    src="/react-sneakers/img/btn_remove.svg"
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
                  <b>{`${totalPrice}`} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{`${Math.floor((totalPrice / 100) * 5)} `} руб.</b>
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
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={
              isOrderCompleted
                ? "react-sneakers/img/completeOrder.svg"
                : "react-sneakers/img/cartEmpty.svg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
