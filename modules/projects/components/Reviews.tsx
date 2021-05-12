import times from "lodash/times";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface IReviews {
  data: {
    review: string;
    rating: number;
  };
}

function Reviews({ data }: IReviews): JSX.Element {
  return (
    <div className="h-56 flex flex-col items-center justify-center space-y-6 max-w-screen-md">
      <p className="text-center italic text-white">{`"${data.review}"`}</p>
      <div className="flex space-x-2 text-primary">
        {times(5).map((val) => {
          const total = (val + 1) * 2;
          if (data.rating >= total) return <BsStarFill />;
          if (data.rating > total - 2) return <BsStarHalf />;
          return <BsStar />;
        })}
      </div>
    </div>
  );
}

export default Reviews;
