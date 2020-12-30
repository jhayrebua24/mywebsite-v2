// import Image from "next/image";
import { motion } from "framer-motion";

function HeroImage(): JSX.Element {
  return (
    <div className="hidden md:flex flex-grow h-full flex-col items-center justify-center w-full overflow-hidden">
      <div className="flex w-full h-full lg:h-auto overflow-hidden  items-center justify-center">
        <motion.img
          src="/img/HeroImage.svg"
          alt="coding"
          width={900}
          height={600}
          initial={{
            x: 1000,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
          // quality={100}
        />
      </div>
      <div className="w-full hidden lg:block overflow-hidden flex items-center justify-center">
        <motion.img
          src="/img/Git.svg"
          alt="git"
          width={900}
          height={200}
          initial={{
            y: 1000,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
          // quality={100}
        />
      </div>
    </div>
  );
}

export default HeroImage;
