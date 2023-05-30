import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.favorite}>
          {" "}
          <img src="/img/heart_off.svg" alt="heart_off" />
        </div>
        <img width={133} height={112} src={props.imageURL} alt="Sneakers" />
        <h5>{props.name}</h5>
        <div className={styles.cardPriceWrapper}>
          <div className={styles.cardPrice}>
            {" "}
            <span>Цена:</span>
            <b>{props.price} руб.</b>
          </div>
          <button
            onClick={() => {
              props.onClick();
            }}
            className={styles.cardBtn}
          >
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
