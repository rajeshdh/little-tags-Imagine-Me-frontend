import RatingStar from './RatingStar';

function Ratings({ ratings }) {
  const numberOfStars = 5;
  const numberOfStarsArray = Array.apply(null, Array(numberOfStars));
  return numberOfStarsArray.map((_, index) => {
    const starRating = index + 1;
    const isStarred = starRating <= ratings;
    const isPartiallyFullStar =
      starRating > ratings && starRating - 1 < ratings;

    return (
      <RatingStar
        key={starRating}
        isStarred={isStarred}
        isPartiallyFullStar={isPartiallyFullStar}
      />
    );
  });
}

export default Ratings;
