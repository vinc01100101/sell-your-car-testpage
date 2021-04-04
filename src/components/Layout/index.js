import { useState } from "react";
//layout children modules
import Drawer from "./drawer";
import AppBar from "./appBar";

export default function layOut({ children }) {
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
}
