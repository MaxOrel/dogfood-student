import cn from 'classnames';
import s from './styles.module.css';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
export enum FromButtonSize {
    "full" = "full",
    "minContent" = "minContent",
}
interface IFormButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    type: "button" | "submit" | "reset" | undefined;
    color: string;
    size?: FromButtonSize;
    extraClass?: string;
}
function FormButton({ children, color, extraClass, size = FromButtonSize.minContent, ...props }: IFormButtonProps) {
    return (
        <button {...props} className={cn(s.btn, s[color], { [extraClass as string]: !!extraClass, [s[size]]: !!size })}>
            {children}
        </button>
    );
}

export default FormButton;