import { useParams } from "react-router";
import formatPrice from "../utils/formatPrice";
import { useEffect, useState } from "react";

const MorePage = ({ setBasket, basket }) => {
  // Состояние одного объекта
  const [service, setService] = useState([]);

  // Получаем id роута
  const params = useParams();
  const id = params.id;

  // Получаем информацию об одном объекте из api по id
  const fetchServices = async () => {
    const response = await fetch(`https://api.avavion.ru/api/products/${id}`);
    const data = await response.json();
    console.log(data);

    setService(data.data);
  };

  // Вызываем функцию через хук
  useEffect(() => {
    fetchServices();
  }, []);

  // Функция добавления услуги в корзину
  const handleSetBasket = ({ id, name, image_path, short_text, price }) => {
    setBasket((prev) => [
      ...prev,
      {
        id: id,
        name: name,
        image_path: image_path,
        short_text: short_text,
        price:
          service.discount === 0
            ? price
            : price * ((100 - service.discount) / 100),
      },
    ]);
  };

  // Проверяем, добавлена ли услуга в корзину
  const idBasket = basket.find((item) => item.id == id);

  return (
    <div className="more">
      <div className="more__img">
        <img src={service.image_path} alt="Картинка" />
      </div>
      <div className="more__info">
        <h1>{service.name}</h1>
        <p>{service.short_text}</p>
        <h2>
          Итоговаяя цена:{" "}
          {service.discount === 0
            ? formatPrice(service.price)
            : formatPrice(
                service.price * ((100 - service.discount) / 100)
              )}{" "}
          ₽
        </h2>
        {idBasket ? (
          <p>Товар в корзине</p>
        ) : (
          <button onClick={() => handleSetBasket({ ...service })}>
            Добавить в корзину
          </button>
        )}
      </div>
    </div>
  );
};

export default MorePage;
