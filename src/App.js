import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListActor from "./pages/actor/ListActor";
import AddActor from "./pages/actor/AddActor";
import EditActor from "./pages/actor/EditActor";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListActor />} />
          <Route path="add" element={<AddActor />} />
          <Route path="edit/:id" element={<EditActor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
