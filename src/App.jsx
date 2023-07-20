import { useEffect, useState } from "react";
import { api } from "./api";
import { RoutesMain } from "./routes";
import { Main } from "./components/main";
function App() {
  const [list, setlist] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const response = (await api.get("/purchaseList")).data;
        setlist(...list, response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, []);

  return (
    <div>
      <Main list={list} />
    </div>
  );
}

export default App;
