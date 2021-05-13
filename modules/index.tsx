import HeroContainer from "modules/hero/containers/HeroContainer";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import AboutContainer from "./about/AboutContainer";
import Header from "./common/Header";
import ProjectsContainer from "./projects/containers/ProjectsContainer";
import SkillsContainer from "./skills/containers/SkillsContainer";
import TechnologyContainer from "./technology/TechnologyContainer";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function index(): JSX.Element {
  return (
    <div className="flex flex-col">
      <Header />
      <HeroContainer />
      <SkillsContainer />
      <ProjectsContainer />
      <TechnologyContainer />
      <AboutContainer />
    </div>
  );
}

export default index;
