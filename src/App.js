import "./App.css";
import Home from "./MyComponents/Home";
import Profile from "./MyComponents/Profile";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Courses from "./pages/courses/Courses";
import Contests from "./components/Contests/Contests";
import QuizPage from "./components/quiz/QuizPage";
import Quiz from "./components/quiz/Quiz";
import Theory from "./components/theory/theory";
import Landing from "./MyComponents/Landing";
import { useAuth } from "./contexts/AuthContext";
import Visualisation from "./components/visualisation/visualisation.jsx";
import { BrowserRouter, Route, NavLink, Link, Routes } from "react-router-dom";
import { lazy } from "react";
import Interview from "./components/Interview/Interview";
import Chatbot from "./components/Chatbot/Chatbot";

const PageNotFound = () => <div>404</div>;
const ExperimentList = lazy(() =>
  import("./pages/experiment-list/experiment-list.jsx")
);
const IndividualExperiment = lazy(() =>
  import("./pages/individual-experiment/individual-experiment.jsx")
);

function App() {
  const { currentUser } = useAuth();
  return (
    <Routes>
      {currentUser ? (
        <Route path="/" element={<Home />} exact={true} />
      ) : (
        <Route path="/" element={<Landing />} exact={true} />
      )}

      <Route path="/home" element={<Home />} exact={true} />
      <Route path="/profile" element={<Profile />} exact={true} />
      <Route path="/quizlets" element={<QuizPage />} exact={true} />
      <Route path="/contests" element={<Contests />} />
      <Route path="/quiz" element={<Quiz />} exact={true} />
      <Route path="/courses" element={<Courses />} exact={true} />
      <Route path="/login" element={<Login />} exact={true} />
      <Route path="/signup" element={<Signup />} exact={true} />
      <Route exact path="/list_of_experiments" element={<ExperimentList />} />
      <Route exact path="/experiments" element={<ExperimentList />} />
      <Route
        exact
        path="/experiments/bblsort/theory"
        element={<Theory param="bblsort" />}
      />
      <Route
        exact
        path="/experiments/bblsort/visualisation"
        element={<Visualisation param="bblsort" />}
      />
        {/* <Route path='/contests' element={<Signup />} exact={true} /> */}
        <Route path='/interviews' element={<Interview />} exact={true} />
        <Route path='/temp' element={<Chatbot />} exact={true} />
        {/* <Route path='/courses' element={<Chatbot />} exact={true} />  */}
        {/* <Route path='/contests' element={<Contests />} exact={true} /> */}
    </Routes>
  );
}

export default App;
