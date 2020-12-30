import Image from "next/image";
import { motion } from "framer-motion";
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
            responsive & user friendly
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
            height={300}
            quality={100}
          />
        </div>
        <motion.div
          animate="animate"
          initial="initial"
          variants={variants.name}
          className="text-base pl-2 leading-4 text-white text-center md:text-left"
        >
          <p className="font-semibold">Jesson Jei Rebua</p>
          <p>Fullstack Web developer</p>
        </motion.div>
      </div>
      <motion.button
        whileHover={{
          scale: 0.98,
        }}
        className="bg-primary text-white text-xl p-4 w-48 md:w-48 rounded-full shadow-lg font-semibold"
        type="button"
      >
        Learn more.
      </motion.button>
    </div>
  );
}

export default HeroText;
