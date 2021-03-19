import { Typography } from "@material-ui/core";
import useStyles from "./styles";

//svg pieces
import { benefits0, benefits1, benefits2 } from "@/svgStore/svgCall";
//put inside array for reference
const referenceIndex = [benefits0, benefits1, benefits2];

const benefits = () => {
  const classes = useStyles();
  const makeComponent = (label, i) => {
    return (
      <div className={classes.child} key={i}>
        <div className={classes.iconContainer}>{referenceIndex[i]}</div>
        <Typography variant="body1" component="p">
          {label}
        </Typography>
      </div>
    );
  };
  return (
    <div className={classes.root}>
      {["Quick & Easy Process", "Transparent", "Fair Pricing"].map(
        makeComponent
      )}
    </div>
  );
};

export default {
  title: "Benefits from getting offer from Automart",
  content: benefits,
};
