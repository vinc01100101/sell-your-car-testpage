import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
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
              {[facebook, instagram, linkedin, youtube].map((svg, i) => (
                <Button key={i}>{svg}</Button>
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
