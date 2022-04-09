// import { Suspense, lazy } from "react";
// import { Routes, Route, BrowserRouter } from "react-router-dom";

// // lazy import
// const Homepage = lazy(() => import("./pages/homepage/homepage"));
// const Objective = lazy(() => import("./pages/objective/objective"));
// const ExperimentList = lazy(() =>
//   import("./pages/experiment-list/experiment-list.jsx")
// );
// const IndividualExperiment = lazy(() =>
//   import("./pages/individual-experiment/individual-experiment.jsx")
// );

// function App() {
//   return (

//       <Routes>
//         <Route exact path="/" component={Homepage} />
//         <Route exact path="/introduction" component={Homepage} />
//         <Route exact path="/objective" component={Objective} />
//         <Route exact path="/list_of_experiments" component={ExperimentList} />
//         <Route exact path="/experiments" component={ExperimentList} />
//         <Route path="/experiments/:id" component={IndividualExperiment} />
//         {/* <Route exact path="/feedback" component={Feedback} /> */}
//       </Routes>
//   );
// }

// export default App;

import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
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
          {/* <Route exact path="/" element={<Homepage />} /> */}
          {/* <Route exact path="/introduction" element={Homepage} /> */}
          {/* <Route exact path="/objective" element={<Objective/>/Objective>} /> */}
          <Route
            exact
            path="/list_of_experiments"
            element={<ExperimentList />}
          />
          <Route exact path="/experiments" element={<ExperimentList />} />
          {/* <Route path="/experiments/:id" element={<IndividualExperiment />} /> */}
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
          {/* <Route exact path="/feedback" element={Feedback} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
