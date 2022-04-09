import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contests from "./components/Contests/Contests";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contests" element={<Contests />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
