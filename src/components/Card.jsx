import React from "react";

function Card() {
  return (
    <>
      <div className="card">
        <div className="favorite">
          {" "}
          <img src="/img/heart_off.svg" alt="heart_off" />
        </div>
        <img
          width={133}
          height={112}
          src="/img/sneakers/sneakers_1.jpg"
          alt="Sneakers"
        />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="cardPriceWrapper">
          <div className="cardPrice">
            {" "}
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button className="cardBtn">
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
