import { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [modalCreateList, setModalCreateList] = useState(false);
  const [modalEditItem, setModalEditItem] = useState(false);
  const [modalViewItem, setModalViewItem] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        modalCreateList,
        modalEditItem,
        modalViewItem,
        setModalCreateList,
        setModalEditItem,
        setModalViewItem,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
