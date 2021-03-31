/**
 * IMPORT VALUE IS: { title: "Component Title", content: Component }
 */
import intro from "./intro";
import video from "./video";
import steps from "./steps";
import benefits from "./benefits";
import testimonials from "./testimonials"; //waiting for testi data
import faqs from "./faqs";
import pna from "./pna";
import callorchat from "./callorchat";

import useStyles from "./styles";

import { Container, Typography } from "@material-ui/core";

const body = () => {
  const classes = useStyles();

  return (
    // body component
    <div className={classes.root}>
      {/* body's children components */}
      {[intro, video, steps, benefits, testimonials, faqs, pna, callorchat].map(
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
              {/* maxWidth = "sm" for testimonials = 4 and callorchat = 7 */}
              <Container
                maxWidth={i === 4 || i === 7 ? "sm" : "md"}
                className={i === 0 ? classes.introFlexSetter : ""}
              >
                {/* circular header image */}
                {i == 0 && (
                  <img
                    className={classes.introImage}
                    src="images/introImage.webp"
                    alt="A rich man buying his car."
                  />
                )}
                <div className={`${i == 7 && classes.callOrChatBackground}`}>
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
