import { Typography, Button, Container, Hidden } from "@material-ui/core";
import useStyles from "./styles";

//redux
import { useDispatch } from "react-redux";
import { setModal } from "@/redux/modals/creators";

const sectionHeader = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setModal("getMyQuote"));
  };

  return (
    <div className={classes.root}>
      <div className={classes.semiRoot}>
        <div className={classes.blackBackground} />
        <img
          className={classes.imgBackground}
          src="images/headerImage.webp"
          srcSet="images/headerImage_4000.webp 4000w, images/headerImage_2000.webp 2000w, images/headerImage_1000.webp 1000w"
          sizes="100vw"
          alt="A cover image."
        />
        <Container maxWidth="sm" className={classes.container}>
          <Typography variant="h3" className={classes.headerText}>
            Sell or Trade-in Cars With Zero Headaches
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            className={classes.button}
            onClick={handleClick}
          >
            Get my QUOTE
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default sectionHeader;
