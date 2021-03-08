import Image from "next/image";

interface Props {
  data: {
    image: string;
    titleBig: string;
    titleSmall: string;
    description: string;
  };
}

function SkillsCard({ data }: Props): JSX.Element {
  return (
    <div className="flex space-y-4 fhd:space-y-10 flex-col text-letter border-2 border-brand rounded-xl p-8 w-full h-full">
      <Image
        width={250}
        height={250}
        src={data.image}
        alt={data.titleBig}
        quality={100}
      />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl fhd:text-5xl font-bold">{data.titleBig}</h1>
        <h1 className="text-3xl fhd:text-4xl font-semibold">
          {data.titleSmall}
        </h1>
      </div>
      <p className="text-lg fhd:text-xl tracking-tight text-justify font-semibold">
        {data.description}
      </p>
    </div>
  );
}

export default SkillsCard;
