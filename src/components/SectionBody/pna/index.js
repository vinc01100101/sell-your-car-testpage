/**
 * the "Partners & Affiliates" section of the body
 */

import { Grid } from "@material-ui/core";
import useStyles from "./styles";

const pnaObj = {
  partners: {
    bdo: 98,
    eastWest: 164,
    securityBank: 155,
    orix: 82,
    unionBank: 107,
    avis: 132,
  },
  affiliates: {
    dost: 74,
    dti: 74,
    techMaker: 60,
    upScale: 80,
    ideaSpace: 140,
  },
};

const pna = () => {
  const classes = useStyles();

  const makeGridItems = (groupName) => {
    return Object.entries(pnaObj[groupName]).map((entry, i) => (
      <Grid key={i} xs={6} sm={4} lg item className={classes.gridItem}>
        <img
          className={classes.logo}
          style={{ width: `${entry[1]}px` }}
          src={`images/${groupName}/${entry[0]}.webp`}
        />
      </Grid>
    ));
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {makeGridItems("partners")}
      </Grid>
      <Grid container spacing={3}>
        {makeGridItems("affiliates")}
      </Grid>
    </div>
  );
};

export default {
  title: "Partners & Affiliates",
  content: pna,
};
