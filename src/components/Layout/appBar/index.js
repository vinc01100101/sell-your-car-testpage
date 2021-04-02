//material ui
import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Grid,
  Link,
} from "@material-ui/core";
//mui icons
import { Menu as MenuIcon } from "@material-ui/icons";
//next
import NextLink from "next/link";
//sibling files
import useStyles from "./styles";
//svg piece
import { sellmycar } from "@/svgStore/svgCall";
//href strings
import {
  AUTOMART,
  MOTOMART,
  BLOG,
  FAQS,
  CONTACTUS,
} from "@/components/hrefLinks";

export default function appBar({ toggleDrawer }) {
  const classes = useStyles();

  //references
  const textLinks = [
    [AUTOMART, "AutoMart"],
    [MOTOMART, "MotoMart"],
    [BLOG, "Blog"],
    [FAQS, "FAQ's"],
    [CONTACTUS, "Contact Us"],
  ];

  const makeList = () => {
    return textLinks.map((textLink, i) => (
      <Link
        key={i}
        href={textLink[0]}
        target="_blank"
        className={classes.gridLink}
        variant="h6"
      >
        {textLink[1]}
      </Link>
    ));
  };

  return (
    <>
      <AppBar color="secondary">
        <Toolbar>
          <Grid container wrap="nowrap">
            <Grid item xs={1} className={classes.gridMenu}>
              <IconButton
                aria-label="Menu Button"
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
              <NextLink href="/" aria-label="Home">
                <a>{sellmycar}</a>
              </NextLink>
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
                {makeList()}
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* ----another Toolbar to make items behind the AppBar component visible---- */}
      <Toolbar />
    </>
  );
}
