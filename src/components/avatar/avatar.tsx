import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);
type AvatarProps = {
  image_link: string;
  name: string;
};

export const ImageAvatars: React.FC<AvatarProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt={props.name} src={props.image_link} />
    </div>
  );
};
