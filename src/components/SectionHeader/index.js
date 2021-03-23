import { Typography, Button, Container, Hidden } from "@material-ui/core";
import useStyles from "./styles";

const sectionHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.semiRoot}>
        <div className={classes.blackBackground} />
        <img className={classes.imgBackground} src="images/headerImage.jpg" />

        <Container maxWidth="sm" className={classes.container}>
          <Typography variant="h3" className={classes.headerText}>
            Sell or Trade-in Cars With Zero Headaches
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            className={classes.button}
          >
            Get my QUOTE
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default sectionHeader;
