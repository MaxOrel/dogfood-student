import { Link } from 'react-router-dom';
import s from "./styles.module.css";
const PREV_PAGE = -1;
export function ContentHeader({ title, children, to, textButton }) {
    return (
        <>
            <Link className={s.buttonBack} to={to || PREV_PAGE}>
                {textButton}
            </Link>
            <h1 className={s.title}>{title}</h1>
            {children}
        </>
    );
}