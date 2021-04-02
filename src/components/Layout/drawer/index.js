console.log("drawer module imported.");

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
//href strings
import {
  AUTOMART,
  MOTOMART,
  BLOG,
  FAQS,
  CONTACTUS,
  FACEBOOK,
  INSTAGRAM,
  YOUTUBE,
  LINKEDIN,
} from "@/components/hrefLinks";
//drawer component
export default function drawer({ isDrawerOpen, toggleDrawer }) {
  const classes = useStyles();

  //references
  const textLinks = [
    [AUTOMART, "AutoMart"],
    [MOTOMART, "MotoMart"],
    [BLOG, "Blog"],
    [FAQS, "FAQ's"],
    [CONTACTUS, "Contact Us"],
  ];

  const logoLinks = [
    [FACEBOOK, facebook, "Facebook"],
    [INSTAGRAM, instagram, "Instagram"],
    [YOUTUBE, youtube, "YouTube"],
    [LINKEDIN, linkedin, "Linked In"],
  ];

  const makeList = () => {
    return textLinks.map((textLink, i) => (
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
          <ListItemText
            primary={textLink[1]}
            primaryTypographyProps={{ variant: "h6" }}
          />
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
        disableBackdropTransition
        disableDiscovery
        disableSwipeToOpen
        transitionDuration={{ enter: 400, exit: 400 }}
      >
        <div className={classes.drawerContainer}>
          <List>
            {sellmycar}
            <ListItem>
              <Typography className={classes.callUs}>
                <a href="tel:+639 2788 76400">Call us: +639 2788 76400</a>
              </Typography>
            </ListItem>
            {makeList()}
          </List>

          {/*---- justifyContent: "space-between" ----*/}

          <List>
            <ListItem>
              {logoLinks.map((logoLink, i) => (
                <Link key={i} href={logoLink[0]} target="_blank">
                  <IconButton aria-label={logoLink[2]}>
                    {logoLink[1]}
                  </IconButton>
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
