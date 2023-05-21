import { ReactNode, useState } from 'react';
import s from "./styles.module.css";
import cn from 'classnames';

interface IFormProps {
    handleFormSubmit: (data: any) => void,
    title?: string,
    children: ReactNode;
    align?: string;
}
function Form({ handleFormSubmit, title, children, align = "center" }: IFormProps) {
    return (
        <form className={cn(s.form, { [s[align]]: !!align })} onSubmit={handleFormSubmit}>
            {title && <h2 className={s.title}>{title}</h2>}
            {children}
        </form>
    );
}

export default Form;