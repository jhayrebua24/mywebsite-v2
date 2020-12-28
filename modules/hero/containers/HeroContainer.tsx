import Container from "modules/common/Container";
import Header from "modules/common/Header";
import HeroImage from "../components/HeroImage";
import HeroText from "../components/HeroText";

function HeroContainer(): JSX.Element {
  return (
    <div className="flex flex-col h-screen w-full bg-brand">
      <Header />
      <div className="flex h-full">
        <Container className="h-full flex flex-col md:flex-row  overflow-hidden">
          <HeroText />
          <HeroImage />
        </Container>
      </div>
    </div>
  );
}

export default HeroContainer;
