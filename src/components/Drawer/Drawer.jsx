import React from "react";
import stylesDrawer from "./Drawer.module.scss";
function Drawer({ onRemove, onClickCloseCart, items = [] }) {
  return (
    <div className={stylesDrawer.overlay}>
      <div className={stylesDrawer.drawer}>
        <div className={stylesDrawer.drawerHeader}>
          {" "}
          <h2>Корзина</h2>
          <div className={stylesDrawer.exit}>
            {" "}
            <img
              onClick={onClickCloseCart}
              className={stylesDrawer.btnRemove}
              src="/img/btn_exit.svg"
              alt="Exit"
            />
          </div>
        </div>

        {items.length > 0 ? (
          <div className={stylesDrawer.cartItemContainer}>
            {items.map((obj) => (
              <div className={stylesDrawer.cartItem}>
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
        ) : (
          <div className={stylesDrawer.cartEmpty}>
            <div className={stylesDrawer.cartEmptyContainer}>
              <img src="/img/cartEmpty.svg" alt="Empty" />
              <h3>
                <b>Корзина пустая</b>
              </h3>
              <h5>Добавьте в корзину товар</h5>
              <button onClick={onClickCloseCart}>Вернуться назад</button>
            </div>
          </div>
        )}
        {/* <div className={stylesDrawer.cartEmpty}>
          <div className={stylesDrawer.cartEmptyContainer}>
            <img src="/img/cartEmpty.svg" alt="Empty" />
            <h3>
              <b>Корзина пустая</b>
            </h3>
            <button>Вернуться назад</button>
          </div>
        </div> */}

        {/* <div className={stylesDrawer.cartItemContainer}>
          {items.map((obj) => (
            <div className={stylesDrawer.cartItem}>
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
        </div> */}
        {/* <div className={stylesDrawer.cartTotalBlock}>
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
        </div> */}
      </div>
    </div>
  );
}

export default Drawer;
