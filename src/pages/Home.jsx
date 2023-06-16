import React, { useContext } from "react";
import Card from "../components/Card/Card";
import stylesCard from "../components/Card/Card.module.scss";
import stylesDrawer from "../components/Drawer/Drawer.module.scss";
import AppContext from "../context";

function Home({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  items,
  onAddToCart,
  onAddToFavorite,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onPlus={(item) => onAddToCart(item)}
        onFavorite={(item) => onAddToFavorite(item)}
        loading={isLoading}
        //передал все ключи объекта через {...item};
        {...item}
      />
    ));
  };
  return (
    <div className="contant">
      <div className="searchWrapper">
        {" "}
        <h1>
          {searchValue
            ? `Поиск по запросу: "${searchValue}" `
            : "Все кроссовки"}
        </h1>
        <div className="searchBlock">
          <img src="/react-sneakers/img/search.svg" alt="Search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
          <img
            onClick={() => setSearchValue("")}
            className={stylesDrawer.btnRemove}
            src="/react-sneakers/img/btn_exit.svg"
            alt="Exit"
          />
        </div>
      </div>
      <div className={stylesCard.sneakersWrapper}>{renderItems()}</div>
    </div>
  );
}

export default Home;
