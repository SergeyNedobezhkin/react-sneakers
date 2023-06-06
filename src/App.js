import React from "react";
import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import AppContext from "./context";

import Home from "./pages/Home";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
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
    } catch (error) {
      console.error("Ошибка при запросе данных!");
      alert("Ошибка при запросе данных!");
    }
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (cartObj) => Number(cartObj.perentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.perentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://64774eb29233e82dd53b6aad.mockapi.io/cart/${findItem.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://64774eb29233e82dd53b6aad.mockapi.io/cart",
          obj
        );
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      console.error("Не удалось добавить в корзину!");
      alert("Не удалось добавить в корзину!");
    }
  };
  const onRemoveItemCart = async (id) => {
    try {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
      await axios.delete(
        `https://64774eb29233e82dd53b6aad.mockapi.io/cart/${id}`
      );
    } catch (error) {
      console.error("Ошибка удаления из корзины!");
      alert("Ошибка удаления из корзины!");
    }
  };

  // onAddToFavorite  При отправке кросовок в избранное происходит добавление в local Storage, так как ограничение бесплатного сервера mockapi.
  const onAddToFavorite = (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        localStorage.removeItem(`${obj.id}`);
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        localStorage.setItem(obj.id, JSON.stringify(obj));
        setFavorites((prev) => [...prev, obj]);
      }
    } catch (error) {
      console.error("Не удалось добавить в избранное");
      alert("Не удалось добавить в избранное");
    }
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.find((cartObj) => Number(cartObj.perentId) === Number(id));
  };
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        setCartOpened,
        cartOpened,
        setCartItems,
        onAddToCart,
      }}
    >
      {" "}
      <div className="wrapper">
        {cartOpened ? (
          <Drawer items={cartItems} onRemove={onRemoveItemCart} />
        ) : null}
        {/* cart - это корзина */}
        <Header
          onClickCart={() => {
            setCartOpened(true);
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
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/favorites"
            exact
            element={
              <Favorites
                setFavorites={setFavorites}
                onAddToFavorite={onAddToFavorite}
              />
            }
          />
          <Route path="/orders" exact element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
