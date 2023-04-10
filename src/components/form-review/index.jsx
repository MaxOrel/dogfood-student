import { useForm } from 'react-hook-form';
import Form from '../form';
import FormInput from '../form-input';
import FormButton from '../form-button';
import s from './styles.module.css';
import cn from 'classnames';
import Rating from '../rating';
import { useState } from 'react';

function FormReview({ title = 'Отзыв о товаре', productId, setProduct }) {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onBlur" })
    const [rating, setRating] = useState(5);
    const handleSubmitFormReview = (data) => {
        console.log('handleSubmitFormReview', { ...data, rating });
        reset();
        setRating(5)
    }
    const textRegister = register('text', {
        required: {
            value: true,
            message: 'Обязательное поле'
        }
    })

    return (
        <>
            <h2>{title}</h2>
            <Rating currentRating={rating} setCurrentRating={setRating} isEditable />
            <Form handleFormSubmit={handleSubmit(handleSubmitFormReview)}>
                <FormInput
                    {...textRegister}
                    typeTag="textarea"
                    id="text"
                    placeholder="Напишите текст отзыва"
                />
                {errors?.text && <p className="errorMessage">{errors?.text?.message}</p>}


                <FormButton type="submit" color="pramary">Отправить отзыв</FormButton>
            </Form>
        </>

    );
}

export default FormReview;