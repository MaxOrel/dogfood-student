import s from './styles.module.css';
import { ReactComponent as StarIcon } from './img/star.svg';
import { useEffect, useState } from 'react';
import cn from 'classnames';

const MAX_COUNT_RATING = 5;
interface IRatingProps {
    isEditable?: boolean, currentRating: number, setCurrentRating?: (data: number) => void, error?: any
}
function Rating({ isEditable = false, currentRating, setCurrentRating, error }: IRatingProps) {
    const [ratingArray, setRatingArray] = useState(new Array(MAX_COUNT_RATING).fill(<></>))

    const constructRating = (filledRating: number) => {
        const updateArray = ratingArray.map((ratingElement, index) => {
            return (
                <StarIcon
                    className={cn(s.star,
                        {
                            [s.filled]: index < filledRating,
                            [s.editable]: isEditable,
                        })}
                    onMouseEnter={() => changeDisplay(index + 1)}
                    onMouseLeave={() => changeDisplay(currentRating)}
                    onClick={() => changeRating(index + 1)}
                />
            )
        })

        setRatingArray(updateArray)

    }

    function changeDisplay(rating: number) {
        constructRating(rating)
    }

    function changeRating(rating: number) {
        if (!isEditable || !setCurrentRating) return;
        setCurrentRating(rating)
    }


    useEffect(() => {
        constructRating(currentRating);
    }, [currentRating])


    return (
        <div>
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
            {error && <span>{error?.message}</span>}
        </div>


    );
}

export default Rating;