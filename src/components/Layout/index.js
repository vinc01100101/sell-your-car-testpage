import { useState } from "react";
import Drawer from "./Drawer";
import AppBar from "./AppBar";
import { Hidden } from "@material-ui/core";

const layOut = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (isOpen) => (e) => {
    setIsDrawerOpen(isOpen);
  };

  return (
    <>
      <Hidden smUp>
        <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      </Hidden>

      <AppBar toggleDrawer={toggleDrawer} />
      {children}
    </>
  );
};

export default layOut;
