import Image from "next/image";
import { motion } from "framer-motion";

function HeroImage(): JSX.Element {
  return (
    <div className="hidden md:flex flex-grow h-full flex-col items-center justify-center w-full overflow-hidden">
      <motion.div
        className="flex w-full h-full lg:h-auto overflow-hidden  items-center justify-center"
        initial={{
          x: 1000,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/img/HeroImage.svg"
          alt="coding"
          width={900}
          height={500}
          quality={100}
        />
      </motion.div>
    </div>
  );
}

export default HeroImage;
