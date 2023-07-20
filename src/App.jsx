import { useEffect, useState } from "react";
import { Main } from "./components/main";
import { api } from "./api";
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
