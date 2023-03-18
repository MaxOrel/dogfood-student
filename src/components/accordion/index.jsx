import s from './styles.module.css';

import cn from 'classnames';
import { useRef, useState } from 'react';
import { useElementSize } from '../../hooks';


function Accordion({ title, children }) {
    const [selected, setSelected] = useState(false);
    const [contentRef, { width, height }] = useElementSize()

    function toggleAccordionState() {
        setSelected(!selected);
    }

    return (
        <div className={cn(s.accordion, { [s.active]: selected })}>
            <button className={s.accordionButton} onClick={toggleAccordionState}>
                <p className={s.title}>{title}</p>
            </button>
            <div className={s.content} style={{ height: selected ? height : 0 }}>
                <p ref={contentRef} className={s.text}>{children}</p>
            </div>
        </div>
    );
}

export default Accordion;