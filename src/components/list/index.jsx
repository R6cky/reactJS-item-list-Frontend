import { useContext } from "react";
import { Item } from "./item";
import { ListStyle } from "./style";
import { ListContext } from "../../context/contextList";
export const List = () => {
  const { list } = useContext(ListContext);
  return (
    <ListStyle>
      {list.length > 0 ? (
        list.map((elem) => {
          return <Item item={elem} key={elem.id} />;
        })
      ) : (
        <>
          <div>vazio</div>
        </>
      )}
    </ListStyle>
  );
};
