import { useEffect, useState } from 'react';
import s from "./styles.module.css";
import DropTarget from '../drop-target';
import DraggbleAnimal from '../draggable-animal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const DnDTypes = {
    animals: 'animals',
    sort: 'sort'
}


function DnDContainer() {
    const [elements, setElements] = useState([]);
    const [draggedElements, setDraggedElements] = useState([])

    const handleDrop = (itemId) => {
        setElements(elements.filter(el => el.id !== itemId))

        setDraggedElements([...draggedElements, ...elements.filter(el => el.id === itemId)])
    }

    const listImages = [
        {
            id: 1,
            content: "🦔",
            description: "test",
        },
        {
            id: 2,
            content: "🦒",
            description: "test2",
        },
        {
            id: 3,
            content: "🐜",
            description: "test3",
        },
    ];


    useEffect(() => {
        setElements([...listImages])
    }, [])



    return (
        <section className={s.container}>
            <DndProvider backend={HTML5Backend}>
                <article className={s.animals}>
                    {elements.map(animal => (
                        <DraggbleAnimal key={animal.id} data={animal} />
                    ))}
                </article>
                <article className={s.animals}>
                    <DropTarget handleDrop={handleDrop}>
                        {draggedElements.map(item => (
                            <div key={item.id} className={s.item} >
                                <span className={s.animalItem}>{item.content}</span>
                                <p className={s.description}>{item.description}</p>
                            </div>
                        ))}
                    </DropTarget>
                </article>
            </DndProvider>

        </section >
    );
}

export default DnDContainer;