import SectionHeader from "@/components/SectionHeader";
import SectionBody from "@/components/SectionBody";
import SectionFooter from "@/components/SectionFooter";

//modals
import Modals from "@/components/Modals";

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
