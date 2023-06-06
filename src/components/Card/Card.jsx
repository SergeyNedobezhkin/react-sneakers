import React from "react";
import AppContext from "../../context";
import ContentLoader from "react-content-loader";
import { useState, useContext } from "react";
import stylesCard from "./Card.module.scss";

function Card({
  id,
  name,
  imageURL,
  price,
  onPlus,
  onFavorite,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded, onAddToFavorite } = useContext(AppContext);

  const [isFavorite, setIsFavorite] = useState(favorited);

  const handlerPlus = () => {
    onPlus({ id, name, imageURL, price });
  };
  // onClickFavorite  При добавлении кросовок в избранное происходит добавление в local Storage, так как ограничение бесплатного сервера.
  const onClickFavorite = () => {
    onFavorite({ id, name, imageURL, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className={stylesCard.card}>
        {loading ? (
          <ContentLoader
            speed={0}
            width={155}
            height={242}
            viewBox="0 0 145 242"
            backgroundColor="#f0f0f0"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="-1" rx="10" ry="10" width="145" height="150" />
            <rect x="0" y="164" rx="4" ry="4" width="145" height="15" />
            <rect x="1" y="188" rx="4" ry="4" width="95" height="15" />
            <rect x="0" y="213" rx="4" ry="4" width="75" height="25" />
            <rect x="112" y="205" rx="10" ry="10" width="32" height="32" />
          </ContentLoader>
        ) : (
          <>
            {onFavorite && (
              <div
                className={stylesCard.favorite}
                onClick={() => onClickFavorite()}
              >
                <img
                  src={isFavorite ? "/img/heart_on.svg" : "/img/heart_off.svg"}
                />
              </div>
            )}

            <img width={133} height={112} src={imageURL} alt="Sneakers" />
            <h5>{name}</h5>
            <div className={stylesCard.cardPriceWrapper}>
              <div className={stylesCard.cardPrice}>
                {" "}
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>

              {onPlus && (
                <img
                  className={stylesCard.cardPlus}
                  onClick={handlerPlus}
                  src={
                    isItemAdded(id)
                      ? "/img/btn_checkedOff.svg"
                      : "/img/btn_plus.svg"
                  }
                  alt="Plus"
                />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Card;
