import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const arr = [
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
      imageURL: "/img/sneakers/sneakers_1.jpg",
    },
    {
      name: "Мужские Кроссовки Nike Air Max 270",
      price: 12999,
      imageURL: "/img/sneakers/sneakers_2.jpg",
    },
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 8499,
      imageURL: "/img/sneakers/sneakers_3.jpg",
    },
    {
      name: "Мужские Кроссовки Under Armour Curry 8",
      price: 15199,
      imageURL: "/img/sneakers/sneakers_5.jpg",
    },
    {
      name: "Мужские Кроссовки Nike Kyrie 7",
      price: 11299,
      imageURL: "/img/sneakers/sneakers_6.jpg",
    },
    {
      name: "Мужские Кроссовки Jordan Air Jordan 11",
      price: 10799,
      imageURL: "/img/sneakers/sneakers_7.jpg",
    },
    {
      name: "Мужские Кроссовки Nike LeBron XVIII",
      price: 16499,
      imageURL: "/img/sneakers/sneakers_8.jpg",
    },
    {
      name: "Мужские Кроссовки Nike Lebron XVIII Low",
      price: 13999,
      imageURL: "/img/sneakers/sneakers_9.jpg",
    },
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
      imageURL: "/img/sneakers/sneakers_10.jpg",
    },
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 9999,
      imageURL: "/img/sneakers/sneakers_2.jpg",
    },
    {
      name: "Кроссовки Puma X Aka Boku Future Rider",
      price: 12999,
      imageURL: "/img/sneakers/sneakers_11.jpg",
    },
    {
      name: "Мужские Кроссовки Nike Kyrie Flytrap IV",
      price: 13299,
      imageURL: "/img/sneakers/sneakers_12.jpg",
    },
  ];
  return (
    <div className="wrapper">
      <div style={{ display: "none" }} className="overlay">
        <Drawer />
      </div>
      <Header />
      <div className="contant">
        <div className="searchWrapper">
          {" "}
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakersWrapper">
          {arr.map((item) => (
            <Card
              name={item.name}
              price={item.price}
              imageURL={item.imageURL}
              onClick={() => console.log(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
