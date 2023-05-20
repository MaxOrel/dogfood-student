import s from "./styles.module.css";

import Rating from '../rating';
import { formattedDate } from '../../utils/products';
import { TUser } from '../../types';

interface IReviewProps {
  author: TUser,
  text: string,
  city?: string,
  created_at?: Date,
  rating: number,
  _id: string,
  photos?: string
}
export function Review({ author, text, city, created_at, rating, _id, photos }: IReviewProps) {
  return (
    <div className={s.review}>
      <div className={s.review__header}>
        <div className={s.review__name}>{author.name}</div>
        <div className={s.review__date}>{formattedDate(created_at as Date)}</div>
      </div>
      <Rating currentRating={rating} />
      {city && <div className={s.review__city}>{city}</div>}
      <p className={s.review__text}>«{text}»</p>
    </div>
  );
}
