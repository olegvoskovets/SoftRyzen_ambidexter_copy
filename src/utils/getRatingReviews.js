import Star from 'public/icons/star.svg';

export const ratingReviews = string => {
  let result = '';

  switch (string) {
    case '5':
      result = Array(5).fill('');
      break;
    case '4':
      result = Array(4).fill('');
      break;
    case '3':
      result = Array(3).fill('');
      break;
    case '2':
      result = Array(2).fill('');
      break;
    case '1':
      result = Array(1).fill('');
      break;

    default:
      result = Array(5).fill('');
  }
  return result.map((_, i) => (
    <Star key={i} className="w-4 h-4 xl:w-6 xl:h-6" />
  ));
};
