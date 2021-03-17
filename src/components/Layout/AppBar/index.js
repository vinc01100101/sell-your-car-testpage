import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Grid,
  Typography,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import Link from "next/link";
import { SellMyCar } from "@/SVG";

const appBar = ({ toggleDrawer }) => {
  return (
    <AppBar color="secondary">
      <Toolbar>
        <Grid container>
          <Grid item xs={1}>
            <Hidden smUp>
              <IconButton
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Grid>
          <Grid item xs={10} container justify="center" alignItems="center">
            {/* <Typography
              component="div"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "red",
              }}
            /> */}

            <Link href="/">
              <a>
                <SellMyCar />
              </a>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default appBar;
