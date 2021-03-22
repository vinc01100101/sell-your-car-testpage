/**
 * the "Customer Testimonials" section of the body
 */

import {
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { useState } from "react";

//svg icons
import { arrowright, arrowleft } from "@/svgStore/svgCall";

//sibling files
import testimonialsData from "./data";
import { moveLeft, moveRight } from "./slideFunction";
import useStyles from "./styles";

const testimonials = () => {
  const classes = useStyles();

  const defaultState = {
    div1: {
      data: 0,
      position: "left",
    },
    div2: {
      data: 1,
      position: "middle",
    },
    div3: {
      data: 2,
      position: "right",
    },
    areButtonsDisabled: false,
  };
  const [state, setState] = useState(defaultState);

  const makeContent = () => {
    //div1 div2 div3 states
    return [1, 2, 3].map((x, i) => (
      <Card
        elevation={3}
        key={i}
        className={`${classes.card} ${classes[state[`div${x}`].position]}`}
      >
        <CardMedia
          className={classes.img}
          src={testimonialsData[state[`div${x}`].data].src}
          component="img"
          title={testimonialsData[state[`div${x}`].data].name}
        />
        <CardContent className={classes.textContainer}>
          <Typography variant="body1">
            {testimonialsData[state[`div${x}`].data].testimonial}
          </Typography>
          <Typography variant="h6">
            – {testimonialsData[state[`div${x}`].data].name}
          </Typography>
        </CardContent>
      </Card>
    ));
  };
  return (
    <div className={classes.root}>
      {makeContent()}
      <IconButton
        className={classes.arrowLeft}
        disabled={state.areButtonsDisabled}
        onClick={() => moveRight(setState)}
      >
        {arrowleft}
      </IconButton>
      <IconButton
        className={classes.arrowRight}
        disabled={state.areButtonsDisabled}
        onClick={() => moveLeft(setState)}
      >
        {arrowright}
      </IconButton>
    </div>
  );
};

export default { title: "Customer Testimonials", content: testimonials };
