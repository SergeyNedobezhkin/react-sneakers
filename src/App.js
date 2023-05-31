import { useState } from "react";
import { useEffect } from "react";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import stylesCard from "./components/Card/Card.module.scss";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://64774eb29233e82dd53b6aad.mockapi.io/items").then((res) =>
      res.json().then((data) => {
        setItems(data);
      })
    );
  }, []);

  const onAddToCart = (item) => {
    setCartItems((prev) => {
      // const uniquePrev = new Set(prev);
      return [...prev, item];
    });
  };

  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drawer
          items={cartItems}
          onClickCloseCart={() => {
            setCartOpened(!cartOpened);
          }}
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
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className={stylesCard.sneakersWrapper}>
          {items.map((item) => (
            <Card
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
