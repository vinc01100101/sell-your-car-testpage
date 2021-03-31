// import SectionHeader from "@/components/SectionHeader";
// import SectionBody from "@/components/SectionBody";
// import SectionFooter from "@/components/SectionFooter";
// import Modals from "@/components/Modals";

import dynamic from "next/dynamic";

const DynamicSectionHeader = dynamic(
  () => import("@/components/SectionHeader"),
  {
    loading: () => <h1>Loading Header..</h1>,
  }
);
const DynamicSectionBody = dynamic(() => import("@/components/SectionBody"), {
  loading: () => <h1>Loading Body..</h1>,
});
const DynamicSectionFooter = dynamic(
  () => import("@/components/SectionFooter"),
  {
    loading: () => <h1>Loading Footer..</h1>,
  }
);
const DynamicModals = dynamic(() => import("@/components/Modals"), {
  loading: () => <h1>Loading Modals..</h1>,
});

import { useState, useEffect } from "react";
let SectionHeader = () => <div />;
let SectionBody = () => <div />;
let SectionFooter = () => <div />;
let Modals = () => <div />;

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(() => false);
  useEffect(() => {
    SectionHeader = DynamicSectionHeader;
    SectionBody = DynamicSectionBody;
    SectionFooter = DynamicSectionFooter;
    Modals = DynamicModals;
    setIsLoaded(true);
  }, []);
  return (
    <main style={{ overflowX: "hidden" }}>
      <Modals />
      <SectionHeader />
      <SectionBody />
      <SectionFooter />
    </main>
  );
}
