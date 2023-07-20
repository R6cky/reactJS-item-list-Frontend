import { ViewItemStyle } from "./style";

export const ViewItem = () => {
  return (
    <ViewItemStyle>
      <div className="container-modal">
        <div className="close-modal">
          <span className="close-modal-btn">X</span>
        </div>
        <div className="container-list-name">
          <h2>Nome da lista</h2>
        </div>
        <ul className="container-item-data">
          <li className="item-data">
            <h3>Nome: Nome do item</h3>
            <h4>Quantidade: 10 unidades</h4>
            <div className="item-edit-remove">
              <span>Editar item</span>
              <span>Remover Item</span>
            </div>
          </li>
          <li className="item-data">
            <h3>Nome: Nome do item</h3>
            <h4>Quantidade: 10 unidades</h4>
            <div className="item-edit-remove">
              <span>Editar item</span>
              <span>Remover Item</span>
            </div>
          </li>
          <li className="item-data">
            <h3>Nome: Nome do item</h3>
            <h4>Quantidade: 10 unidades</h4>
            <div className="item-edit-remove">
              <span>Editar item</span>
              <span>Remover Item</span>
            </div>
          </li>
        </ul>
      </div>
    </ViewItemStyle>
  );
};
