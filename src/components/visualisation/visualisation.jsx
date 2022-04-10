// import { useStylesVisualisation } from "./visualisation.styles";
import "./visual.css";
import visualisationMap from "./visualisation.json";

const Visualisation = ({ param }) => {
  // styles
  // const classes = useStylesVisualisation();

  return (
    <div className="visualcode1">
      <iframe
        title={param}
        className="visualcode2"
        src={visualisationMap[param]}
      />
    </div>
  );
};

export default Visualisation;
