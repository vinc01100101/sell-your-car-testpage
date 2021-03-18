import SectionHeading from "@/components/SectionHeading";
import Section__ from "@/components/SectionMargin";
import SectionIntro from "@/components/SectionIntro";

export default function Home() {
  return (
    <main style={{ overflowX: "hidden" }}>
      <SectionHeading />
      <Section__ />
      <SectionIntro />
    </main>
  );
}
