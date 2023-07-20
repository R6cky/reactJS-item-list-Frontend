import { List } from "../list";
import { MainStyle } from "./style";
import { Header } from "../Header";
export const Main = ({ list }) => {
  return (
    <MainStyle>
      <Header />
      <main>
        <List list={list} />
      </main>
    </MainStyle>
  );
};
