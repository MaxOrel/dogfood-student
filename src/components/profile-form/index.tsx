import { SubmitHandler, useForm } from 'react-hook-form';
import validator from 'validator';
import { useMemo } from 'react';
import Form from '../form';
import FormInput from '../form-input';
import FormButton, { FromButtonSize } from '../form-button';
import { useAppDispath, useAppSelector } from '../../storage/hook';
import s from './styles.module.css';
import { ContentHeader } from '../content-header';
import { editedUser } from '../../storage/user/user-slice';

type FormValuesUserData = {
    email: string;
    name: string;
    about: string;
    avatar: string;
};

type FormValuesUserPassword = {
    password: string;
};

function ProfileForm() {
    const { about, name, email, avatar } = useAppSelector(store => store.user.data) || {};
    const { register: registerUserInfo, handleSubmit: handleSubmitUserInfo, formState: { errors: errorsUserInfo } } = useForm<FormValuesUserData>({ mode: "onBlur", defaultValues: useMemo(() => ({ about, name, email, avatar }), [about, name, email, avatar]) || {} })
    const { register: registerUserPassword, handleSubmit: handleSubmitUserPassword, formState: { errors: errorsUserPassword } } = useForm<FormValuesUserPassword>({ mode: "onBlur" })

    const dispatch = useAppDispath();

    const emailRegister = registerUserInfo('email', {
        required: {
            value: true,
            message: 'Обязательное поле'
        },
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Email не соотвествует формату электронной почты"
        }
    })

    const nameRegister = registerUserInfo('name', {
        required: {
            value: true,
            message: 'Обязательное поле'
        },
    })

    const aboutRegister = registerUserInfo('about', {
        minLength: {
            value: 3,
            message: 'Минимальная длинна поля 3 символа',
        }
    })

    const avatarRegister = registerUserInfo('avatar', {
        validate: (value) => {
            return validator.isURL(value)
        },
    })

    const passwordRegister = registerUserPassword('password', {
        required: {
            value: true,
            message: 'Обязательное поле'
        },
        pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: "Пароль должен содержать минимум восемь символов, одну букву латинского алфавита и одну цифру"
        }
    })

    const onSubmitUserInfo: SubmitHandler<FormValuesUserData> = (dataForm) => {
        console.log(dataForm);
        dispatch(editedUser(dataForm))
    }


    const onSubmitUserPassword: SubmitHandler<FormValuesUserPassword> = (dataForm) => {
        console.log(dataForm);
        // dispatch(registerUser(dataForm))
    }

    return (
        <>
            <ContentHeader title='Мои данные' textButton='Назад' to="/profile" />
            <Form handleFormSubmit={handleSubmitUserInfo(onSubmitUserInfo)} align="left">
                <div className={s.formRow}>
                    <label className={s.formLabel}>
                        <FormInput
                            {...nameRegister}
                            id="name"
                            type="text"
                            placeholder="Введите ваше имя"
                        />
                        {errorsUserInfo?.name && <p className="errorMessage">{errorsUserInfo?.name?.message}</p>}
                    </label>

                    <label className={s.formLabel}>
                        <FormInput
                            {...aboutRegister}
                            id="about"
                            type="text"
                            placeholder="Описание профессии"
                        />
                        {errorsUserInfo?.about && <p className="errorMessage">{errorsUserInfo?.about?.message}</p>}
                    </label>
                </div>

                <div className={s.formRow}>
                    <label className={s.formLabel}>
                        <FormInput
                            {...avatarRegister}
                            id="avatar"
                            type="url"
                            placeholder="Введите ссылку на аватарку"
                        />
                        {errorsUserInfo?.avatar && <p className="errorMessage">{errorsUserInfo?.avatar?.message}</p>}
                    </label>

                    <label className={s.formLabel}>
                        <FormInput
                            {...emailRegister}
                            id="email"
                            type="text"
                            placeholder="email"
                        />
                        {errorsUserInfo?.email && <p className="errorMessage">{errorsUserInfo?.email?.message}</p>}
                    </label>
                </div>

                <FormButton type="submit" color="secondary">Сохранить</FormButton>
            </Form>

            <Form title="Изменить пароль" handleFormSubmit={handleSubmitUserPassword(onSubmitUserPassword)} align='left'>
                <div className={s.formRowHalf}>
                    <label className={s.formLabel}>
                        <FormInput
                            {...passwordRegister}
                            id="password"
                            type="password"
                            placeholder="Пароль"
                        />
                        {errorsUserPassword?.password && <p className="errorMessage">{errorsUserPassword?.password?.message}</p>}
                    </label>
                </div>
                <FormButton type="submit" color="secondary">Сохранить</FormButton>
            </Form>
        </>


    );
}

export default ProfileForm;