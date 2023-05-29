function App() {
  return (
    <div className="wrapper">
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
        <h1>Все кроссовки</h1>
        <div className="sneakersWrapper">
          <div className="card">
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
                <b>12 999руб.</b>
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
                <b>12 999руб.</b>
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
                <b>12 999руб.</b>
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
                <b>12 999руб.</b>
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
