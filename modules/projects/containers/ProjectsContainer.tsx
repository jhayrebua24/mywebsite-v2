import Banner from "modules/common/Banner";
import Container from "modules/common/Container";
import { Element } from "react-scroll";

function ProjectsContainer(): JSX.Element {
  return (
    <Element name="projects" className="bg-brand pb-8 relative">
      <Banner
        position="right"
        text="Featured Projects"
        style={{
          position: "absolute",
          top: -40,
        }}
      />
      <Container className="mt-12">qweqw</Container>
    </Element>
  );
}

export default ProjectsContainer;
