import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card/Card";
import stylesCard from "../components/Card/Card.module.scss";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://26610614212e314e.mokky.ru/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов");
        console.error(error);
      }
    })();
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
