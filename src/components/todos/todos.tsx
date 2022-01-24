import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@material-ui/core";

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
      {props.todos.map((value) => (
        <ListItem key={value.text} onClick={() => props.handleToggle(value)}>
          <ListItemIcon>
            <Checkbox checked={value.done} />
          </ListItemIcon>

          <ListItemText
            style={{ textDecoration: value.done ? "line-through" : "none" }}
            primary={value.text}
          />
        </ListItem>
      ))}
    </List>
  );
};
