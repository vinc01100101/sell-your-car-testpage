import SectionHeader from "@/components/SectionHeader";
import SectionBody from "@/components/SectionBody";
import SectionFooter from "@/components/SectionFooter";

export default function Home() {
  return (
    <main style={{ overflowX: "hidden" }}>
      <SectionHeader />
      <SectionBody />
      <SectionFooter />
    </main>
  );
}
