import './App.css';
import Home from './MyComponents/Home';
import Profile from './MyComponents/Profile';
/* import Contests from './components/Contests/Contests'; */
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import QuizPage from './components/quiz/QuizPage';
import Quiz from './components/quiz/Quiz';
import { BrowserRouter, Route, NavLink, Link, Routes } from "react-router-dom";


const PageNotFound = () =>(
  <div>404</div>
)


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact={true} />
        <Route path='/home' element={<Home />} exact={true} />
        <Route path='/profile' element={<Profile />} exact={true} />
        <Route path='/quizlets' element={<QuizPage />} exact={true} />
        <Route path='/quiz' element={<Quiz />} exact={true} />
        <Route path='/login' element={<Login />} exact={true} />
        <Route path='/signup' element={<Signup />} exact={true} />
{/*         <Route path='/contests' element={<Signup />} exact={true} />
        <Route path='/interviews' element={<Signup />} exact={true} />
        <Route path='/courses' element={<Signup />} exact={true} /> */}
        {/* <Route path='/contests' element={<Contests />} exact={true} /> */}
      </Routes>
  </BrowserRouter>
  );
}

export default App;