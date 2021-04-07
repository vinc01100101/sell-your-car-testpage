/**
 * the "Partners & Affiliates" section of the body
 */

import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Image from "next/image";

const pnaObj = {
  partners: {
    bdo: [98, 34],
    eastWest: [164, 43],
    securityBank: [155, 55],
    orix: [82, 82],
    unionBank: [107, 107],
    avis: [132, 70],
  },
  affiliates: {
    dost: [74, 75],
    dti: [74, 74],
    techMaker: [60, 60],
    upScale: [80, 56],
    ideaSpace: [140, 33],
  },
};

pna.title = "Partners & Affiliates";

export default function pna() {
  const classes = useStyles();

  const makeGridItems = (groupName) => {
    return Object.entries(pnaObj[groupName]).map((entry, i) => (
      <Grid key={i} xs={6} sm={4} lg item className={classes.gridItem}>
        <Image
          // priority //<--throws Error: EPERM: operation not permitted, unlink
          layout="fixed"
          width={entry[1][0]}
          height={entry[1][1]}
          quality={100}
          src={`/images/${groupName}/${entry[0]}.webp`}
          alt={entry[0]}
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
}
