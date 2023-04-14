import { useEffect, useState } from "react";
import TitleSub from "../components/TitleSub/TitleSub";
import RequestItem from "../components/RequestItem/RequestItem";

const RequestsPage = () => {
  // Обьявляем состояние для хранения всех услуг
  const [services, setServices] = useState();
  // Функция для получения всех услуг через api
  const fetchServices = async () => {
    // Выполняем запрос
    const response = await fetch("https://api.avavion.ru/api/applications");
    const data = await response.json();
    // Сохраняем в состояние
    setServices(data.data);
  };
  // Вызываем функции через хук useEffect
  useEffect(() => {
    fetchServices();
  }, []);
  return (
    <div className="services">
      <div className="services__row">
        <TitleSub title="Каталог заявок" subtitle="Заявки данной компанией" />
      </div>
      <div className="list">
        {services?.map((item) => {
          return (
            <div key={item.id}>
              <RequestItem user={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RequestsPage;
