import { HeaderStyle } from "./style";

export const Header = () => {
  return (
    <HeaderStyle>
      <div className="logo">
        <span>Logo</span>
      </div>
      <nav className="navbar">
        <span>Criar lista</span>
      </nav>
    </HeaderStyle>
  );
};
