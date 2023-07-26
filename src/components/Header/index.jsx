import { ModalContext } from "../../context/contextModais";
import { HeaderStyle } from "./style";
import { useContext } from "react";

export const Header = () => {
  const { setModalCreateList } = useContext(ModalContext);
  return (
    <HeaderStyle>
      <div className="logo">
        <span>Logo</span>
      </div>
      <nav className="navbar">
        <span onClick={() => setModalCreateList(true)}>Criar lista</span>
      </nav>
    </HeaderStyle>
  );
};
