import { useParams } from "react-router";
import { useEffect, useState } from "react";

const ApplicationMorePage = ({ setBasket, basket }) => {
  // Состояние одного объекта
  const [user, setUser] = useState([]);
  const [product, setProduct] = useState([]);

  // Получаем id роута
  const params = useParams();
  const id = params.id;

  // Получаем информацию об одном объекте из api по id
  const fetchServices = async () => {
    const response = await fetch(
      `https://api.avavion.ru/api/applications/${id}`
    );
    const data = await response.json();
    setUser(data.data);
    setProduct(data.data.product);
  };

  // Вызываем функцию через хук
  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="more">
      <div className="more__info">
        <h3 className="item__name">Полное имя: {user.full_name}</h3>
        <p className="item__name">Имя: {user.first_name}</p>
        <p className="item__name">Фамилия: {user.last_name}</p>
        <p className="item__name">Сообщение: {user.message}</p>
        <p className="item__name">Название продукта: {product.name}</p>
      </div>
    </div>
  );
};

export default ApplicationMorePage;
