// import SectionHeader from "@/components/SectionHeader";
// import SectionBody from "@/components/SectionBody";
// import SectionFooter from "@/components/SectionFooter";

// //modals
// import Modals from "@/components/Modals";

import dynamic from "next/dynamic";

const SectionHeader = dynamic(() => import("@/components/SectionHeader"), {
  loading: <h1>Please Wait..</h1>,
});
const SectionBody = dynamic(() => import("@/components/SectionBody"), {
  loading: <h1>Please Wait..</h1>,
});
const SectionFooter = dynamic(() => import("@/components/SectionFooter"), {
  loading: <h1>Please Wait..</h1>,
});
const Modals = dynamic(() => import("@/components/Modals"), {
  loading: <h1>Please Wait..</h1>,
});

export default function Home() {
  return (
    <main style={{ overflowX: "hidden" }}>
      <Modals />
      <SectionHeader />
      <SectionBody />
      <SectionFooter />
    </main>
  );
}
