import { Link, To } from 'react-router-dom';
import s from "./styles.module.css";
import { ReactNode } from 'react';
import { ReactComponent as ArrowIcon } from './img/ic-left-arrow.svg'

const PREV_PAGE = -1;
interface IContentHeaderProps {
    title: string, children?: ReactNode, to?: To, textButton?: string
}
export function ContentHeader({ title, children, to, textButton }: IContentHeaderProps) {
    return (
        <>
            {textButton && <Link className={s.buttonBack} to={to || PREV_PAGE as To}>
                <ArrowIcon className={s.iconBack} />{textButton}
            </Link>
            }
            <h1 className={s.title}>{title}</h1>
            {children}
        </>
    );
}