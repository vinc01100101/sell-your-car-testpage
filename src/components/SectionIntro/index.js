import useStyles from "./styles";
import { Container, Typography } from "@material-ui/core";

const sectionIntro = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <img className={classes.img} src="images/introImage.jpg" />
      <Typography className={classes.title} variant="h5">
        Which is more difficult–buying or selling a car?
      </Typography>
      <Typography variant="body1" component="p">
        If you’ve ever experienced trying to sell a car then you know it is
        definitely the harder experience.
      </Typography>
      <Typography variant="body1" component="p">
        Nobody wants to deal with joy bidders, low ballers, and endless
        questions from people who don’t even seriously plan on buying–not to
        mention the time it takes from your daily schedule!
      </Typography>
      <br />
      <Typography variant="body1" component="p">
        Sell My Car by Automart.Ph is here to change that and make it a zero
        headache process to sell or trade and upgrade your vehicle.
      </Typography>
    </Container>
  );
};

export default sectionIntro;
