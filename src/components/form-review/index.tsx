import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Form from '../form';
import FormInput from '../form-input';
import FormButton from '../form-button';
import s from './styles.module.css';
import cn from 'classnames';
import Rating from '../rating';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCreateReview } from '../../storage/single-product/single-product-slice';
import { useAppDispath } from '../../storage/hook';
import { ReviewBodyDto } from '../../utils/api';

interface IFormReviewProps {
    title: string,
    productId: string
}

type FormValues = {
    text: string;
    rating: number;
};


function FormReview({ title = 'Отзыв о товаре', productId }: IFormReviewProps) {
    const dispatch = useAppDispath()
    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({ mode: "onBlur" })
    const handleSubmitFormReview: SubmitHandler<FormValues> = (data) => {
        dispatch(fetchCreateReview({ productId, data }))
        reset();
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
            <Controller
                render={({ field }) => (
                    <Rating currentRating={field.value} setCurrentRating={field.onChange} isEditable error={errors.rating} />
                )}
                name="rating"
                control={control}
                rules={{
                    required: {
                        value: true,
                        message: 'Укажите рейтинг'
                    }
                }}
            />

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