import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HiArrowNarrowDown } from "react-icons/hi";
import { variants } from "../constants";

function HeroText(): JSX.Element {
  return (
    <div className="flex flex-grow h-full flex-col justify-center items-center md:items-start w-full md:w-max space-y-4 md:space-y-6">
      <div className="flex flex-col space-y-6">
        <div className="text-white capitalize text-5xl  md:text-5xl lg:text-7xl 2xl:text-8xl tracking-tighter font-semibold  text-center md:text-left">
          <motion.p
            animate="animate"
            initial="initial"
            variants={variants.firstText}
          >
            Building
          </motion.p>
          <motion.p
            animate="animate"
            initial="initial"
            variants={variants.secondText}
          >
            responsive &amp; Robust
          </motion.p>

          <motion.p
            animate="animate"
            initial="initial"
            variants={variants.thirdText}
          >
            Websites
          </motion.p>
        </div>
        <div className="flex md:hidden">
          <Image
            src="/img/HeroImage.svg"
            alt="coding-image"
            width={600}
            height={250}
            quality={100}
          />
        </div>
        <motion.div
          animate="animate"
          initial="initial"
          variants={variants.name}
          className="text-xl pl-2 leading-6 text-white text-center md:text-left"
        >
          <p className="font-semibold">Jesson Jei Rebua</p>
          <p>Fullstack Web developer</p>
        </motion.div>
      </div>
      <Link
        to="skills"
        className="flex flex-col items-center mt-8 md:mt-10 pb-4 cursor-pointer ml-2  animate-pulse"
        smooth
        duration={500}
      >
        <span className="text-pink-500 font-semibold">Scroll here</span>
        <HiArrowNarrowDown className="mt-2 text-pink-500" size={50} />
      </Link>
    </div>
  );
}

export default HeroText;
