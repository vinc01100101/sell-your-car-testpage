import Link from "next/link";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  callUs: {
    border: "1px solid white",
    padding: "5px",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "160%",
  },
  copyRight: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    opacity: "0.5",
  },
  drawerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    background: "#6FA269",
    color: "white",
    width: "335px",
    padding: "20px",
  },
});
//SVG icons
import { Facebook, Instagram, LinkedIn, YouTube, SellMyCar } from "@/SVG";

//drawer component
const drawer = ({ isDrawerOpen, toggleDrawer }) => {
  const classes = useStyles();
  const makeList = () => {
    return ["AutoMart", "MotoMart", "Blog", "FAQ's", "Contact us"].map(
      (text, i) => (
        <ListItem
          key={i}
          button
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <ListItemText primary={text} />
        </ListItem>
      )
    );
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
            <SellMyCar />
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
              <Button>
                <Instagram />
              </Button>
              <Button>
                <YouTube />
              </Button>
              <Button>
                <Facebook />
              </Button>
              <Button>
                <LinkedIn />
              </Button>
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
