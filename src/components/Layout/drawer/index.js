import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Link,
} from "@material-ui/core";
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
const drawer = ({ isDrawerOpen, toggleDrawer }) => {
  const classes = useStyles();

  //reference
  const textLinks = {
    "https://www.automart.ph/": "AutoMart",
    "https://www.motomart.ph/": "MotoMart",
    "https://www.automart.ph/blog": "Blog",
    "https://www.automart.ph/blog/frequently-asked-questions": "FAQ's",
    "https://www.automart.ph/contact-us": "Contact Us",
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
        <ListItem button>
          <ListItemText primary={textLink[1]} />
        </ListItem>
      </Link>
    ));
  };
  return (
    <>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        transitionDuration={{ enter: 400, exit: 400 }}
      >
        <div className={classes.drawerContainer}>
          <List>
            {sellmycar}
            <ListItem>
              <Typography className={classes.callUs}>
                Call us: +639 2788 76400
              </Typography>
            </ListItem>
            {makeList()}
          </List>

          {/*---- justifyContent: "space-between" ----*/}

          <List>
            <ListItem>
              {Object.entries(logoLinks).map((logoLink, i) => (
                <Link key={i} href={logoLink[0]}>
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
      </Drawer>
    </>
  );
};
export default drawer;
