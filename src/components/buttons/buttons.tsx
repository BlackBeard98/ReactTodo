import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

type ButtonProps = {
  action: () => void;
};

export const Buttons: React.FC<ButtonProps> = (props) => {
  const { action } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={action}>
        Add
      </Button>
    </div>
  );
};
