import cn from 'classnames';

import s from './styles.module.css';
export const Button = ({ type, children, href, extraClass, htmlType = 'button', action }) => {

    function handleClick(e) {
        href && e.preventDefault();
        action()
    }

    return (
        href
            ? <a
                href={href || '#'}
                className={cn(
                    s.button,
                    {
                        [s[`button_type_${type}`]]: !!s[`button_type_${type}`],
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