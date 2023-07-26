import { useEffect, useState } from "react";
import { api } from "./api";
import { RoutesMain } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { CreateList } from "./modais/createList";
import { useContext } from "react";
import { ModalContext } from "./context/contextModais";
import { EditItem } from "./modais/editItems";
import { ViewItem } from "./modais/viewItem";

function App() {
  const [list, setlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const { modalCreateList, modalEditItem, modalViewItem } =
    useContext(ModalContext);

  useEffect(() => {
    const getList = async () => {
      try {
        const response = (await api.get("/purchaseList")).data;
        setlist(...list, response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getList();
  }, []);

  return (
    <>
      {modalCreateList ? (
        <CreateList />
      ) : modalEditItem ? (
        <>
          <ViewItem />
          <EditItem />
        </>
      ) : modalViewItem ? (
        <ViewItem />
      ) : (
        false
      )}
      <RoutesMain loading={loading} list={list} />
    </>
  );
}

export default App;
