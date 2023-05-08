import { useEffect, useState } from 'react';
import s from "./styles.module.css";
import { useDrop } from 'react-dnd';
import { DnDTypes } from '../dnd-container';

function DropTarget({ handleDrop, children }) {
    const [{ isHover }, dropRef] = useDrop({
        accept: DnDTypes.animals,
        drop: (item) => {
            console.log(item);
            handleDrop(item.id)
        },
        collect: monitor => ({
            isHover: monitor.isOver()
        })
    })

    const borderColor = isHover ? 'lightgreen' : 'transparent'
    return (
        <div className={s.target} ref={dropRef} style={{ borderColor }}>
            {children}
        </div>
    );
}

export default DropTarget;