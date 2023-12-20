import { Navbar_Container, LabelTitle } from "./NavBar.style";
import Logo from "../../assets/Logo";

const NavBar = () => {
  return (
    <Navbar_Container>
      <Logo width="55px" height="55px"/>
      <LabelTitle> Soft-Food Demostración</LabelTitle>
    </Navbar_Container>
  );
};

export default NavBar;
