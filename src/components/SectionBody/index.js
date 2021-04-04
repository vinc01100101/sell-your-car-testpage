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
//styles
import useStyles from "./styles";
//material ui
import { Container, Typography } from "@material-ui/core";

export default function body() {
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
                i == 2 ? classes.stepsBackground : ""
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
                    alt="A man selling his car."
                    width="407px"
                    height="270.94px"
                  />
                )}
                <div
                  className={`${i == 7 ? classes.callOrChatBackground : ""}`}
                >
                  <Typography
                    className={`${classes.title} ${
                      i == 0 && classes.introTitle
                    }`}
                    variant="h4"
                    component="div"
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
}
