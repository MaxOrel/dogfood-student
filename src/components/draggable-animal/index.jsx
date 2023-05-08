import { useEffect, useState } from 'react';
import s from "./styles.module.css";
import { useDrag } from 'react-dnd';
import { DnDTypes } from '../dnd-container';

function DraggbleAnimal({ data }) {
    const { id, content } = data;

    const [{ isDrag }, dragRef] = useDrag({
        type: DnDTypes.animals,
        item: { id },
        collect: (monitor) => ({
            isDrag: monitor.isDragging()
        })
    })

    const opacity = isDrag ? 0.6 : 1;

    return (
        <>
            <div ref={dragRef} style={{ opacity }} className={s.animalElement}>
                {content}
            </div>

        </>
    );
}

export default DraggbleAnimal;