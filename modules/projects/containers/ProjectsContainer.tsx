import Banner from "modules/common/Banner";
import Container from "modules/common/Container";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import ProjectDetails from "../components/ProjectDetails";
import { projects, reviews } from "../constants";
import Reviews from "../components/Reviews";

SwiperCore.use([Navigation, Pagination]);

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
      <Container className="mt-24">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
          {projects.map((proj) => (
            <ProjectDetails key={proj.title} data={proj} />
          ))}
        </div>
        <div className="max-w-screen-lg mx-auto w-full my-16">
          <h1 className="text-center mt-4 text-2xl text-white font-medium italic">
            Reviews from my freelancing clients.
          </h1>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            wrapperTag="ul"
            navigation
            pagination
            autoplay
          >
            {reviews.map((review) => (
              <SwiperSlide className="flex justify-center px-12">
                <Reviews data={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Element>
  );
}

export default ProjectsContainer;
