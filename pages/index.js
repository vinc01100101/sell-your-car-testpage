import SectionHeader from "@/components/SectionHeader";
import SectionBody from "@/components/SectionBody";
import SectionFooter from "@/components/SectionFooter";
import { useEffect } from "react";

export default function Home() {
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
      <SectionHeader />
      <SectionBody />
      <SectionFooter />
    </main>
  );
}
