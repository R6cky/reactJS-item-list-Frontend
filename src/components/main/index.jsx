import { List } from "../list";
import { MainStyle } from "./style";
import { Header } from "../Header";
export const Main = ({ loading }) => {
  return (
    <MainStyle>
      <Header />
      <main>{loading ? <span>Loading</span> : <List />}</main>
    </MainStyle>
  );
};
