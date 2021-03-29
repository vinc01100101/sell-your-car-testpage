//material ui
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Link,
} from "@material-ui/core";
//sibling files
import useStyles from "./styles";
//SVG icon pieces
import {
  facebook,
  instagram,
  linkedin,
  youtube,
  sellmycar,
} from "@/svgStore/svgCall";

//drawer component
export default function drawer({ isDrawerOpen, toggleDrawer }) {
  const classes = useStyles();

  //references
  const textLinks = {
    "https://automart.ph": "AutoMart",
    "https://motomart.ph": "MotoMart",
    "https://automart.ph/blog": "Blog",
    "https://automart.ph/blog/frequently-asked-questions": "FAQ's",
    "https://automart.ph/contact-us": "Contact Us",
  };

  const logoLinks = {
    "https://www.facebook.com/automartph/": facebook,
    "https://www.instagram.com/automartph/": instagram,
    "https://www.youtube.com/channel/UCh-uSYHQZPeNMFkIZzBBbDw": youtube,
    "https://www.linkedin.com/company/automart-ph/": linkedin,
  };

  const makeList = () => {
    return Object.entries(textLinks).map((textLink, i) => (
      <Link key={i} href={textLink[0]} target="_blank">
        <ListItem
          button
          // onClick={() => {
          //   window.open(textLink[0], "_blank");
          //   window.location.href = textLink[0];
          //   window.location.assign(textLink[0]);
          //   window.location.replace(textLink[0]);
          // }}
        >
          <ListItemText primary={textLink[1]} />
        </ListItem>
      </Link>
      // <form key={i} method="GET" action={textLink[0]} target="_blank">
      //   <InputBase type="submit" value={textLink[1]} />
      // </form>
    ));
  };

  return (
    <>
      <SwipeableDrawer
        anchor="left"
        open={isDrawerOpen}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
        disableBackdropTransition={true}
        disableDiscovery={true}
        transitionDuration={{ enter: 400, exit: 400 }}
      >
        <div className={classes.drawerContainer}>
          <List>
            {sellmycar}
            <ListItem>
              <Typography className={classes.callUs}>
                <a href="tel:+639278876400">Call us: +639 2788 76400</a>
              </Typography>
            </ListItem>
            {makeList()}
          </List>

          {/*---- justifyContent: "space-between" ----*/}

          <List>
            <ListItem>
              {Object.entries(logoLinks).map((logoLink, i) => (
                <Link key={i} href={logoLink[0]} target="_blank">
                  <IconButton>{logoLink[1]}</IconButton>
                </Link>
              ))}
            </ListItem>
            <ListItem>
              <Typography className={classes.copyRight}>
                © Copyright 2020, Automart.PH
                <br />
                All rights reserved
              </Typography>
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </>
  );
}
