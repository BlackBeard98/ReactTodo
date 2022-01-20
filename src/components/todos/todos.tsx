import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    checked: {
      textDecoration: "line-through",
    },
  })
);

export type Todo = {
  text: string;
  done: boolean;
};
type CheckboxListProps = {
  todos: Todo[];
  handleToggle: (e: Todo) => void;
};

export const CheckboxList: React.FC<CheckboxListProps> = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.todos.map((value) => {
        return (
          <ListItem key={value.text} onClick={() => props.handleToggle(value)}>
            <ListItemIcon>
              <Checkbox checked={value.done} />
            </ListItemIcon>
            <ListItemText
              style={{ textDecoration: value.done ? "line-through" : "none" }}
              id={`checkbox-list-label-${value.text}`}
              primary={value.text}
            />
          </ListItem>
        );
      })}
    </List>
  );
};
