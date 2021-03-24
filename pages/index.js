import SectionHeader from "@/components/SectionHeader";
import SectionBody from "@/components/SectionBody";
import SectionFooter from "@/components/SectionFooter";
import { useEffect } from "react";
//modals
import Modals from "@/components/Modals";

export default function Home() {
  //google analytics
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-6L6EWL6H47");

    console.log(window.dataLayer);
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
