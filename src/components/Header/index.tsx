import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import title from "../../assets/titleHeader.svg";

export function Header() {
  return (
    <HeaderContainer>
      <div className="logo">
        <img className="logoImage" src={logo} alt="" />
        <img className="title" src={title} alt="" />
      </div>
    </HeaderContainer>
  );
}
