import { Route, Routes } from "react-router-dom";
import Listagem from "./pages/Listagem";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/lista" element={<Listagem />} />
      </Routes>
  );
}

export default App;
