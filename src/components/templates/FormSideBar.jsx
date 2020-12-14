import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faSwift } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FormSideBar({ tags, set_tags }) {
  const classes = useStyles();
  const adjust_tags = (tag) => {
    let index = tags.indexOf(tag);
    if (index === -1) {
      set_tags([...tags, tag]);
    } else {
      let tagArr = tags.filter(function (item) {
        return item !== tag;
      });
      set_tags(tagArr);
    }
  };
  const adjust_AllTags = () => {
    set_tags([
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vue",
      "Angular",
      "PHP",
      "Laravel",
      "Python",
      "Java",
      "Swift",
      "Git",
      "Github",
      "Docker",
    ]);
  };
  const clear_tags = () => {
    set_tags([]);
  };
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button onClick={() => adjust_AllTags()}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faGlobe} />
          </ListItemIcon>
          <ListItemText primary="ALL" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => clear_tags()}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faTrash} />
          </ListItemIcon>
          <ListItemText primary="clear" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => adjust_tags("HTML5")}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faHtml5} />
          </ListItemIcon>
          <ListItemText primary="HTML5" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => adjust_tags("CSS3")}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faCss3} />
          </ListItemIcon>
          <ListItemText primary="CSS3" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => adjust_tags("JavaScript")}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faJs} />
          </ListItemIcon>
          <ListItemText primary="JavaScript" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => adjust_tags("React")}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faReact} />
          </ListItemIcon>
          <ListItemText primary="React" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => adjust_tags("Vue")}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faVuejs} />
          </ListItemIcon>
          <ListItemText primary="Vue" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => adjust_tags("Angular")}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faAngular} />
          </ListItemIcon>
          <ListItemText primary="Angular" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => adjust_tags("PHP")}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faPhp} />
          </ListItemIcon>
          <ListItemText primary="PHP" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => adjust_tags("Laravel")}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faLaravel} />
          </ListItemIcon>
          <ListItemText primary="Laravel" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => adjust_tags("Python")}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faPython} />
          </ListItemIcon>
          <ListItemText primary="Python" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => adjust_tags("Java")}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faJava} />
          </ListItemIcon>
          <ListItemText primary="Java" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => adjust_tags("Swift")}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faSwift} />
          </ListItemIcon>
          <ListItemText primary="Swift" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => adjust_tags("Git")}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faGit} />
          </ListItemIcon>
          <ListItemText primary="Git" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => adjust_tags("Github")}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faGithub} />
          </ListItemIcon>
          <ListItemText primary="Github" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => adjust_tags("Docker")}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faDocker} />
          </ListItemIcon>
          <ListItemText primary="Docker" />
        </ListItem>
        <Divider />
      </List>
    </div>
  );
}
