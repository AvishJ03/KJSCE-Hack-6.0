import { Route, Routes } from "react-router-dom";
import Contests from "./components/Contests/Contests";
import Login from "./components/Login/Login";
import Quiz from "./components/Quiz/Quiz";

function App() {
  return (
    <Routes>
      <Route path="/contests" element={<Contests />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/quiz" element={<Quiz />}></Route>
    </Routes>
  );
}

export default App;
