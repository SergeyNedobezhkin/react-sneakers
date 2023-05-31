import React from "react";
import { useState } from "react";
import stylesCard from "./Card.module.scss";

function Card({ name, imageURL, price, onClickPlus, onClickFavorite }) {
  const [isAdd, setIsAdd] = useState(false);

  const handlerPlus = () => {
    onClickPlus();
    setIsAdd(!isAdd);
  };

  return (
    <>
      <div className={stylesCard.card}>
        <div
          className={stylesCard.favorite}
          onClick={() => {
            onClickFavorite();
          }}
        >
          {" "}
          <img src="/img/heart_off.svg" alt="heart_off" />
        </div>
        <img width={133} height={112} src={imageURL} alt="Sneakers" />
        <h5>{name}</h5>
        <div className={stylesCard.cardPriceWrapper}>
          <div className={stylesCard.cardPrice}>
            {" "}
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>

          <img
            className={stylesCard.cardPlus}
            onClick={() => {
              handlerPlus();
            }}
            src={isAdd ? "/img/btn_checked.svg" : "/img/btn_plus.svg"}
            alt="Plus"
          />
        </div>
      </div>
    </>
  );
}

export default Card;
