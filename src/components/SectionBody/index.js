/**
 * IMPORT VALUE IS: { title: "Component Titile", content: Component }
 */
import intro from "./intro";
import video from "./video";
import steps from "./steps";
import benefits from "./benefits";
import testimonials from "./testimonials";
import faqs from "./faqs";

import useStyles from "./styles";

import { Container, Typography } from "@material-ui/core";

const body = () => {
  const classes = useStyles();

  return (
    // body component
    <div className={classes.root}>
      {/* body's child components */}
      {[intro, video, steps, benefits, testimonials, faqs].map(
        (component, i) => {
          const Component = component.content;
          return (
            // conditional classes.stepsBackground for light green background
            <div
              key={i}
              className={`${classes.child} ${
                i == 2 && classes.stepsBackground
              }`}
            >
              <Container
                maxWidth={i == 4 ? "sm" : "md"}
                className={i == 0 ? classes.introFlexSetter : ""}
              >
                {/* circular header image */}
                {i == 0 && (
                  <img
                    className={classes.introImage}
                    src="images/introImage.jpg"
                  />
                )}
                <div>
                  <Typography
                    className={`${classes.title} ${
                      i == 0 && classes.introTitle
                    }`}
                    variant="h4"
                  >
                    {component.title}
                  </Typography>
                  <Component />
                </div>
              </Container>
            </div>
          );
        }
      )}
    </div>
  );
};

export default body;
