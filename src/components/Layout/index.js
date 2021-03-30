import { useState } from "react";
// import Drawer from "./drawer";
import AppBar from "./appBar";

import dynamic from "next/dynamic";

const Drawer = dynamic(() => import("./drawer"), {
  loading: <h1>Please wait</h1>,
});

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
