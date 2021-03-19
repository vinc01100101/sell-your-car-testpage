/**
 * IMPORT VALUE IS: { title: "Component Titile", content: Component }
 */
import intro from "./intro";
import video from "./video";
import steps from "./steps";
import benefits from "./benefits";
import testimonials from "./testimonials";

import useStyles from "./styles";

import { Container, Typography } from "@material-ui/core";

const body = () => {
  const classes = useStyles();

  return (
    // body component
    <div className={classes.root}>
      {/* circular header image */}
      <img className={classes.headerImg} src="images/introImage.jpg" />
      {/* body's child components */}
      {[intro, video, steps, benefits, testimonials].map((component, i) => {
        const Component = component.content;
        return (
          <div
            key={i}
            className={`${classes.child} ${i == 2 && classes.stepsBackground}`}
          >
            <Container maxWidth={i == 3 ? "md" : "sm"}>
              <Typography className={classes.title} variant="h4">
                {component.title}
              </Typography>
              <Component />
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default body;
