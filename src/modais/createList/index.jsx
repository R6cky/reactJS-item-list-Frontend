import { CreateListStyle } from "./style";

export const CreateList = () => {
  return (
    <CreateListStyle>
      <div className="container-modal">
        <form action="">
          <div className="close-modal">X</div>
          <div className="container-list-name">
            <input type="text" placeholder="Nome da lista" />
          </div>
          <div className="container-item-data">
            <input type="text" placeholder="Nome do item" />
            <input type="text" placeholder="Quantidade item" />
            <hr />
            <input type="text" placeholder="Nome do item" />
            <input type="text" placeholder="Quantidade item" />
            <hr />
            <input type="text" placeholder="Nome do item" />
            <input type="text" placeholder="Quantidade item" />
          </div>
          <div className="container-buttons">
            <input type="submit" placeholder="Enviar" value={"Criar lista"} />
            <input type="reset" value={"Redefinir"} />
          </div>
        </form>
      </div>
    </CreateListStyle>
  );
};
