import cn from 'classnames';

import s from './styles.module.css';
export const Button = ({ type, children, extraClass, htmlType = 'button', action }) => {
    return (
        <button
            type={htmlType}
            className={cn(
                s.button,
                {
                    [s[`button_type_${type}`]]: !!s[`button_type_${type}`],
                    [extraClass]: !!extraClass
                }
            )}
            onClick={action}
        >
            {children}
        </button>
    )
}