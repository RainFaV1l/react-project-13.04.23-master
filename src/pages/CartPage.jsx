import formatPrice from "../utils/formatPrice";

const CartPage = ({ activeModal, basket, setBasket }) => {
  // Высчитываем общую стоимость
  const sumMoney = () => {
    const totalChild = basket.reduce((sum, item) => sum + item.price, 0);
    return formatPrice(totalChild);
  };

  // По условию выбираем только те id, которые не удалены
  const handleDeleteBasket = (id) => {
    setBasket(basket.filter((item) => item.id !== id));
  };

  return (
    <div
      className={activeModal ? "cart" + " " + "active" : "cart"}
      onClick={() => setActive(false)}
    >
      <div
        className={
          activeModal ? "cart__container" + " " + "active" : "cart__container"
        }
        // Останавливаем распространение события
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-title-item">
          <h1>Корзина</h1>
          <div className="cart-items">
            {basket.map((item) => {
              return (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item__img">
                    <img src={item.image_url} alt="Картинка" />
                  </div>
                  <div className="cart-item__info">
                    <p className="name">{item.name}</p>
                    <p className="price">Цена: {formatPrice(item.price)} ₽</p>
                    <button onClick={() => handleDeleteBasket(item.id)}>
                      Удалить
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="cart-item__column">
          <p className="cart-item__price">
            Итого: <span>{sumMoney()} ₽</span>
          </p>
          <button className="cart-item__button">Купить</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
