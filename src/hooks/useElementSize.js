import { useCallback, useState } from 'react'
import { useEventListener, useIsomorphicLayoutEffect } from './index.js'


function useElementSize() {

    const [ref, setRef] = useState(null)
    const [size, setSize] = useState({
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