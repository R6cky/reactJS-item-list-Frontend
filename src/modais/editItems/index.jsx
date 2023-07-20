import { EditItemStyle } from "./style";

export const EditItem = () => {
  return (
    <EditItemStyle>
      <div className="container-modal">
        <form action="">
          <div className="close-modal">X</div>

          <div className="container-item-data">
            <input type="text" placeholder="Nome do item" />
            <input type="text" placeholder="Quantidade item" />
          </div>
          <div className="container-buttons">
            <input type="submit" placeholder="Enviar" value={"Editar item"} />
            <input type="reset" value={"Redefinir"} />
          </div>
        </form>
      </div>
    </EditItemStyle>
  );
};
