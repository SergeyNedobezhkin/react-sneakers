import React, { useContext } from "react";
// import { useEffect } from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";
import stylesCard from "../components/Card/Card.module.scss";
import stylesDrawer from "../components/Drawer/Drawer.module.scss";
function Favorites({ onAddToFavorite }) {
  const { favorites } = useContext(AppContext);

  return (
    <div className="contant">
      <div className="searchWrapper">
        {" "}
        <h1>Мои закладки</h1>
      </div>
      <div className={stylesCard.sneakersWrapper}>
        {" "}
        {favorites.map((item) => (
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
