import { NavLink } from "react-router-dom";
import formatDiscount from "../../utils/formatDiscount";
import formatPrice from "../../utils/formatPrice";

const Item = (service) => {
  return (
    <div className="item" key={service.service.id}>
      <div className="item__container">
        <div className="item__img">
          <img src={service.service.image_url} alt="Картинка" />
        </div>
        <div className="item__info">
          <h3 className="item__name">{service.service.name}</h3>
          <div className="item__price">
            <p className="discount-price">
              Цена: {formatPrice(service.service.price)} ₽
            </p>
            {service.service.dicsount_percent !== 0 ? (
              <p className="price">
                Цена со скидкой:{" "}
                {formatDiscount(
                  service.service.price,
                  service.service.discount
                )}{" "}
                ₽
              </p>
            ) : (
              <p>⠀</p>
            )}
          </div>
          <div className="item__more">
            <NavLink to={`/products/${service.service.id}`}>Подробнее</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
