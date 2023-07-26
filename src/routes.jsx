import { Routes, Route } from "react-router-dom";
import { CreateList } from "./modais/createList";
import { ViewItem } from "./modais/viewItem";
import { EditItem } from "./modais/editItems";
import { Main } from "./components/main";

export const RoutesMain = ({ list, loading }) => {
  return (
    <Routes>
      <Route path="/" element={<Main loading={loading} list={list} />} />
      <Route path="/createList" element={<CreateList />} />
      <Route path="/viewItem" element={<ViewItem />} />
      <Route path="/editItem" element={<EditItem />} />
    </Routes>
  );
};
