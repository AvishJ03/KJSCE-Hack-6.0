
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Contests from "./components/Contests/Contests"
import Quiz from "./components/quiz/Quiz"
import Login from "./components/Login/Login"
import Theory from "./components/theory/theory";
import Visualisation from "./components/visualisation/visualisation.jsx";
// import Homepage from "./pages/homepage/homepage";

const Objective = lazy(() => import("./pages/objective/objective"));
const ExperimentList = lazy(() =>
  import("./pages/experiment-list/experiment-list.jsx")
);
const IndividualExperiment = lazy(() =>
  import("./pages/individual-experiment/individual-experiment.jsx")
);

function App() {
  return (
    <>
      <main>
        <Routes>
        <Route path="/contests" element={<Contests />}></Route>
        <Route Route path="/login" element={<Login />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
          <Route
            exact
            path="/list_of_experiments"
            element={<ExperimentList />}
          />
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
        </Routes>
      </main>
    </>
    )
  }


export default App;
