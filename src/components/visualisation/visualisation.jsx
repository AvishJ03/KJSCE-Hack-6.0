// import { useStylesVisualisation } from "./visualisation.styles";
import Footer from "../../MyComponents/Footer";
import Header from "../../MyComponents/Header";
import "./visual.css";
import visualisationMap from "./visualisation.json";

const Visualisation = ({ param }) => {
  // styles
  // const classes = useStylesVisualisation();

  return (
    <div className="visualcode1">
      <Header />
      <iframe
        title={param}
        className="visualcode2"
        src={visualisationMap[param]}
      />
      <Footer />
    </div>
  );
};

export default Visualisation;
