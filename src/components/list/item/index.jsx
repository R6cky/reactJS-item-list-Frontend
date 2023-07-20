import { ItemStyle } from "./style";
export const Item = ({ item }) => {
  return (
    <ItemStyle>
      <div className="list-name">
        <span>Nome da lista:{item.listName}</span>
      </div>

      <div className="view-itens">
        <span>Ver Itens da lista</span>
      </div>
    </ItemStyle>
  );
};
