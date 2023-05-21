import cn from 'classnames';

import s from './styles.module.css';
import './styles.css';
import { DetailedHTMLProps, HTMLAttributes, MouseEvent, ReactNode } from 'react';

export enum ButtonVariant {
    "primary" = "primary",
    "secondary" = "secondary",
    "border" = "border",
    "ligth" = "ligth"
}

interface IButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: ButtonVariant,
    children: ReactNode,
    disabled?: boolean,
    href?: string,
    extraClass?: string,
    htmlType?: "submit" | "reset" | "button",
    action?: () => void
}
export const Button = ({ variant, children, href, extraClass = "", htmlType = "button", action, ...props }: IButtonProps) => {

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
                {...props}
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