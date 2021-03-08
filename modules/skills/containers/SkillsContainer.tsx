import Banner from "modules/common/Banner";
import Container from "modules/common/Container";
import { Element } from "react-scroll";
import SkillsCard from "../components/SkillsCard";
import { skillset } from "../constants";

function SkillsContainer(): JSX.Element {
  return (
    <Element name="skills" className="bg-white pb-8">
      <div className="h-12 bg-brand">
        <Banner
          position="left"
          text="Skills"
          style={{
            marginBottom: -45,
          }}
        />
      </div>
      <Container className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-x-8 gap-y-4 fhd:gap-x-24 py-8 md:py-12">
        {skillset.map((data) => (
          <SkillsCard data={data} />
        ))}
      </Container>
    </Element>
  );
}

export default SkillsContainer;
