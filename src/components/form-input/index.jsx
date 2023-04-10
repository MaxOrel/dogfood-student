import cn from 'classnames';
import s from './styles.module.css';
import { forwardRef } from 'react';

const FormInput = forwardRef(({ typeTag, ...props }, ref) => {
    return (
        typeTag === 'textarea'
            ? <textarea ref={ref} className={cn(s.input, s.textarea)} {...props} />
            : <input ref={ref} className={s.input}  {...props} />
    );
})

export default FormInput;