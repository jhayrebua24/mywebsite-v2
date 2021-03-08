import Container from "modules/common/Container";
import { Element } from "react-scroll";
import HeroImage from "../components/HeroImage";
import HeroText from "../components/HeroText";

function HeroContainer(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen md:h-screen w-full bg-brand">
      <Element
        name="hero"
        className="flex flex-col justify-center items-center h-full pt-24 pb-16 lg:pb-0"
      >
        <Container className="h-full flex flex-col md:flex-row overflow-hidden">
          <HeroText />
          <HeroImage />
        </Container>
      </Element>
    </div>
  );
}

export default HeroContainer;
