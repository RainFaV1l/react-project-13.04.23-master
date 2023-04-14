import Buttons from "../Buttons/Buttons";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

const Header = ({setActive}) => {
  return (
    <header className="header">
      <Logo />
      <Nav />
      <Buttons setActive={setActive} />
    </header>
  );
};

export default Header;
