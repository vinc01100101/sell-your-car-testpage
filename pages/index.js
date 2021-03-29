import SectionHeader from "@/components/SectionHeader";
import SectionBody from "@/components/SectionBody";
import SectionFooter from "@/components/SectionFooter";

//modals
import Modals from "@/components/Modals";

export default function Home({ locations }) {
  return (
    <main style={{ overflowX: "hidden" }}>
      <Modals locations={locations} />
      <SectionHeader />
      <SectionBody />
      <SectionFooter />
    </main>
  );
}

export const getServerSideProps = async () => {
  const dataLocations = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const jsonLocations = await dataLocations.json();
  const locations = jsonLocations.map((data) => data.address.city);

  return {
    props: {
      locations,
    },
  };
};
