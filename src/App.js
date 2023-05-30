function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>
          <div className="cartItemContainer">
            <div className="cartItem">
              <img
                width={70}
                height={70}
                src="/img/sneakers/sneakers_2.jpg"
                alt="Sneakers"
              />
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p> <b>12 999 руб.</b>
              </div>
              <img
                className="btnRemove"
                src="/img/btn_remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem">
              <img
                width={70}
                height={70}
                src="/img/sneakers/sneakers_2.jpg"
                alt="Sneakers"
              />
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p> <b>12 999 руб.</b>
              </div>
              <img
                className="btnRemove"
                src="/img/btn_remove.svg"
                alt="Remove"
              />
            </div>{" "}
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="">Оформить заказ</button>
          </div>
        </div>
      </div>
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" />
          <div className="headerInfo">
            <h3 className="headerInfoTitle">React Sneakers</h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>

        <ul className="headerRight">
          <li>
            {" "}
            <img width={18} height={18} src="/img/cart.svg" />
            <span>1205руб.</span>
          </li>
          <li>
            {" "}
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
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
          <div className="card">
            <div className="favorite">
              {" "}
              <img src="/img/heart_off.svg" alt="heart_off" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers_1.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardPriceWrapper">
              <div className="cardPrice">
                {" "}
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="cardBtn">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers_2.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardPriceWrapper">
              <div className="cardPrice">
                {" "}
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="cardBtn">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers_3.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardPriceWrapper">
              <div className="cardPrice">
                {" "}
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="cardBtn">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers_4.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardPriceWrapper">
              <div className="cardPrice">
                {" "}
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="cardBtn">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
