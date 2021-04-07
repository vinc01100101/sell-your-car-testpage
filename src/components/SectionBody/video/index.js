/**
 * the "How it works" section of the body
 */

import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

/**
 * only create custom element when
 * typeof customElements.get("lite-yt") === "undefined"
 */
if (
  typeof window !== "undefined" &&
  typeof customElements.get("lite-yt") === "undefined"
) {
  import("./customizedSetupDom").then((mod) => mod.default());
}
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
  videoContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
}));

video.title = "How it works";

export default function video() {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={3}>
      {/* <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/O1b4LEQdfQg"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      /> */}
      <div className={classes.videoContainer}>
        <lite-yt
          videoid="O1b4LEQdfQg"
          videotitle="This is a video title"
        ></lite-yt>
      </div>
    </Paper>
  );
}
