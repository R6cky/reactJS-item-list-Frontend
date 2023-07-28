import { createContext, useContext, useState } from "react";
import { api } from "../api";
import { ModalContext } from "./contextModais";

export const ListContext = createContext({});

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [viewList, setViewList] = useState([]);
  const { setModalViewItem, setModalEditItem, setModalCreateList } =
    useContext(ModalContext);

  const createList = async (data) => {
    try {
      const responseJson = await api.post("/purchaseList", data);
      setList([...list, responseJson.data]);
      setModalCreateList(false);
    } catch (err) {
      console.log(err);
    }
  };

  const viewUniqueList = async (id) => {
    try {
      const responseJson = await api.get(`/purchaseList/${id}`);
      setViewList(responseJson.data);
      setModalViewItem(true);
    } catch (error) {
      console.log(error);
    }
  };

  const editItem = async (idList, dataRequest) => {
    const itemId = localStorage.getItem("itemId");
    try {
      await api.patch(`/purchaseList/${idList}/${itemId}`, dataRequest);
      try {
        const responseJson = await api.get(`/purchaseList`);
        setViewList(responseJson.data);
        setModalEditItem(false);
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editItemModal = (id) => {
    setModalEditItem(true);
    localStorage.setItem("itemId", id);
  };

  const deleteLists = async (listId) => {
    try {
      await api.delete(`/purchaseList/${listId}`);
      try {
        const responseJson = await api.get(`/purchaseList`);
        setList(responseJson.data);
      } catch (err) {
        console.log(err);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItems = async (listId, itemId) => {
    try {
      const responseJson = await api.delete(
        `/purchaseList/${listId}/${itemId}`
      );
      try {
        const responseJson = await api.get("/purchaseList");
        setViewList(responseJson.data);
      } catch (err) {
        console.log(err);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ListContext.Provider
      value={{
        createList,
        viewList,
        viewUniqueList,
        editItem,
        editItemModal,
        deleteLists,
        deleteItems,
        list,
        setList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
