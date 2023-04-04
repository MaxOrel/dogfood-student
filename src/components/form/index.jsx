import { useState } from 'react';
import s from "./styles.module.css";

function Form({ handleForm }) {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        lastname: "",
        phoneNumber: ""
    });

    const handleChange = (evt) => {
        setContactInfo({ ...contactInfo, [evt.target.name]: evt.target.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(contactInfo);
        handleForm(contactInfo)
        setContactInfo({
            name: "",
            lastname: "",
            phoneNumber: ""
        })
    }

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <h3>Введите данные</h3>
            <input
                type="text"
                name="name"
                placeholder="Имя"
                value={contactInfo?.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastname"
                placeholder="Фамилия"
                value={contactInfo?.lastname}
                onChange={handleChange}
            />
            <input
                type="text"
                name="phoneNumber"
                placeholder="Номер телефона"
                value={contactInfo?.phoneNumber}
                onChange={handleChange}
            />

            <button>Отправить</button>
        </form>
    );
}

export default Form;