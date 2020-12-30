import HeroContainer from "modules/hero/containers/HeroContainer";
import Header from "./common/Header";

function index(): JSX.Element {
  return (
    <div className="flex flex-col">
      <Header />
      <HeroContainer />
    </div>
  );
}

export default index;
