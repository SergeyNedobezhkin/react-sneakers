import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card/Card";
import stylesCard from "../components/Card/Card.module.scss";
import { useContext } from "react";
import AppContext from "../context";

function Orders() {
  const { onAddToCart, onAddToFavorite } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      setIsLoading(true);
      let orderStr = sessionStorage.getItem("key");
      let orderArr = JSON.parse(orderStr);
      console.log(orderArr);
      setOrders(orderArr.map((obj) => obj));
      setIsLoading(false);
    } catch (error) {
      alert("Список заказов пуст!");
      setIsLoading(false);
      console.error(error);
    }
  }, []);

  return (
    <div className="contant">
      <div className="searchWrapper">
        {" "}
        <h1>Мои заказы</h1>
      </div>
      <div className={stylesCard.sneakersWrapper}>
        {" "}
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card
            key={index}
            loading={isLoading}
            //передал все ключи объекта через {...item};
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
