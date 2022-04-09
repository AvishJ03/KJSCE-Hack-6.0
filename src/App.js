import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contests from "./components/Contests/Contests";
import Login from "./components/Login/Login";
import Quiz from './components/quiz/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contests" element={<Contests />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
