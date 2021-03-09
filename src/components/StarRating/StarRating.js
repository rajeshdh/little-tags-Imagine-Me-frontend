import StarIcon from '../../IconSet/StarIcon';

export default function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i < 6; i++) {
    if (i > rating) {
      stars.push(
        <StarIcon
          className="mr-1 fill-current text-gray-300"
          key={`star_id_${i}`}
        />,
      );
    } else {
      stars.push(
        <StarIcon
          className="mr-1 fill-current text-yellow-400"
          key={`star_id_${i}`}
        />,
      );
    }
  }
  return <div className="flex items-center">{stars}</div>;
}
