import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "10px",
    margin: "30px",
    border: "hidden",
    borderRadius: "10px",
  },
  video: {},
});
const video = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={3}>
      <iframe
        width="330"
        height="330"
        src="https://www.youtube.com/embed/tSM8gkFdTIA"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Paper>
  );
};

export default { title: "How it works", content: video };
