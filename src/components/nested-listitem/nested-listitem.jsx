import { Collapse, ListItem, ListItemText, List } from "@mui/material";
// import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useStylesNestedListItem } from "./nested-listitem.styles";
import './nested.css';

const NestedListItem = ({ name, subsection }) => {
  // router
  const navigate = useNavigate();

  // styles
  // const classes = useStylesNestedListItem();

  // local states
  const [open, setOpen] = useState(false);

  // custom functions
  const handleClick = () => {
    setOpen(!open);
  };

  const changeRoute = (text) => {
    navigate(`/experiments/${text}/theory`);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={name} />
        {/* {open ? <ExpandLess /> : <ExpandMore />} */}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List className='nested-custom2' component="div" disablePadding>
          {subsection.map((i, idx) => (
            <ListItem
              key={idx}
              button
              className='nested-custom1'
              onClick={() => changeRoute(i.route)}
            >
              <ListItemText primary={i.name} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default NestedListItem;
