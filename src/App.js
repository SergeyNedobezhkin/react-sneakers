import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import stylesCard from "./components/Card/Card.module.scss";
import stylesDrawer from "./components/Drawer/Drawer.module.scss";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get("https://64774eb29233e82dd53b6aad.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://64774eb29233e82dd53b6aad.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (item) => {
    axios.post("https://64774eb29233e82dd53b6aad.mockapi.io/cart", item);
    setCartItems((prev) => [...prev, item]);
    // const uniquePrev = new Set(prev);
  };
  const onRemoveItemCart = (id) => {
    axios.delete(`https://64774eb29233e82dd53b6aad.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id != id));
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drawer
          items={cartItems}
          onClickCloseCart={() => {
            setCartOpened(!cartOpened);
          }}
          onRemove={onRemoveItemCart}
        />
      ) : null}
      {/* cart - это корзина */}
      <Header
        onClickCart={() => {
          setCartOpened(!cartOpened);
        }}
      />
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
        <div className={stylesCard.sneakersWrapper}>
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                key={item.id}
                name={item.name}
                price={item.price}
                imageURL={item.imageURL}
                onClickFavorite={() => console.log("Добавили в закладки")}
                onClickPlus={() => onAddToCart(item)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
