import { MouseEvent, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Form from '../form';
import FormInput from '../form-input';
import FormButton from '../form-button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispath } from '../../storage/hook';
import { registerUser } from '../../storage/user/user-slice';

type FormValues = {
    email: string;
    group: string;
    password: string;
};

interface IFormRegisterProps {
    onNavigateLogin: (e: MouseEvent<HTMLButtonElement>) => void;
}


function Register({ onNavigateLogin }: IFormRegisterProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ mode: "onBlur" })
    const dispatch = useAppDispath();

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

    const passwordRegister = register('password', {
        required: {
            value: true,
            message: 'Обязательное поле'
        },
        pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: "Пароль должен содержать минимум восемь символов, одну букву латинского алфавита и одну цифру"
        }
    })

    const onSubmit: SubmitHandler<FormValues> = (dataForm) => {
        dispatch(registerUser(dataForm))
    }

    const groupRegister = register('group', {
        required: {
            value: true,
            message: 'Обязательное поле'
        },
        pattern: {
            value: /^group-[0-9]{1,3}$/,
            message: "Группа должна соответсвоать формату group-номер"
        }
    })
    return (

        <Form title="Регистрация" handleFormSubmit={handleSubmit(onSubmit)}>
            <FormInput
                {...emailRegister}
                id="email"
                type="text"
                placeholder="email"
            />
            {errors?.email && <p className="errorMessage">{errors?.email?.message}</p>}

            <FormInput
                {...groupRegister}
                id="group"
                type="text"
                placeholder="Id группы в формате group-номер "
            />
            {errors?.group && <p className="errorMessage">{errors?.group?.message}</p>}

            <FormInput
                {...passwordRegister}
                id="password"
                type="password"
                placeholder="Пароль"
            />
            {errors?.password && <p className="errorMessage">{errors?.password?.message}</p>}




            <p className="infoText">Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфиденциальности и соглашаетесь на информационную рассылку.</p>

            <FormButton type="submit" color="pramary">Зарегистрироваться</FormButton>
            <FormButton type="button" color="secondary" onClick={onNavigateLogin}>Войти</FormButton>
        </Form>

    );
}

export default Register;