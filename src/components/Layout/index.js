import { useState } from "react";
import Drawer from "./drawer";
import AppBar from "./appBar";

const layOut = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (isOpen) => (e) => {
    setIsDrawerOpen(isOpen);
  };

  return (
    <>
      <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      <AppBar toggleDrawer={toggleDrawer} />
      {children}
    </>
  );
};

export default layOut;
