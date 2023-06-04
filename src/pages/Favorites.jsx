import React from "react";
import { useEffect } from "react";
import Card from "../components/Card/Card";
import stylesCard from "../components/Card/Card.module.scss";
import stylesDrawer from "../components/Drawer/Drawer.module.scss";
function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="contant">
      <div className="searchWrapper">
        {" "}
        <h1>Мои закладки</h1>
      </div>
      <div className={stylesCard.sneakersWrapper}>
        {" "}
        {items.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            price={item.price}
            imageURL={item.imageURL}
            onFavorite={onAddToFavorite}
            id={item.id}
            added
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
