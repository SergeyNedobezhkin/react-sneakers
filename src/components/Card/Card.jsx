import React from "react";
import { useState } from "react";
import stylesCard from "./Card.module.scss";

function Card(props) {
  const [isAdd, setIsAdd] = useState(false);

  const handlerPlus = () => {
    setIsAdd(!isAdd);
  };

  return (
    <>
      <div className={stylesCard.card}>
        <div
          className={stylesCard.favorite}
          onClick={() => {
            props.onClickFavorite();
          }}
        >
          {" "}
          <img src="/img/heart_off.svg" alt="heart_off" />
        </div>
        <img width={133} height={112} src={props.imageURL} alt="Sneakers" />
        <h5>{props.name}</h5>
        <div className={stylesCard.cardPriceWrapper}>
          <div className={stylesCard.cardPrice}>
            {" "}
            <span>Цена:</span>
            <b>{props.price} руб.</b>
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
