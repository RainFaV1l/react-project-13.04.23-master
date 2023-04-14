const Buttons = ({setActive}) => {
  return (
    <div className="buttons">
      <button className="button" onClick={() => setActive(true)}>
        Корзина
      </button>
    </div>
  );
};

export default Buttons;
