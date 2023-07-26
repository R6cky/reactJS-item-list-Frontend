import { ListContext } from "../../context/contextList";
import { ModalContext } from "../../context/contextModais";
import { ViewItemStyle } from "./style";
import { useContext } from "react";

export const ViewItem = () => {
  const { setModalViewItem } = useContext(ModalContext);
  const { viewList, editItemModal, deleteItems } = useContext(ListContext);
  return (
    <ViewItemStyle>
      <div className="container-modal">
        <div className="close-modal">
          <span
            onClick={() => setModalViewItem(false)}
            className="close-modal-btn"
          >
            X
          </span>
        </div>
        <div className="container-list-name">
          <h2>{viewList[0].listName}</h2>
        </div>
        <ul className="container-item-data">
          {viewList[0].data.map((elem) => {
            return (
              <li key={elem.id} className="item-data">
                <h3>Nome: {elem.name}</h3>
                <h4>Quantidade: {elem.quantity}</h4>
                <div className="item-edit-remove">
                  <span onClick={() => editItemModal(elem.id)}>
                    Editar item
                  </span>
                  <span onClick={() => deleteItems(viewList[0].id, elem.id)}>
                    Remover Item
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </ViewItemStyle>
  );
};
