import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from './index.js'


function useEventListener(
    eventName,
    handler,
    element,
    options,
) {
    const savedHandler = useRef(handler)

    useIsomorphicLayoutEffect(() => {
        savedHandler.current = handler
    }, [handler])

    useEffect(() => {
        const targetElement = element?.current ?? window

        if (!(targetElement && targetElement.addEventListener)) return

        const listener = event => savedHandler.current(event)

        targetElement.addEventListener(eventName, listener, options)

        return () => {
            targetElement.removeEventListener(eventName, listener, options)
        }
    }, [eventName, element, options])
}

export default useEventListener