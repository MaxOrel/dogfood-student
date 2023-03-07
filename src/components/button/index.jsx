import cn from 'classnames';

import s from './styles.module.css';

console.log(s);

export const Button = ({ type, children, extraClass, htmlType = 'button' }) => {
    console.log(extraClass);
    return (
        <button type={htmlType} className={cn(
            s.button,
            {
                [s[`button_type_${type}`]]: !!s[`button_type_${type}`],
                [extraClass]: !!extraClass
            }
        )}>{children}</button>
    )
}