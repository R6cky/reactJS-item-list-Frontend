import { List } from "../list";
import { MainStyle } from "./style";
export const Main = ({ list }) => {
  return (
    <MainStyle>
      <header>Header</header>
      <main>
        <List list={list} />
      </main>
    </MainStyle>
  );
};
