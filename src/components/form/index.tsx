import { ReactNode, useState } from 'react';
import s from "./styles.module.css";
interface IFormProps {
    handleFormSubmit: (data: any) => void,
    title?: string,
    children: ReactNode
}
function Form({ handleFormSubmit, title, children }: IFormProps) {
    return (
        <form className={s.form} onSubmit={handleFormSubmit}>
            {title && <h2 className={s.title}>{title}</h2>}
            {children}
        </form>
    );
}

export default Form;