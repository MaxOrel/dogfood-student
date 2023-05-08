import cn from 'classnames';

import s from './styles.module.css';
import { MouseEvent, ReactNode } from 'react';
export enum ButtonVariant {
    "primary" = "primary",
    "secondary" = "secondary",
    "border" = "border",
}

interface IButtonProps {
    variant: ButtonVariant,
    children: ReactNode,
    href?: string,
    extraClass?: string,
    htmlType?: "submit" | "reset" | "button",
    action?: () => void
}
export const Button = ({ variant, children, href, extraClass = "", htmlType = "button", action }: IButtonProps) => {

    function handleClick(e: MouseEvent<HTMLAnchorElement>) {
        href && e.preventDefault();
        action && action();
    }

    return (
        href
            ? <a
                href={href || '#'}
                className={cn(
                    s.button,
                    {
                        [s[`button_type_${variant}`]]: !!s[`button_type_${variant}`],
                        [extraClass]: !!extraClass
                    }
                )}
                onClick={handleClick}
            >
                {children}
            </a>
            : <button
                type={htmlType}
                className={cn(
                    s.button,
                    {
                        [s[`button_type_${variant}`]]: !!s[`button_type_${variant}`],
                        [extraClass]: !!extraClass
                    }
                )}
                onClick={action}
            >
                {children}
            </button>
    )
}