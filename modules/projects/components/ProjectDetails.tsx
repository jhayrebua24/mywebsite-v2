import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

interface IProjectDetails {
  data: {
    img: string;
    title: string;
    description: string;
    techUsed: string[];
  };
}

function ProjectDetails({ data }: IProjectDetails): JSX.Element {
  const [isHover, setHover] = useState(false);

  return (
    <motion.div
      whileHover={{
        scale: 1.025,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex flex-col h-full bg-white hover:bg-primary p-4 rounded-lg shadow-lg cursor-pointer"
    >
      <h1
        className={clsx(
          "text-3xl lg:text-xl xl:text-2xl font-semibold mb-4",
          isHover ? "text-white " : "text-primary"
        )}
      >
        {data.title}
      </h1>
      <div className="object-contain overflow-hidden w-full h-72 lg:h-56 flex">
        <img src={data.img} alt={data.title} className="w-full" />
      </div>
      <p
        className={clsx(
          "tracking-tight text-base leading-5 text-left  mt-4",
          isHover ? "text-gray-100" : "text-gray-600"
        )}
      >
        {data.description}
      </p>
      <h3 className={clsx("mt-3 mb-2 text-semibold", isHover && "text-white")}>
        Technology used:
      </h3>
      <div className="grid grid-cols-3 w-full text-sm font-light">
        {data.techUsed.map((tech) => (
          <p
            className={clsx(
              "flex items-center truncate",
              isHover ? "text-white" : "text-black "
            )}
          >
            <span
              className={clsx(
                "h-2 w-2 block rounded-full mr-2",
                isHover ? " bg-brand" : " bg-primary"
              )}
            />{" "}
            {tech}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectDetails;
