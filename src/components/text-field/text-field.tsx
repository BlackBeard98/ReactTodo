import { useState } from "react";
import { TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
      },
    },
  })
);

type textFieldProps = {
  setValue: (e: any) => void;
};

export const TextFields: React.FC<textFieldProps> = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Add new Task"
        onChange={(e) => props.setValue(e.target.value)}
      />
    </form>
  );
};
