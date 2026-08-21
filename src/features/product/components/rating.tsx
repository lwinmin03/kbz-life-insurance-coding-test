import { Star } from "lucide-react";

interface RatingProps {
  rating?: number;
  maxRating?: number;
  totalReviews?: number;
  showReviews?: boolean;
}

export const Rating = ({
  rating = 4.6,
  maxRating = 5.0,
  totalReviews = 556,
  showReviews = true,
}: RatingProps) => {
  return (
    <div className="flex font-proxima items-center gap-3 text-secondary-brand">
      {/* Stars Container */}
      <div className="flex items-center gap-1">
        {Array.from({ length: Math.floor(maxRating) }, (_, index) => {
          const fillPercentage = Math.max(
            0,
            Math.min(100, (rating - index) * 100),
          );

          return (
            <div key={index} className="relative inline-block h-5 w-5">
              <Star className="absolute left-0 top-0 h-5 w-5 fill-slate-200 text-transparent" />

              <div
                className="absolute left-0 top-0 overflow-hidden h-5"
                style={{ width: `${fillPercentage}%` }}
              >
                <Star className="h-5 w-5 fill-amber-400 text-transparent" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-1.5 text-base font-semibold">
        <span className="">{rating.toFixed(1)}</span>
        <span className="">/</span>
        <span className="">{maxRating.toFixed(1)}</span>

        {showReviews && (
          <span className="font-normal text-cool-grey">({totalReviews})</span>
        )}
      </div>
    </div>
  );
};

export default Rating;
