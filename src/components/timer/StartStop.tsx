import * as React from 'react'

interface StartStopProps {
    /** Closure that provides the start behavior */
    start: () => void
    /** Closure that provides the stop behavior */
    stop: () => void
    /** Indicates whether the timer is started or not and thus whether the start or stop function should be called. */
    started: boolean
}

/**
 * Pure function component that handles a switch Start/Stop button and a function bound to each switch case.
 * 
 * @param props: {StartStopProps}.
 */
export default function StartStop(props: StartStopProps) {
    return (
        props.started ?
            <button onClick={props.stop}>STOP</button>
            :
            <button onClick={props.start}>START</button>
    )
}