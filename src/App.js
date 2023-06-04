import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import Home from "./pages/Home";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function axiosData() {
      setIsLoading(true);
      const cartResponse = await axios.get(
        "https://64774eb29233e82dd53b6aad.mockapi.io/cart"
      );
      const itemsResponse = await axios.get(
        "https://64774eb29233e82dd53b6aad.mockapi.io/items"
      );
      setIsLoading(false);

      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
    }
    axiosData();
  }, []);

  const onAddToCart = (item) => {
    // console.log(item);
    try {
      if (cartItems.find((cartObj) => Number(cartObj.id) === Number(item.id))) {
        axios.delete(
          `https://64774eb29233e82dd53b6aad.mockapi.io/cart/${item.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) != Number(item.id))
        );
      } else {
        axios.post("https://64774eb29233e82dd53b6aad.mockapi.io/cart", item);
        setCartItems((prev) => [...prev, item]);
      }
    } catch (error) {
      console.log("Не удалось добавить карту ");
    }
  };
  const onRemoveItemCart = (id) => {
    try {
      axios.delete(`https://64774eb29233e82dd53b6aad.mockapi.io/cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) != Number(id))
      );
    } catch (error) {
      console.log("Ошибка удаления!");
    }
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  // onAddToFavorite  При отправке кросовок в избранное происходит добавление в local Storage, так как ограничение бесплатного сервера.
  const onAddToFavorite = (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        localStorage.removeItem(obj.id);
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) != Number(obj.id))
        );
      } else {
        localStorage.setItem(obj.id, JSON.stringify(obj));
        setFavorites((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
    }
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
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/favorites"
          exact
          element={
            <Favorites
              item={items}
              setFavorites={setFavorites}
              items={favorites}
              onAddToFavorite={onAddToFavorite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
