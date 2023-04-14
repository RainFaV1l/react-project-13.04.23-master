const TitleSub = ({ title, subtitle }) => {
  return (
    <div className="title-sub">
      <h1 className="title-sub__title">{title}</h1>
      <p className="title-sub__subtitle">
        {subtitle}
      </p>
    </div>
  );
};

export default TitleSub;
