import { useEffect, useState } from 'react';
import s from "./styles.module.css";
import { useForm } from 'react-hook-form';

function RegisterForm({ handleForm }) {

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" })

    const cbSubmitForm = (dataForm) => {
        console.log(errors);
        console.log(dataForm);
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
        <form className={s.form} onSubmit={handleSubmit(cbSubmitForm)} noValidate>
            <h3>Регистрация</h3>
            <input
                {...register('name', {
                    required: {
                        value: true,
                        message: 'Обязательное поле'
                    },
                    minLength: {
                        value: 3,
                        message: "Минимальная длина имени 3 символа"
                    }
                })}
                type="text"
                placeholder="Имя"
            />
            {errors?.name && <p className={s.errorMessage}>{errors?.name?.message}</p>}
            <input
                {...emailRegister}
                type="email"
                placeholder="Введите email"
                autoComplete="off"
            />
            {errors?.email && <p className={s.errorMessage}>{errors?.email?.message}</p>}
            <input
                {...register('password', {
                    required: true,
                    pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message: "Пароль должен содержать минимум восемь символов, одну букву латинского алфавита и одну цифру"
                    }
                })}
                type="password"
                placeholder="Введите пароль"
                autoComplete="off"
            />
            {errors?.password && <p className={s.errorMessage}>{errors?.password?.message}</p>}
            <button>Зарегистрироваться</button>
        </form>
    );
}

export default RegisterForm;