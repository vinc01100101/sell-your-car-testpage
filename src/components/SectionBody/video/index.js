import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px",
    height: "330px",
    border: "hidden",
    borderRadius: "10px",
    [theme.breakpoints.up("sm")]: {
      height: "400px",
    },
    [theme.breakpoints.up("md")]: {
      height: "470px",
    },
  },
}));
const video = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={3}>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/tSM8gkFdTIA"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Paper>
  );
};

export default { title: "How it works", content: video };
