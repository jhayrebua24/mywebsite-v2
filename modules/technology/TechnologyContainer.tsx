import Banner from "modules/common/Banner";
import Container from "modules/common/Container";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import skills from "./skills";

function TechnologyContainer(): JSX.Element {
  return (
    <Element name="technologies" className="bg-white pb-8">
      <div className="h-12 bg-brand">
        <Banner
          position="left"
          text="Technologies"
          style={{
            marginBottom: -45,
          }}
        />
      </div>
      <Container className="pt-24 pb-8 w-full mx-auto max-w-screen-2xl">
        <Swiper
          spaceBetween={50}
          speed={500}
          wrapperTag="ul"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          autoplay={{
            delay: 800,
          }}
          loop
          pagination
        >
          {skills.map((skill) => (
            <SwiperSlide className="flex justify-center px-12 mb-12">
              <div className="flex flex-col space-y-1 items-center">
                {skill.title === "TailwindCSS" ? (
                  <div className="flex items-center h-32">
                    <img src={skill.img} width={200} alt={skill.title} />
                  </div>
                ) : (
                  <img
                    src={skill.img}
                    alt={skill.title}
                    className="w-32 h-32"
                  />
                )}
                <p>{skill.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Element>
  );
}

export default TechnologyContainer;
