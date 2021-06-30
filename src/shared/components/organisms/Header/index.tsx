/* eslint-disable @next/next/no-img-element */
import logo_icon from "../../../../shared/assets/icons/logo_icon.svg";

import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <div className="content">
        <img src={logo_icon} alt="logo_icon" />

        <input type="text" placeholder="Pesquisar" />

        <span>Leonardo Messias</span>
      </div>
    </Container>
  );
};

export default Header;
