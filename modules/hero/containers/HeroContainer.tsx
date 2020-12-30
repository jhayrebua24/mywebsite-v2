import Container from "modules/common/Container";
import { Element } from "react-scroll";
import HeroImage from "../components/HeroImage";
import HeroText from "../components/HeroText";

function HeroContainer(): JSX.Element {
  return (
    <div className="flex flex-col h-screen w-full bg-brand">
      <Element name="hero" className="flex h-full">
        <Container className="h-full flex flex-col md:flex-row  overflow-hidden">
          <HeroText />
          <HeroImage />
        </Container>
      </Element>
    </div>
  );
}

export default HeroContainer;
