import { NavLink } from "react-router-dom";
import TitleSub from "../components/TitleSub/TitleSub";

const IndexPage = () => {
  return (
    <div className="index">
      <TitleSub
        title="Главная страница"
        subtitle="Здесь представлена краткая информация о компании"
      />
      <div className="about">
        <div className="about__img">
          <img
            src="https://madwins.ru/wp-content/uploads/2021/09/blog-2.jpg10-min.png"
            alt="Картинка"
          />
        </div>
        <div className="about__content">
          <h1 className="about__title">Компания WeAreBuilding</h1>
          <div className="about__text">
            Компания WeAreBuilding - это новый виток развития в сфере оказания
            услуг. Мы заботимся о каждом клиенте и всячески стараемся вам
            угодить. Наша компания предоставляет различные услуги различным
            компаниям. Мы гарантируем качество оказываемых нами услуг, иначе мне
            компенсируем вам ваши убытки в пределах допустимости по договору.
          </div>
          <button>
            <NavLink to={"services"}>В каталог</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
