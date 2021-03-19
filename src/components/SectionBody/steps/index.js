import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";

// component
const steps = () => {
  const classes = useStyles();
  const makeCards = (entry, i) => {
    return (
      <Card
        key={i}
        className={`${classes.root} ${i == 0 && classes.introStep}`}
        elevation={3}
      >
        <div className={classes.introLogo}>
          {i == 0 && (
            <img
              className={classes.introBadge}
              src={`svg/not-in-sprite/logo-step-badge.svg`}
            />
          )}
          <img src={`svg/not-in-sprite/logo-step${i}.svg`} />
        </div>
        <CardContent style={{ color: i == 0 && "white" }}>
          <Typography variant="h5" component="h5" className={classes.title}>
            {entry.title}
          </Typography>
          <Typography variant="body1" component="p">
            {entry.content}
          </Typography>
        </CardContent>
        <CardActions>
          {entry.button &&
            //   idk why conditional statement doesn't work on color props,
            //   so i'll do this instead
            (i == 0 ? (
              <Button className={classes.whiteButton} variant="contained">
                {entry.button}
              </Button>
            ) : (
              <Button color="secondary" variant="contained">
                {entry.button}
              </Button>
            ))}
        </CardActions>
      </Card>
    );
  };
  const entries = [
    {
      title: "Want to Trade-In Your Car?",
      content:
        "We’ll give you an additional P10,000 worth of credit on any car in the Automart.Ph inventory, if you buy your new unit from us instead of getting a cheque payment.",
      button: "book inspection now",
    },
    {
      title: "Book Inspection Online",
      content: `Enter Your Car Details and Schedule a Convenient Date/ Time for Car Inspection.`,
      button: "book now",
    },
    {
      title: "Bring Over Your Car for Inspection",
      content:
        "Bring your car over to the specified address, and get your car inspected and appraised by our expert mechanics and appraisers. This should take around 30 minutes. We’ll then give you an approximate value that we can sell your car for.",
      button: null,
    },
    {
      title: "Get Your Money Within 1 Week",
      content:
        "We can normally sell your car within one (1) week, depending on the saleability of the car. You’ll sign the Deed of Sale and we can get you the cheque payment on the day itself.",
      button: null,
    },
  ];
  return (
    <>
      <Typography component="p" variant="body1">
        but use the amount as your trade in value instead
      </Typography>
      {entries.map(makeCards)}
    </>
  );
};

export default { title: "Just follow these 3 easy steps", content: steps };
