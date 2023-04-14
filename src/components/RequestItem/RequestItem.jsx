import { NavLink } from "react-router-dom";

const RequestItem = (user) => {
  console.log(user.user);
  return (
    <div className="item" key={user.user.id}>
      <div className="item__container">
        <div className="item__info">
          <h3 className="item__name">Полное имя: {user.user.full_name}</h3>
          <p className="item__name">Имя: {user.user.first_name}</p>
          <p className="item__name">Фамилия: {user.user.last_name}</p>
          <div className="item__more">
            <NavLink to={`/applications/${user.user.id}`}>Подробнее</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestItem;
