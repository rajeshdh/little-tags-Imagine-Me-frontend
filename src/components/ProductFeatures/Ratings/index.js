
import RatingStar from "./RatingStar";

function Ratings({ ratings }) {
  const numberOfStars = 5;
  const numberOfStarsArray = Array.apply(null, Array(numberOfStars));
  return numberOfStarsArray.map((_, index) => {
    const starRating = index + 1;
    const isStarred = starRating <= ratings
    return <RatingStar
      key={starRating}
      isStarred={isStarred}
    />
  })
}

export default Ratings;