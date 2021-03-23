import { AppBar, Toolbar, IconButton, Hidden, Grid } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import Link from "next/link";

//svg piece
import { sellmycar } from "@/svgStore/svgCall";

const appBar = ({ toggleDrawer }) => {
  return (
    <>
      <AppBar color="secondary">
        <Toolbar>
          <Grid container>
            <Grid item xs={1}>
              {/* <Hidden smUp> */}
              <IconButton
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              {/* </Hidden> */}
            </Grid>
            <Grid item xs={10} container justify="center" alignItems="center">
              <Link href="/">
                <a>{sellmycar}</a>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* ----another Toolbar to make items behind the AppBar component visible---- */}
      <Toolbar />
    </>
  );
};

export default appBar;
