import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Form from '../form';
import FormInput from '../form-input';
import FormButton from '../form-button';
import { useAppDispath } from '../../storage/hook';
import s from './styles.module.css';
type FormValues = {
    email: string;
    group: string;
    password: string;
};

function ResetPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ mode: "onBlur" })
    const dispatch = useAppDispath();

    const onSubmit: SubmitHandler<FormValues> = (dataForm) => {
        console.log('cbSubmitFormResetPassword', dataForm);
    }

    const emailRegister = register('email', {
        required: {
            value: true,
            message: 'Обязательное поле'
        },
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Email не соотвествует формату электронной почты"
        }
    })

    return (

        <Form title="Восстановление пароля" handleFormSubmit={handleSubmit(onSubmit)}>
            <p className="infoText">Для получения временного пароля необходимо ввести email, указанный при регистрации.</p>

            <FormInput
                {...emailRegister}
                id="email"
                type="text"
                placeholder="email"
            />
            {errors?.email && <p className="errorMessage">{errors?.email?.message}</p>}

            <p className="infoText">Срок действия временного пароля 24 ч.</p>

            <FormButton type="submit" color="pramary" extraClass={s.formButton}>Отправить</FormButton>
        </Form>

    );
}

export default ResetPassword;