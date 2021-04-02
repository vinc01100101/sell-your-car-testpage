/**
 * the "Just follow these 3 easy steps" section of the body
 */

import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";

//sibling files
import useStyles from "./styles";
import data from "./data";

//redux
import { useDispatch } from "react-redux";
import { setModal } from "@/redux/modals/creators";

import Image from "next/image";
// component
const steps = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const makeCards = (entry, i) => {
    return (
      <Card
        key={i}
        className={`${classes.root} ${i == 0 && classes.introStep}`}
        elevation={3}
      >
        <div className={classes.setFlex}>
          <div className={classes.logoContainer}>
            <Image
              src={`/svg/not-in-sprite/logo-step${i}.svg`}
              alt={entry.title}
              width={entry.size[0]}
              height={entry.size[1]}
              layout="fixed"
            />
            {
              //the yellow badge on the first card
              i == 0 && (
                <div className={classes.introBadge}>
                  <Image
                    src={`/svg/not-in-sprite/logo-step-badge.svg`}
                    alt="Best Offer"
                    width="54px"
                    height="54px"
                    layout="fixed"
                  />
                </div>
              )
            }
          </div>
          <CardContent style={{ color: i == 0 && "white" }}>
            <Typography variant="h5" component="h5" className={classes.title}>
              {entry.title}
            </Typography>
            <Typography variant="body1" component="p">
              {entry.content}
            </Typography>
            <CardActions className={classes.cardActions}>
              {entry.button &&
                //   idk why conditional statement doesn't work on color props,
                //   so i'll do this instead
                (i == 0 ? (
                  <Button
                    className={`${classes.button} ${classes.whiteButton}`}
                    variant="contained"
                    onClick={() => dispatch(setModal("getMyQuote"))}
                  >
                    {entry.button}
                  </Button>
                ) : (
                  <Button
                    className={classes.button}
                    color="secondary"
                    variant="contained"
                    onClick={() => dispatch(setModal("getMyQuote"))}
                  >
                    {entry.button}
                  </Button>
                ))}
            </CardActions>
          </CardContent>
        </div>
      </Card>
    );
  };

  return (
    <>
      <Typography component="h5" variant="h5" className={classes.subtitle}>
        but use the amount as your trade in value instead
      </Typography>
      {data.map(makeCards)}
    </>
  );
};

export default { title: "Just follow these 3 easy steps", content: steps };
