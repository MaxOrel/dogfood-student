import cn from 'classnames';
import s from './styles.module.css';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface IFormButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    color: string
}
function FormButton({ children, color, ...props }: IFormButtonProps) {
    return (
        <button {...props} className={cn(s.btn, s[color])}>
            {children}
        </button>
    );
}

export default FormButton;