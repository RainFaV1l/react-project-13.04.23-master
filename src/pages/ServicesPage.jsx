import { useState, useEffect } from "react";
import Item from "../components/Item/Item";
import TitleSub from "../components/TitleSub/TitleSub";
import { NavLink } from "react-router-dom";

const ServicesPage = () => {
  // Обьявляем состояние для хранения всех продуктов
  const [services, setServices] = useState();
  // Обьявляем состояние для поиска по всем продуктам
  const [searchData, setSearch] = useState("");
  // Обьявляем состояние для хранения всех категорий
  const [categories, setCategories] = useState();
  // Обьявляем состояние для хранения всех категории
  const [category, setCategory] = useState();
  // Обьявляем состояние для сортировки
  // const [sortDesk, setSortDesk] = useState();

  // Функция для получения всех продуктов через api
  const fetchServices = async () => {
    // Выполняем запрос
    const response = await fetch("https://api.avavion.ru/api/products");
    const data = await response.json();
    // Сохраняем в состояние
    setServices(data.data);
  };

  // Поиск по категориям
  const fetchCategories = async () => {
    const response = await fetch(`https://api.avavion.ru/api/tags`);
    const data = await response.json();
    setCategories(data.data);
  };

  // Вызываем функции через хук useEffect
  useEffect(() => {
    fetchServices();
    fetchCategories();
  }, []);

  // Поиск по категориям
  const categoryData = services?.filter((item) => item.tag.includes(category));

  // Поиск по возрастанию и убыванию
  // if (sortDesk) {
  //   categoryData = services?.filter((item) => {
  //     if (sortDesk === 1) {
  //       return services?.sort((a, b) => (a.price > b.price ? 1 : -1));
  //     }
  //   });
  // }

  // Поиск по услугам
  const searchServicesArr = categoryData?.filter((item) =>
    item.name.includes(searchData)
  );

  // Установка состояния для поиска
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="services">
      <div className="services__row">
        <TitleSub
          title="Каталог услуг"
          subtitle="Услуги, предоставляемые данной компанией"
        />
        <input
          placeholder="Поиск по наименованию"
          className="services__search"
          type="search"
          onChange={(e) => handleSearch(e)}
          value={searchData}
        />
      </div>
      <div className="filter__buttons">
        <select
          className="select"
          // onChange={(e) => setSortDesk(e.target.value)}
        >
          <option value="1">От большего к меньшему</option>
          <option value="2">От меньшего к большому</option>
        </select>
      </div>
      <select className="select" onChange={(e) => setCategory(e.target.value)}>
        {categories?.map((category) => {
          return (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          );
        })}
      </select>
      <div className="list">
        {searchServicesArr?.map((item) => {
          return (
            <div key={item.id}>
              <Item service={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
