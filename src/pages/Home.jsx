import React from "react";
import Card from "../components/Card/Card";
import stylesCard from "../components/Card/Card.module.scss";
import stylesDrawer from "../components/Drawer/Drawer.module.scss";
function Home({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  items,
  cartItems,
  onAddToCart,
  onAddToFavorite,
  isLoading,
}) {
  //  есть бак при добавлении карты и затем удалении ее в корзине остается одна карта

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(item) => onAddToFavorite(item)}
        onClickPlus={(item) => onAddToCart(item)}
        added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
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
          <img src="/img/search.svg" alt="Search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
          <img
            onClick={() => setSearchValue("")}
            className={stylesDrawer.btnRemove}
            src="/img/btn_exit.svg"
            alt="Exit"
          />
        </div>
      </div>
      <div className={stylesCard.sneakersWrapper}>{renderItems()}</div>
    </div>
  );
}

export default Home;
