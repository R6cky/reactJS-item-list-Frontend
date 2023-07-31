import { ListContext } from "../../context/contextList";
import { ModalContext } from "../../context/contextModais";
import { EditItemStyle } from "./style";
import { useContext } from "react";
import { useForm } from "react-hook-form";
export const EditItem = () => {
  const { setModalEditItem } = useContext(ModalContext);
  const { editItem, viewList } = useContext(ListContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formData = async (data) => {
    const newData = {
      name: data.itemName,
      quantity: data.itemQuantity,
    };

    await editItem(viewList[0].id, newData);
  };

  return (
    <EditItemStyle>
      <div className="container-modal">
        <form action="" onSubmit={handleSubmit(formData)}>
          <div className="close-modal">
            <span onClick={() => setModalEditItem(false)}>X</span>
          </div>

          <div className="container-item-data">
            <input
              name="itemname"
              type="text"
              placeholder="Nome do item"
              {...register("itemName")}
            />
            <input
              name="itemQuantity"
              type="text"
              placeholder="Quantidade item"
              {...register("itemQuantity")}
            />
          </div>
          <div className="container-buttons">
            <input
              type="submit"
              placeholder="Enviar"
              value={"Editar item"}
              className="btn-edit"
            />
            <input type="reset" value={"Redefinir"} className="btn-reset" />
          </div>
        </form>
      </div>
    </EditItemStyle>
  );
};
