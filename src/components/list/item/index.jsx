import { useContext } from "react";
import { ItemStyle } from "./style";
import { ListContext } from "../../../context/contextList";

export const Item = ({ item }) => {
  const { viewUniqueList, deleteLists } = useContext(ListContext);

  return (
    <ItemStyle>
      <div className="list-name">
        <span>Nome da lista:{item.listName}</span>
      </div>

      <div className="view-remove">
        <span onClick={() => viewUniqueList(item.id)}>Ver Itens da lista</span>
        <span onClick={() => deleteLists(item.id)}>Remover</span>
      </div>
    </ItemStyle>
  );
};
