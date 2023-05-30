import React from "react";

function Drawer() {
  return (
    <div className="drawer">
      <h2>Корзина</h2>
      <div className="cartItemContainer">
        <div className="cartItem">
          <img
            width={70}
            height={70}
            src="/img/sneakers/sneakers_2.jpg"
            alt="Sneakers"
          />
          <div>
            <p>Мужские Кроссовки Nike Air Max 270</p> <b>12 999 руб.</b>
          </div>
          <img className="btnRemove" src="/img/btn_remove.svg" alt="Remove" />
        </div>
        <div className="cartItem">
          <img
            width={70}
            height={70}
            src="/img/sneakers/sneakers_2.jpg"
            alt="Sneakers"
          />
          <div>
            <p>Мужские Кроссовки Nike Air Max 270</p> <b>12 999 руб.</b>
          </div>
          <img className="btnRemove" src="/img/btn_remove.svg" alt="Remove" />
        </div>{" "}
      </div>
      <div className="cartTotalBlock">
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
        <button className="">Оформить заказ</button>
      </div>
    </div>
  );
}

export default Drawer;
