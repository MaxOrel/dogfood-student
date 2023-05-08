import { useCallback, useState } from 'react'
import { useEventListener, useIsomorphicLayoutEffect } from './index'

interface Size {
    width: number
    height: number
}

function useElementSize<T extends HTMLElement = HTMLDivElement>(): [
    (node: T | null) => void,
    Size,
] {
    const [ref, setRef] = useState<T | null>()
    const [size, setSize] = useState<Size>({
        width: 0,
        height: 0,
    })

    const handleSize = useCallback(() => {
        setSize({
            width: ref?.offsetWidth || 0,
            height: ref?.offsetHeight || 0,
        })

    }, [ref?.offsetHeight, ref?.offsetWidth])

    useEventListener('resize', handleSize)

    useIsomorphicLayoutEffect(() => {
        handleSize()
    }, [ref?.offsetHeight, ref?.offsetWidth])

    return [setRef, size]
}

export default useElementSize