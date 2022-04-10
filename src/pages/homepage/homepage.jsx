// import { useStylesHomepage } from "./homepage.styles";
import "./homepage.css"
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
// import LaptopMacIcon from "@mui/icons-material/LaptopMac";
// import RepeatIcon from "@mui/icons-material/Repeat";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";
// import BuildIcon from "@mui/icons-material/Build";
// import ListIcon from "@mui/icons-material/List";
import { useEffect, useState } from "react";

const Homepage = () => {
  // const classes = useStylesHomepage();

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
    window.addEventListener("resize", (e) => {
      displayWindowSize();
    });
    return () => {
      window.removeEventListener("resize", (e) => console.log(e));
    };
  }, []);

  return (
    <div className="homepage1">
      <Timeline
        style={
          windowSize > 880
            ? { width: "100%" }
            : { width: "200%", transform: "translateX(-25%)", padding: 0 }
        }
        align={windowSize > 800 ? "alternate" : "left"}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              {/* <BuildIcon /> */}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="homepage2">
              <Typography
                color="primary"
                gutterBottom
                variant="h6"
                component="h1"
              >
                What is a Virtual Lab?
              </Typography>
              <Typography>
                In the most general sense, virtual lab aims to provide the
                facilities online that is provided by a physical lab, i.e., it
                provides a simulated learning environment that allow to complete
                laboratory experiments online. It helps in understanding the
                concepts and experiments without the use of scarce costly
                equipments. Another view of the virtual laboratory is as a tool
                for distance learning and/or experimentation that allows to
                share knowledge, data, voice, video, tools, etc.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              {/* <LaptopMacIcon /> */}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="homepage2">
              <Typography
                color="secondary"
                gutterBottom
                variant="h6"
                component="h1"
              >
                Virtual Lab for Data Structures and Algorithms
              </Typography>
              <Typography>
                Here, the second view of the virtual lab is adopted for the Data
                Structures and Algorithms as it fits best for this course to
                share the knowledge using theory, algorithm, and demonstration.
                The students may understand and experiment with the codes
                locally at their computing device.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              {/* <ListIcon /> */}
            </TimelineDot>
            <TimelineConnector className="homepage3" />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="homepage2">
              <Typography
                color="primary"
                gutterBottom
                variant="h6"
                component="h1"
              >
                Salient Features
              </Typography>
              <List style={{ fontSize: "1rem" }}>
                <ListItem>Anywhere anytime laboratory</ListItem>
                <ListItem>Free to use</ListItem>
                <ListItem>
                  Accessibility through PC/laptop/tablet/smartphone
                </ListItem>
                <ListItem>Facilitates Learning at self-pace</ListItem>
              </List>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              {/* <RepeatIcon /> */}
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="homepage2">
              <Typography
                color="secondary"
                gutterBottom
                variant="h6"
                component="h1"
              >
                Explore
              </Typography>
              <Typography>Go to List Of Experiments for more</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Homepage;
