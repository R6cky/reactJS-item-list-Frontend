import { Item } from "./item";
import { ListStyle } from "./style";
export const List = ({ list }) => {
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
