import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function ListDividers() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem sx={{ textAlign: "center", color: "red" }} button>
        <ListItemText primary="Report" />
      </ListItem>
      <Divider />
      <ListItem sx={{ textAlign: "center", color: "red" }} button>
        <ListItemText primary="Unfollow" />
      </ListItem>
      <Divider />
      <ListItem sx={{ textAlign: "center" }} button>
        <ListItemText primary="Go to post" />
      </ListItem>
      <Divider />
      <ListItem sx={{ textAlign: "center" }} button>
        <ListItemText primary="Share to..." />
      </ListItem>
      <Divider />
      <ListItem sx={{ textAlign: "center" }} button>
        <ListItemText primary="Copy Link" />
      </ListItem>
      <Divider />
      <ListItem sx={{ textAlign: "center" }} button>
        <ListItemText primary="Embed" />
        <Divider />
      </ListItem>
      <Divider />
    </List>
  );
}

const style = {
  width: 450,
  bgcolor: "background.paper",
};
