import {
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import useStyles from "./styles";
import { arrowright, arrowleft } from "@/svgStore/svgCall";
import testimonialsData from "./data";
import { useState } from "react";

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

  /**getNewState
   * @param {String} move             `slide direction
   * @param {String} currentPosition  `current pos of card
   * @param {Number} ownData          `index that points to testimonialsData
   * @param {Number} siblingData      `sibling index that points to testimonialsData
   * @returns {Object}                `new state
   */

  const getNewState = (move, currentPosition, ownData, siblingData) => {
    const pattern = ["left", "middle", "right"];
    const position = pattern.indexOf(currentPosition);
    let newPosition = "";

    const length = testimonialsData.length;
    let newData = ownData;

    if (move == "toLeft") {
      //  <----display
      //  data---->

      //if pointer is at the "left"(meaning it's at the start), throw it to "right", else return position - 1
      newPosition = position == 0 ? "right" : pattern[position - 1];

      //if current data is at the rightmost, move it to the leftmost, else just increment
      if (currentPosition != "middle")
        newData = siblingData >= length - 1 ? 0 : siblingData + 1;
    }
    if (move == "toRight") {
      //  display---->
      //  <----data

      //if pointer is at the "right"(meaning it's at the end), throw it to "left", else return position + 1
      newPosition = position == 2 ? "left" : pattern[position + 1];

      //if current data is at the leftmost, move it to the rightmost, else just decrement
      if (currentPosition != "middle")
        newData = siblingData <= 0 ? length - 1 : siblingData - 1;
    }

    return { data: newData, position: newPosition };
  };
  const moveLeft = () => {
    setState((currState) => {
      return {
        div1: getNewState(
          "toLeft",
          currState.div1.position,
          currState.div1.data,
          currState.div3.data
        ),
        div2: getNewState(
          "toLeft",
          currState.div2.position,
          currState.div2.data,
          currState.div1.data
        ),
        div3: getNewState(
          "toLeft",
          currState.div3.position,
          currState.div3.data,
          currState.div2.data
        ),
        areButtonsDisabled: true,
      };
    });
    setTimeout(() => {
      setState((currState) => {
        return { ...currState, areButtonsDisabled: false };
      });
    }, 1000);
  };
  const moveRight = () => {
    setState((currState) => {
      return {
        div1: getNewState(
          "toRight",
          currState.div1.position,
          currState.div1.data,
          currState.div2.data
        ),
        div2: getNewState(
          "toRight",
          currState.div2.position,
          currState.div2.data,
          currState.div3.data
        ),
        div3: getNewState(
          "toRight",
          currState.div3.position,
          currState.div3.data,
          currState.div1.data
        ),
        areButtonsDisabled: true,
      };
    });
    setTimeout(() => {
      setState((currState) => {
        return { ...currState, areButtonsDisabled: false };
      });
    }, 1000);
  };
  const makeContent = () => {
    return [1, 2, 3].map((x, i) => (
      <Card
        elevation={3}
        key={i}
        className={`${classes.imgContainer} ${
          classes[state[`div${x}`].position]
        }`}
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
        onClick={moveRight}
      >
        {arrowleft}
      </IconButton>
      <IconButton
        className={classes.arrowRight}
        disabled={state.areButtonsDisabled}
        onClick={moveLeft}
      >
        {arrowright}
      </IconButton>
    </div>
  );
};

export default { title: "Customer Testimonials", content: testimonials };
