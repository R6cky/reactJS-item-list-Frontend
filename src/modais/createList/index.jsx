import { ListContext } from "../../context/contextList";
import { ModalContext } from "../../context/contextModais";
import { CreateListStyle } from "./style";
import { useContext } from "react";
import { useForm } from "react-hook-form";

export const CreateList = () => {
  const { setModalCreateList } = useContext(ModalContext);
  const { createList } = useContext(ListContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formData = async (data) => {
    const newData = {
      listName: data.listName,
      data: [
        {
          name: data.itemName,
          quantity: data.itemQuantity,
        },
      ],
    };

    return await createList(newData);
  };
  return (
    <CreateListStyle>
      <div className="container-modal">
        <form onSubmit={handleSubmit(formData)}>
          <div
            onClick={() => setModalCreateList(false)}
            className="close-modal"
          >
            X
          </div>
          <div className="container-list-name">
            <input
              name="listName"
              type="text"
              placeholder="Nome da lista"
              {...register("listName")}
            />
            <label htmlFor="listName">Nome da lista</label>
          </div>
          <div className="container-item-data">
            <input
              name="itemName"
              ype="text"
              placeholder="Nome do item"
              {...register("itemName")}
            />
            <label htmlFor="itemName">Nome do item</label>
            <input
              name="itemQuantity"
              type="text"
              placeholder="Quantidade item"
              {...register("itemQuantity")}
            />
            <label htmlFor="itemQuantity">Quantidade de itens</label>
            <hr />
            <input
              name="itemName"
              ype="text"
              placeholder="Nome do item"
              {...register("itemName")}
            />
            <label htmlFor="itemName">Nome do item</label>
            <input
              name="itemQuantity"
              type="text"
              placeholder="Quantidade item"
              {...register("itemQuantity")}
            />
            <label htmlFor="itemQuantity">Quantidade de itens</label>
            <hr />
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
