import { Tab, Tabs } from "@mui/material";
import { lazy } from "react";
import { Suspense, useEffect, useState } from "react";
import { Link, useLocation, Routes, Route, useParams } from "react-router-dom";
import "./individual.css";
// import Loader from "../../components/loader/loader";
// import { useStylesIndividualExperiment } from "./individual-experiment.styles";

// Dynamic Imports

const Visualisation = lazy(() =>
  import("../../components/visualisation/visualisation.jsx")
);
const Theory = lazy(() => import("../../components/theory/theory.jsx"));

const IndividualExperiment = () => {
  // router
  const { id } = useParams();
  const u = "sll";

  // styles
  // const classes = useStylesIndividualExperiment();

  // local states
  const [windowSize, setWindowSize] = useState();
  const displayWindowSize = () => {
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    // Display result inside a div element
    setWindowSize(w);
  };

  useEffect(() => {
    displayWindowSize();
    // console.log(location);
    console.log(id);
    window.addEventListener("resize", (e) => {
      displayWindowSize();
    });
    return () => {
      window.removeEventListener("resize", (e) => console.log(e));
    };
  }, []);

  // static data
  const tabs = [
    {
      name: "Theory",
      pathname: `/experiments/${u}/theory`,
    },
    {
      name: "Visualisation",
      pathname: `/experiments/${u}/visualisation`,
    },
  ];

  return (
    <div className="individual1">
      <Tabs
        className="individual3"
        variant={windowSize > 880 ? "fullWidth" : "scrollable"}
        value={`/experiments/${u}`}
        classes={{
          indicator: "individual4",
        }}
        TabIndicatorProps={{ children: <span /> }}
        textColor="secondary"
      >
        {tabs.map((tab) => (
          <Tab
            label={tab.name}
            value={tab.pathname}
            key={tab.name}
            component={Link}
            to={tab.pathname}
            classes={{
              wrapper: "individual5",
              selected: "individual6",
            }}
          />
        ))}
      </Tabs>

      <div className="individual2">
        {
          <Suspense>
            <Routes>
              <Route
                exact
                path={`/experiments/${u}`}
                element={<div>Hello</div>}
              />
              <Route
                exact
                path={`/experiments/${u}/theory`}
                element={<Theory param={u} />}
              />
              <Route
                exact
                path={`/experiments/${u}/visualisation`}
                element={<Visualisation param={u} />}
              />
            </Routes>
          </Suspense>
        }
      </div>
    </div>
  );
};

export default IndividualExperiment;
