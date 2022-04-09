// import { useStylesExperimentList } from "./experiment-list.styles";
import experiments from "./experiment-list.json";
import { Typography, List } from "@mui/material";
import NestedListItem from "../../components/nested-listitem/nested-listitem";
import "./experiment-list.css";

const ExperimentList = () => {
  // styles
  // const classes = useStylesExperimentList();

  return (
    <div className="list1">
      <Typography align="center" gutterBottom color="primary" variant="h3">
        List Of Experiments
      </Typography>

      {/* <Typography color="secondary" variant="h5">
        Ace your DSA skills in following topics:
      </Typography> */}

      <List className="list2">
        {experiments.map(({ name, subSection }, idx) => (
          <NestedListItem name={name} subsection={subSection} key={idx} />
        ))}
      </List>
    </div>
  );
};

export default ExperimentList;
