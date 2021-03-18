import intro from "./intro";
import video from "./video";
import steps from "./steps";

import useStyles from "./styles";

import { Container, Typography } from "@material-ui/core";

const body = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root} maxWidth="sm">
        <img className={classes.headerImg} src="images/introImage.jpg" />
        {[intro, video, steps].map((component, i) => {
          const Component = component.content;
          return (
            <div key={i} className={classes.child}>
              <Typography className={classes.title} variant="h5">
                {component.title}
              </Typography>
              <Component />
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default body;
