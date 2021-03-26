import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Grid,
  Link,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
// import Link from "next/link";

//sibling files
import useStyles from "./styles";

//svg piece
import { sellmycar } from "@/svgStore/svgCall";

const appBar = ({ toggleDrawer }) => {
  const classes = useStyles();

  //reference
  const textLinks = {
    "https://automart.ph": "AutoMart",
    "https://motomart.ph": "MotoMart",
    "https://automart.ph/blog": "Blog",
    "https://automart.ph/blog/frequently-asked-questions": "FAQ's",
    "https://automart.ph/contact-us": "Contact Us",
  };

  const makeList = () => {
    return Object.entries(textLinks).map((textLink, i) => (
      <Link
        key={i}
        href={textLink[0]}
        target="_blank"
        className={classes.gridLink}
      >
        <a>{textLink[1]}</a>
      </Link>
    ));
  };

  return (
    <>
      <AppBar color="secondary">
        <Toolbar>
          <Grid container wrap="nowrap">
            <Grid item xs={1}>
              <IconButton
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid
              item
              sm={10}
              md={4}
              container
              className={classes.gridTitle}
              alignItems="center"
            >
              <Link href="/">
                <a>{sellmycar}</a>
              </Link>
            </Grid>

            <Hidden smDown>
              <Grid
                item
                sm={7}
                container
                wrap="nowrap"
                justify="flex-end"
                alignItems="center"
              >
                {makeList(textLinks)}
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* ----another Toolbar to make items behind the AppBar component visible---- */}
      <Toolbar />
    </>
  );
};

export default appBar;
