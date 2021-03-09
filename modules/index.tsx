import HeroContainer from "modules/hero/containers/HeroContainer";
import Header from "./common/Header";
import ProjectsContainer from "./projects/containers/ProjectsContainer";
import SkillsContainer from "./skills/containers/SkillsContainer";

function index(): JSX.Element {
  return (
    <div className="flex flex-col">
      <Header />
      <HeroContainer />
      <SkillsContainer />
      <ProjectsContainer />
    </div>
  );
}

export default index;
