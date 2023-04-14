import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="menu">
        <li className="menu__link">
          <NavLink to={"/"}>Главная</NavLink>
        </li>
        <li className="menu__link">
          <NavLink to={"/products"}>Продукты</NavLink>
        </li>
        <li className="menu__link">
          <NavLink to={"/applications"}>Заявки</NavLink>
        </li>
        <li className="menu__link">
          <NavLink to={"/applications/create"}>Создать</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
