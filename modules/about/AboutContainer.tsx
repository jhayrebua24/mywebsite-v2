import Banner from "modules/common/Banner";
import Container from "modules/common/Container";
import { Element } from "react-scroll";

function AboutContainer(): JSX.Element {
  return (
    <Element
      name="about"
      className="about-container bg-brand pt-12 pb-16 relative"
    >
      <div className="skew-bg" />
      <Banner
        position="right"
        text="About me"
        style={{
          position: "absolute",
          top: -40,
        }}
      />
      <Container className="pt-24 pb-8 w-full mx-auto max-w-screen-2xl flex items-center space-x-12">
        <div className="w-full hidden md:block">
          <img src="/img/about/about-me.png" alt="about" className="w-full " />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex h-48 w-48 overflow-hidden rounded-full flex items-center">
            <img
              src="/img/about/jhay.jpeg"
              alt="about"
              className="w-full h-64 object-contain"
            />
          </div>
          <div className="flex flex-col items-center text-white mt-8">
            <p className="text-2xl font-semibold">Jesson Jei M. Rebua</p>
            <p className="text-sm italic">&quot;jhay&quot;</p>
          </div>
          <div className="text-white mt-8 max-w-sm w-full text-justify">
            <p>
              Good day! I&apos;m a Fullstack Web Developer based from the
              Philippines with four years of experience on building user
              interfaces, APIs, analyzing and design techniques in solving
              business problems using information technology.
            </p>
            <p className="mt-4">
              My primary weapon for building a Web Applications is ReactJS for
              the frontend and Laravel for the backend. I have an experience on
              building a SaaS, Platform, Corporate Systems, Websites, Kiosk UI
              and Mobile App(React native).
            </p>
          </div>
        </div>
      </Container>
    </Element>
  );
}

export default AboutContainer;
