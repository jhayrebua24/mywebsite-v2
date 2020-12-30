import Banner from "modules/common/Banner";
import { Element } from "react-scroll";

function SkillsContainer(): JSX.Element {
  return (
    <Element name="skills" className="bg-white pb-8 pt-16 relative">
      <Banner position="left" text="Skills" />
      <div>test</div>
    </Element>
  );
}

export default SkillsContainer;
