import Image from "next/image";

function HeroImage(): JSX.Element {
  return (
    <div className="hidden md:flex flex-grow h-full flex-col items-center md:justify-center w-full overflow-hidden">
      <div className=" w-full h-full lg:h-auto overflow-hidden  items-center justify-center">
        <Image
          src="/img/HeroImage.svg"
          alt="coding-image"
          width={900}
          height={600}
          quality={100}
        />
      </div>
      <div className="w-full hidden lg:block overflow-hidden flex items-center justify-center">
        <Image
          src="/img/Git.svg"
          alt="coding-image"
          width={900}
          height={200}
          quality={100}
        />
      </div>
    </div>
  );
}

export default HeroImage;
